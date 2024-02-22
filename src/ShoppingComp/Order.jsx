
import ShopNaviBar from './ShopNaviBar';
import styles from './Order.module.css'
import { useNavigate } from 'react-router';




function Order() {
    const navigate = useNavigate();
    const openshop = () =>{
        navigate('/shopnow')
    }
    return (
        <div className={styles.outer}>
            <ShopNaviBar />
            <div className={styles.main2}>
                <div className={styles.round}>
                    <span className={styles.tick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-check"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </span>
                </div>
                <h2 className={styles.title}>Order placed successfully</h2>
                <p className={styles.text}>Thank you for shopping with us</p>
                <button className={styles.btn} onClick={openshop}>Continue Shopping</button>
            </div>
        </div>
    );
};

export default Order;
