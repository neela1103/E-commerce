import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Sec1.module.css";


function Section1() {
  const navigate = useNavigate();

  const openshopnow = () => {
    navigate('/shopnow');
  };
  return (
    <div className={styles.top}>
    <div className={styles.img12}>
      <div className={styles.imag1}>
        <img src="images/image-1.png" className={styles.img1} />
      </div>
      <div className={styles.imag2}>
        <img src="images/image-227.png" className={styles.img2}  />
      </div>
      <div className={styles.text}>
        <p className={styles.word1}>ULTIMATE</p>
        <p className={styles.word2}>SALE</p>
        <button className={styles.btn} onClick={openshopnow}>SHOP NOW</button>
      </div> 
      </div> 
      <div className={styles.imag3}>
        <img src="images\image2.png" className={styles.img3} />
      </div>

      <div className={styles.imag4}>
        <img src="images/image3.png" className={styles.img4}  />
      </div>

        <div className={styles.banner}>
            <div className={styles.left}>
                <p className={styles.first}>Festive gifting dilemma?</p>
                <p className={styles.get}>GET EXTRAS</p>
            </div>
            <div className={styles.right}>
                <div className={styles.data}>
                    <p className={styles.sec}>CASHBACK</p>
                    <span className={styles.dis}>10%</span>
                    <p className={styles.buy}>Buy 2 items </p>
                    <span className={styles.code}>Code SAVE10</span>
                </div>
                <div className={styles.data}>
                    <p className={styles.sec}>CASHBACK</p>
                    <span className={styles.dis}>15%</span>
                    <p className={styles.buy}>Buy 3 items </p>
                    <span className={styles.code}>Code SAVE15</span>
                </div>
                <div className={styles.data}>
                    <p className={styles.sec}>CASHBACK</p>
                    <span className={styles.dis}>15%</span>
                    <p className={styles.buy}>Buy 3 items </p>
                    <span className={styles.code}>Code SAVE20</span>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Section1;
