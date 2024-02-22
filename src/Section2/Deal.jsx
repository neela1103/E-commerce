import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Deal.module.css";
import { useNavigate } from 'react-router';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeComponent = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className={styles.time}>
      <div className={styles.box}>
        <span className={styles.numbers}>{formatTimeComponent(timeLeft.days)}</span>
      </div>
      <div className={styles.box}>
        <span className={styles.numbers}>{formatTimeComponent(timeLeft.hours)}</span>
      </div>
      <div className={styles.box}>
        <span className={styles.numbers}>{formatTimeComponent(timeLeft.minutes)}</span>
      </div>
      <div className={styles.box}>
        <span className={styles.numbers}>{formatTimeComponent(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};



function Deal() {
  const targetDate = '2024-03-01T03:59:58';
  const navigate = useNavigate();
  const opencollection = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/shopnow')
  }

  return (
    <div id="dealsSection" className={styles.main} >
      <div className={styles.deals}>
        <p className={styles.headline}>Deals Of The Month</p>
        <p className={styles.written}>Spend more – Save more!!! Your wallet-friendly sale. Clean our sales by buying
Hurry up! When it’s gone, it’s gone
Our Sale Is Full of Happiness.</p>
        <button className={styles.buttn} onClick={opencollection}>Buy Now</button>
        <p className={styles.hurry}>Hurry, Before It's Too Late!</p>
        <CountdownTimer targetDate={targetDate} />
        <ul className={styles.timeunit}>
          <li>Days</li>
          <li>Hr</li>
          <li>Min</li>
          <li>Sec</li>
        </ul>
      </div>
      <div className={styles.slider}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item className={styles.imgHolder}>
            <img
              className={styles.image1}
              src="images/one.jpg"  
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.imgHolder}>
            <img
              className={styles.image2}
              src="images/three.jpg"  
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.imgHolder}>
            <img
              className={styles.image3}
              src="images/forth.jpg"  
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  );
}

export default Deal;