import React, { useState } from 'react';
import ShopNaviBar from './ShopNaviBar';
import Footer from '../Footer/Footer';
import styles from './Cartshop.module.css';
import { RxCross2 } from 'react-icons/rx';
import Spinner from 'react-bootstrap/Spinner'
import clothes from './Data';
import { useNavigate, useParams } from 'react-router-dom';

function Cartshop() {
  const { id, selectedSize } = useParams();
  const selecteditems = clothes.find(item => String(item.id) === id);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const{ imageURL , brand , name ,amount } = selecteditems
  const handlePlaceOrder = async () => {
    setLoading(true);
  
    try {

      await someAsyncOrderPlacementFunction();
  
      navigate('/order');
    } catch (error) {
      console.error('Error placing order:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const someAsyncOrderPlacementFunction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Order placed successfully!');
        resolve();
      }, 2000); 
    });
  };
  

  return (
    <div>
      <ShopNaviBar />
      <div className={styles.main}>
        <div className={styles.left}>
          <span className={styles.cart}>Cart:</span>
          <span className={styles.Numberofitem}>Items</span>
          <div className={styles.item}>
          <img src={imageURL} alt="images" className={styles.img}></img>
            <div className={styles.aboutItem}>
              <p className={styles.brand}>
                {brand} <RxCross2 className={styles.cross} />
              </p>
              <p className={styles.name}>{name}</p>
              <div className={styles.sizequan}>
                <div className={styles.size}>Size:{selectedSize}</div>
                <div className={styles.quantity}>Quantity:0</div>
                <select className={styles.dropdown}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className={styles.Pricecal}>
                <p>
                  2<span> x Rs.</span>{amount}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.left1}>
            <div className={styles.pricedetails}>Price Details </div>
            <div className={styles.price}>
              Price <span className={styles.price1}>Rs. 1000 </span>{' '}
            </div>
            <div className={styles.Discount}>
              Discount <span className={styles.price1}>-Rs. 1000</span>
            </div>
            <div className={styles.shipping}>
              Shipping <span className={styles.price1}>Free</span>
            </div>
            <hr />
            <div className={styles.Total}>
              Total Amount <span className={styles.Total1}>Rs. </span>
            </div>
          </div>
          <button className={styles.btn} onClick={handlePlaceOrder} disabled={loading}>
            {loading ? <Spinner animation="border" variant="white" /> : 'Place Order'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cartshop;