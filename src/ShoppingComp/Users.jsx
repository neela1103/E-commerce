import React from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './Users.module.css';
import { useNavigate } from "react-router";
import { useAuth } from "../AuthContext";

function Users({ onClose }) {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    const collectionsHandler = () => {
        navigate("/shopnow");
    };

    const handleLogout = () => {
        signOut();
    };

    const OpenCartOrCartcomp = () => {
        if (user) {
            navigate("/finalcart");
        } else {
            navigate("/cartcomp");
        }
    };

    const OpenWishlistOrWishcomp = () => {
        if (user) {
            navigate("/wish");
        } else {
            navigate("/wishcomp");
        }
    };

    return (
        <div className={styles.main1}>
            <OutsideClickHandler onOutsideClick={onClose}>
                {user ? (
                    <div className={styles.special}>
                        <p>Welcome </p>
                        <p>{user.email}</p>
                        <div className={styles.item} onClick={collectionsHandler}>
                            Collections
                        </div>
                        <div className={styles.item} onClick={OpenWishlistOrWishcomp}>
                            Wishlist
                        </div>
                        <div className={styles.item} onClick={OpenCartOrCartcomp}>
                            Cart
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.item} onClick={handleLogout}>
                            Signout
                        </div>
                    </div>
                ) : (
                    <div className={styles.special}>
                        <p>Welcome</p>
                        <p>To access wishlist or cart</p>
                        <div className={styles.sign} onClick={() => navigate('/login')}>
                            Sign In
                        </div>
                        <div className={styles.item} onClick={collectionsHandler}>
                            Collections
                        </div>
                        <div className={styles.item} onClick={OpenWishlistOrWishcomp}>
                            Wishlist
                        </div>
                        <div className={styles.item} onClick={OpenCartOrCartcomp}>
                            Cart
                        </div>
                    </div>
                )}
            </OutsideClickHandler>
        </div>
    );
}

export default Users;