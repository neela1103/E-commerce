import styles from "./Section8.module.css";
import React, { useState } from 'react';

function Section8() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
        setIsValid(true);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailIsValid = validateEmail();
        setIsValid(emailIsValid);

        if (emailIsValid) {
            console.log('Thank you For Subscribing', email);
            setSubmitted(true);
            setEmail(''); 
        }
    };

    return (
        <div className={styles.main}>
            <img src="images\Boy.png" className={styles.boy}/>
            <div className={styles.email}>
                <p className={styles.subscribe}>Subscribe To Our Newsletter</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.emailbox}>
                        <input
                            type="email"
                            className={`${styles.inputField} ${isValid ? '' : styles.invalid}`}
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    {submitted && <div className={styles.thankYouMessage}>Thank you for subscribing!</div>}
                    <button type="submit" className={styles.btn}>Subscribe Now</button>
                </form>
            </div>
            <img src="images\girl.png" className={styles.girls} />
        </div>
    )
}

export default Section8;
