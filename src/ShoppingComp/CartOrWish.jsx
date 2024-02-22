import React from "react";
import { FaRegUser } from "react-icons/fa";
import styles from './CartOrWish.module.css';
import { useNavigate } from "react-router";
import ShopNaviBar from "./ShopNaviBar";

const CartOrWish = () => {

    const navigate = useNavigate();

    const openlogincomp = () => {
        navigate('/login');
    };

    return (
        <div>
        <ShopNaviBar/>
        <div className={styles.main}>
            <div className={`${styles.icon}`}>
                <FaRegUser size={40} />
            </div>

            <h2 className={styles.title}>Please Sign In</h2>
            <p className={styles.text}>Login In to view items in your Cart</p>
            <button onClick={openlogincomp} className={styles.button}>Login In</button>
        </div>
        </div>
    );
}

export default CartOrWish;
