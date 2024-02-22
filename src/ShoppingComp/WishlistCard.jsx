import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { moveToCartAsync, removeItemWish } from '../features/wishlistSlice';
import ShopNaviBar from './ShopNaviBar';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../AuthContext';
import { collection, getDocs, query, doc, getDoc, setDoc } from 'firebase/firestore';
import clothes from './Data';
import { deleteDocument } from '../firebase';

import WishEmpty from './Empty/WishEmpty'

import { useParams } from 'react-router-dom';

function WishlistCard() {
    const { wish } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(null);
    const [userwishlistData, setwishlistData] = useState([]);
    const { user } = useAuth();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const userId = user.uid;
                setUserId(userId);
                const wishlistRef = collection(db, 'userWishlist', userId, 'Wishlist');
                const q = query(wishlistRef);
                try {
                    const wishlistSnapshot = await getDocs(q);
                    const wishlistData = wishlistSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setwishlistData(wishlistData);
                } catch (error) {
                    console.error('Error fetching wishlist data:', error);
                }
            }
        };
        fetchUserData();
    }, [user, dispatch]);

    const handleDeleteClick = async (userId, itemId) => {
        try {
            const collectionRef = doc(db, 'userWishlist', userId, 'Wishlist', itemId);
            await deleteDocument(collectionRef);
            setwishlistData((prevData) => prevData.filter((item) => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    const addToCart = (selectedItem) => {
        return async (dispatch, getState) => {
            try {
                const CartRef = doc(db, `CartUsers/${user.uid}/Cart/${selectedItem.id}`);
                const existingDataDoc = await getDoc(CartRef);
                const existingData = existingDataDoc.exists() ? existingDataDoc.data() : {};
                if (!existingData.items) {
                    existingData.items = [];
                }
                const existingItemIndex = existingData.items.findIndex(item => item.itemId === selectedItem.id);

                if (existingItemIndex !== -1) {
                    existingData.items[existingItemIndex].Quantity += quantity;
                } else {
                    existingData.items.push({
                        itemId: selectedItem.id,
                        Quantity: quantity
                    });
                }
                await setDoc(CartRef, existingData);

                await handleDeleteClick(userId, selectedItem.id);

                dispatch(moveToCartAsync(selectedItem, quantity));

                notifyAddToCart(selectedItem.name);
            } catch (error) {
                console.error('Error adding to cart:', error);
            }
        };
    };

    const notifyAddToCart = (itemName) => {
        toast.success(`${itemName} added to cart!`, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div>
            <ShopNaviBar />
            <section className="h-100" style={{ backgroundColor: "bg-body-tertiary" }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            {userwishlistData.length === 0 ? (
                                <WishEmpty />
                            ) : (
                                <div>
                                    <h3>Wishlist - {userwishlistData.length} items</h3>
                                    <div className="card rounded-3 mb-4">
                                        {userwishlistData.map((data) => {
                                            const selectedItem = clothes.find((item) => String(item.id) === String(data.id));
                                            return (
                                                <div className="card-body p-4" key={selectedItem.id}>
                                                    <div className="row d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img
                                                                src={selectedItem.imageURL}
                                                                className="img-fluid rounded-3"
                                                                alt="Cotton T-shirt"
                                                            />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <p className="lead fw-normal mb-2">{selectedItem.name}</p>
                                                            <p>
                                                                <span className="text-muted">Size: </span>M{" "}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-1 col-lg-2 col-xl-2">
                                                            <h5 className="mb-0">Rs. {selectedItem.amount}</h5>
                                                        </div>
                                                        <div className="col-md-6 col-lg-5 col-xl-5 d-flex justify-content-end align-items-center gap-3">
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={() => {
                                                                    dispatch(addToCart(selectedItem));
                                                                    notifyAddToCart(selectedItem.name);
                                                                }}
                                                                style={{ transition: 'background-color 0.3s ease-in-out' }}
                                                                onMouseOver={(e) => { e.target.style.backgroundColor = '#007BFF'; }}
                                                                onMouseOut={(e) => { e.target.style.backgroundColor = '#3498DB'; }}
                                                            >Add to cart
                                                            </button>

                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() => handleDeleteClick(userId, selectedItem.id)}
                                                                style={{ transition: 'background-color 0.3s ease-in-out' }}
                                                                onMouseOver={(e) => { e.target.style.backgroundColor = '#DC3545'; }}
                                                                onMouseOut={(e) => { e.target.style.backgroundColor = '#FF444F'; }}
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <style>
                {`
                    @media (max-width: 767px) {
                        .btn-primary,
                    .btn-danger {
                        margin-top: 2rem;
                        height: 2.4rem; /* Adjust the height for smaller screens */
                        width: 10rem;
                        display: flex;
                       flex-direction: column;
                       font-size: 0.9rem; /* Adjust the font size for smaller screens */
                   text-align: center;
                   padding-left : 1.6rem;
            }
            .btn-danger{
                padding-left:2.2rem
            }
                        
                    }
                `}
            </style>
        </div>
    );
}

export default WishlistCard;
