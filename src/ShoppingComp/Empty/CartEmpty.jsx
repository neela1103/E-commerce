import React from "react";
import { FaRegUser } from "react-icons/fa";
import styles from './Cart.module.css';


function CartEmpty() {
    return (
            <div className={styles.main}>
            <div className={`${styles.icon}`}>
                <FaRegUser size={40} />
            </div>
            <p className={styles.text}>Your Cart is Empty</p>
        </div>
    )
}

export default CartEmpty;