import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import styles from './FinalCart.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { collection, updateDoc, getDocs, query, setDoc, getDoc, doc } from 'firebase/firestore';
import { deleteDocument } from '../firebase';
import { db } from '../firebase';
import clothes from './Data';
import ShopNaviBar from './ShopNaviBar';
import Footer from '../Footer/Footer';
import { movetowish } from "../features/wishlistSlice";
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTypography,
} from 'mdb-react-ui-kit';
import { FaTrash, FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
import CartEmpty from './Empty/CartEmpty';

function FinalCart() {
    let totalamount = 0;
    let totalQuantities = 0;
    const { user } = useAuth();
    const dispatch = useDispatch();
    const [userCartData, setUserCartData] = useState([]);
    const [userId, setUserId] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const userId = user.uid;
                setUserId(userId);
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
    }, [user, dispatch]);

    const navigate = useNavigate();

    const openOrder = () => {
        navigate('/order');
    };

    const handleDeleteClick = async (userId, itemId) => {
        try {
            const collectionRef = doc(db, 'CartUsers', userId, 'Cart', itemId);
            await deleteDocument(collectionRef);
            setUserCartData((prevData) => prevData.filter((item) => item.id !== itemId));
            toast.success('Item removed from cart successfully!', { position: toast.POSITION.BOTTOM_RIGHT });
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    const handleDecrementClick = async (userId, itemId, currentQuantity) => {
        if (currentQuantity > 1) {
            try {
                const itemRef = doc(db, 'CartUsers', userId, 'Cart', itemId);
                await updateDoc(itemRef, {
                    'items.0.Quantity': currentQuantity - 1,
                });
                setUserCartData((prevData) =>
                    prevData.map((item) =>
                        item.id === itemId ? { ...item, items: [{ ...item.items[0], Quantity: currentQuantity - 1 }] } : item
                    )
                );
            } catch (error) {
                console.error('Error decrementing quantity:', error);
            }
        }
    };

    const handleIncrementClick = async (userId, itemId, currentQuantity) => {
        try {
            const itemRef = doc(db, 'CartUsers', userId, 'Cart', itemId);
            await updateDoc(itemRef, {
                'items.0.Quantity': currentQuantity + 1,
            });
            setUserCartData((prevData) =>
                prevData.map((item) =>
                    item.id === itemId ? { ...item, items: [{ ...item.items[0], Quantity: currentQuantity + 1 }] } : item
                )
            );
        } catch (error) {
            console.error('Error incrementing quantity:', error);
        }
    };

    const addToWish = (selectedItem) => {
        return async (dispatch) => {
            try {
                const WishRef = doc(db, `userWishlist/${user.uid}/Wishlist/${selectedItem.id}`);
                const existingDataDoc = await getDoc(WishRef);
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
                await setDoc(WishRef, existingData);

                await handleDeleteClick(userId, selectedItem.id);

                dispatch(movetowish(selectedItem, quantity));
                notifyAddToWishlist(selectedItem.name);
            } catch (error) {
                console.error('Error adding to wishlist:', error);
            }
        };
    };

    const handleCheckoutClick = async () => {
        try {
            console.log('Starting checkout process...');

            const cartRef = collection(db, 'CartUsers', userId, 'Cart');
            const q = query(cartRef);
            const cartSnapshot = await getDocs(q);

            await Promise.all(cartSnapshot.docs.map(async (doc) => {
                const itemId = doc.id;
                const itemRef = doc.ref; // Corrected usage to refer to the document reference
                await deleteDocument(itemRef);
            }));

            console.log('Checkout successful!');
            openOrder();

            // Use toast without accessing POSITION directly
            toast.success('Checkout successful!', { position: 'bottom-right' });
        } catch (error) {
            console.error('Error during checkout:', error);

            // Use toast without accessing POSITION directly
            toast.error('Error during checkout. Please try again.', { position: 'bottom-right' });
        }
    };


    const notifyAddToWishlist = (itemName) => {
        toast.success(`${itemName} added to wishlist!`, {
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
            <div>
                <section className="h-100 gradient-custom">
                    <MDBContainer className="py-5 h-100">
                        {userCartData.length > 0 ? (
                            <MDBRow className="justify-content-center my-4">
                                <MDBCol md="8">
                                    <MDBCard className="mb-4">
                                        <MDBCardHeader className="py-3">
                                            <MDBTypography tag="h5" className="mb-0">
                                                Cart - {userCartData.length} items
                                            </MDBTypography>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            {userCartData.map((data) => {
                                                const selectedItem = clothes.find((item) => String(item.id) === String(data.id));
                                                const quantity = data.items ? data.items[0].Quantity : 0;
                                                const productPrice = selectedItem.amount.replace(",", "") * quantity;
                                                totalQuantities = quantity + totalQuantities;
                                                totalamount = totalamount + productPrice;
                                                return (
                                                    <MDBRow key={selectedItem.id}>
                                                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                            <MDBRipple rippleTag="div" rippleColor="light" className="bg-image rounded hover-zoom hover-overlay" >
                                                                <img src={selectedItem.imageURL} className="w-100" alt={selectedItem.name} />
                                                                <a href="#!">
                                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                                                </a>
                                                            </MDBRipple>
                                                        </MDBCol>
                                                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                            <p>
                                                                <strong>{selectedItem.name}</strong>
                                                            </p>
                                                            <p>Size: M</p>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-sm me-1 mb-2"
                                                                data-mdb-toggle="tooltip"
                                                                title="Remove item"
                                                                onClick={() => handleDeleteClick(userId, selectedItem.id)}
                                                            >
                                                                <FaTrash />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm me-1 mb-2"
                                                                data-mdb-toggle="tooltip"
                                                                title="wishlist item"
                                                                onClick={() => dispatch(addToWish(selectedItem))}
                                                            >
                                                                <FaHeart />
                                                            </button>
                                                        </MDBCol>
                                                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                            <div className="d-flex mb-4" style={{ maxWidth: '40px' }}>
                                                                <button
                                                                    className="btn btn-primary px-4 ms-0 mb-5 mr-2"
                                                                    onClick={() => handleDecrementClick(userId, selectedItem.id, quantity)}
                                                                >
                                                                    <FaMinus />
                                                                </button>
                                                                <input
                                                                    style={{
                                                                        marginLeft: '0.5rem',
                                                                        width: '4rem',
                                                                        height: '2.2rem',
                                                                        textAlign: 'center',
                                                                    }}
                                                                    value={quantity}
                                                                    min={0}
                                                                    type="number"
                                                                    label="Quantity"
                                                                    onChange={() => null}
                                                                />
                                                                <button
                                                                    className="btn btn-primary px-4 ms-2 mb-5"
                                                                    onClick={() => handleIncrementClick(userId, selectedItem.id, quantity)}
                                                                >
                                                                    <FaPlus />
                                                                </button>
                                                            </div>
                                                            <p className="text-start text-md-center ml-6 padding-top-2"  >
                                                                <strong className={styles.rate}>Rs. {selectedItem.amount}</strong>
                                                            </p>
                                                        </MDBCol>
                                                    </MDBRow>
                                                );
                                            })}
                                            <hr className="my-4" />
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBCard className="mb-4">
                                        <MDBCardHeader>
                                            <MDBTypography tag="h5" className="mb-0">
                                                Summary
                                            </MDBTypography>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBListGroup flush>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                    Products Total Amount
                                                    <span>Rs.{totalamount}</span>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                    Total Quantity
                                                    <span>{totalQuantities}</span>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                                    Shipping
                                                    <span>+Rs.99</span>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                    <div>
                                                        <strong>Total amount</strong>
                                                        <strong>
                                                            <p className="mb-0">(including VAT)</p>
                                                        </strong>
                                                    </div>
                                                    <span>
                                                        <strong>Rs.{totalamount + 99}</strong>
                                                    </span>
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                            <button
                                                type="button"
                                                // className="btn btn-primary btn-lg btn-block button-primary"
                                                className={styles.checkout}
                                                onClick={handleCheckoutClick}
                                                onMouseOver={(e) => { e.target.style.backgroundColor = 'darkred'; }}
                                                onMouseOut={(e) => { e.target.style.backgroundColor = 'red'; }}
                                            >
                                                Go to checkout
                                            </button>

                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        ) : (
                            <CartEmpty />
                        )}
                    </MDBContainer>
                </section>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default FinalCart;