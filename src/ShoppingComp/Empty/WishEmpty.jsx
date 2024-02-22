import React from "react";
import { FaRegHeart } from "react-icons/fa";
import styles from './WishCart.module.css';

function WishEmpty() {
    return (
        <div className={styles.main}>
            <div className={`${styles.icon}`}>
                <FaRegHeart size={40} />
            </div>
            <p className={styles.text}>Your Wishlist is Empty</p>
        </div>
    )
}

export default WishEmpty;