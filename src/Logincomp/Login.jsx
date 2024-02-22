import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styles from './Login.module.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLock } from 'react-icons/fa6';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router';
import Navcomp from "../Nav1/Navcomp";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../firebase";
const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const OpenHome = () => {
    navigate('/');
  };

  const handleCloseError = () => {
    setLoginError(false);
  };
  const OpenForgetPass =() =>{
    navigate('/forgetPass');
  }
  const loginfn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setLoginSuccess(true); // Update login success state upon successful login
      setLoginError(false); // Reset login error state
    } catch (error) {
      console.error('Error during login:', error);
      setLoginSuccess(false); // Set login success state to false
      setLoginError(true); // Set login error state to true
    }
  };
  
  return (
    <div >
    <Navcomp className={styles.navbar}/>
      {loginError && (
        <div className={styles.errorMessage}>
          <p>Incorrect email or password. Please try again.</p>
          <button
            type="button"
            className={styles.closeErrorBtn}
            onClick={handleCloseError}
          >
            Close
          </button>
        </div>
      )}
      {loginSuccess ? (
        <div className={styles.successMsg}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.tick} />
          <div className={styles.data}>Successfully Logged In</div>
          <button type="button" className={styles.okbtn} onClick={OpenHome}>
            OK
          </button>
        </div>
      ) : (
      
        <div className={styles.main}>
          <div className={styles.heading}>
            Login
            <div className={styles.underline}></div>
          </div>
          <form onSubmit={loginfn}>
            <div className={styles.inputs}>
              <div className={styles.name}>
                <HiOutlineMail className={styles.icon} />
                <input
                  type="email"
                  placeholder="Email Id"
                  className={styles.fields}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.name}>
                <FaLock className={styles.icon} />
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.fields}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.member}>
              Forget Password?
              <span className={styles.login} onClick={OpenForgetPass}>Click Here!</span>
            </div>
            <button className={styles.btn} type="submit">
              Login
            </button>
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Login;