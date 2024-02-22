import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { IoBagHandleOutline } from 'react-icons/io5';
import styles from './ShopNaviBar.module.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Users from './Users'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';
import { useAuth } from '../AuthContext';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';

function ShopNaviBar() {
  const { cart, } = useSelector((state) => state.cart);
  const { user } = useAuth();
  const [userCartData, setUserCartData] = useState([]);
  const [userWishData, setuserWishData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userId = user.uid;

        const cartRef = collection(db, 'CartUsers', userId, 'Cart');
        const q = query(cartRef);

        try {
          const cartSnapshot = await getDocs(q);
          const cartData = cartSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setUserCartData(cartData);
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userId = user.uid;

        const cartRef = collection(db, 'userWishlist', userId, 'Wishlist');
        const q = query(cartRef);

        try {
          const cartSnapshot = await getDocs(q);
          const cartData = cartSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setuserWishData(cartData);
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);


  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();


  const OpenCartOrCartcomp = () => {
    if (user) {
      navigate("/finalcart");
    }
    else {
      navigate("/cartcomp");
    }
  }
  const OpenWishlistOrWishcomp = () => {
    if (user) {
      navigate("/wish");
    }
    else {
      navigate("/wishcomp");
    }
  }
  const openShoppingComp = () => {
    navigate("/shopnow")
  }
  const toggleMenuHandler = () => {
    if (isMenuVisible) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  const openMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };
  const openHome = () =>{
    navigate("/");
  }

  return (
    <div>
      <Navbar className={`${styles.main} bg-body-tertiary`}>
        <Container>
          <Navbar.Brand className={styles.head} >
            <span onClick={openHome}>FASHION <span className={styles.red}>HUB</span></span>
            <span onClick={openShoppingComp} className={styles.collection}>Collections</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className={styles.icon}>
            <FaRegHeart onClick={() => OpenWishlistOrWishcomp()} />
            <span className={styles.wishquan}>{userWishData.length}</span>
            <IoBagHandleOutline onClick={() => OpenCartOrCartcomp()} />
            <span className={styles.quantity}>{userCartData.length}</span>
          </Navbar.Collapse>

          <div className={`${styles.usernav}  ${isMenuVisible ? 'active' : ''}`}>
            <FaRegUser onClick={() => toggleMenuHandler()} />
          </div>
          {isMenuVisible && (
            <Users onClose={closeMenu} />
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default ShopNaviBar;