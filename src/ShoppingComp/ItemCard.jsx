import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import styles from './ItemCard.module.css';
import ShopNaviBar from './ShopNaviBar';
import clothes from './Data';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getCartTotal } from '../features/cartSlice';
import { movetowish } from '../features/wishlistSlice';
import { useAuth } from "../AuthContext";
import { doc, setDoc, getDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';

function ItemCard() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedItem = clothes.find(item => String(item.id) === id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { imageURL, brand, name, amount } = selectedItem;

  const handleSizeClick = (size) => {
    setSelectedSize(prevSize => (prevSize === size ? null : size));
  };

  const handleAddToCart = async () => {
    if (isLoggedIn()) {
      const CartRef = doc(db, `CartUsers/${user.uid}/Cart/${id}`);
      const existingDataDoc = await getDoc(CartRef);
      const existingData = existingDataDoc.exists() ? existingDataDoc.data() : {};

      if (!existingData.items) {
        existingData.items = [];
      }

      const existingItemIndex = existingData.items.findIndex(item => item.itemId === id);

      if (existingItemIndex !== -1) {
        existingData.items[existingItemIndex].Quantity += quantity;
      } else {
        existingData.items.push({
          itemId: id,
          Quantity: quantity
        });
      }

      await setDoc(CartRef, existingData);

      dispatch(addToCart({ ...selectedItem, quantity: 1 })); 
      dispatch(getCartTotal()); 
    } else {
      alert('Please log in to add items to Cart.');
    }
  };

  const handleAddToWishlist = () => {
    if (isLoggedIn()) {
      const wishlistRef = doc(db, `userWishlist/${user.uid}/Wishlist/${id}`);
      const wishlistData = {
        items: arrayUnion({
          itemId: id
        })
      };
  
      setDoc(wishlistRef, wishlistData, { merge: true })
        .then(() => {
          console.log("Added to wishlist");
          setWishlisted(true); 
        })
        .catch((error) => {
          console.error("Error adding to wishlist:", error);
        });
  
      dispatch(movetowish(selectedItem));
    } else {
      alert('Please log in to add items to wishlist.');
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  return (
    <div className={styles.upper}>
      <ShopNaviBar />
      <div className={styles.lower}>
        <div className={styles.img}>
          <img src={imageURL} alt="Product" width={288} height={432} />
        </div>

        <div className={styles.content}>
          <span className={styles.brand}>{brand}</span>
          <span className={styles.name}>{name}</span>
          <span className={styles.price}>Rs. {amount}</span>
          <div className={styles.select}>
            <span className={styles.size}>Select Size</span>
          </div>
          <div className={styles.sizes}>
            {[31, 32, 33, 34].map(size => (
              <p
                key={size}
                className={`${styles.sizeslen} ${selectedSize === size ? styles.selected : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </p>
            ))}
          </div>
          <div className={styles.btn}>
            <button className={isWishlisted ? styles.wishlisted : styles.wish} onClick={handleAddToWishlist}>
              {isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </button>
            <button className={styles.cart} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;