// Import necessary modules and functions
import styles from "./ForgetPass.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";
import Navcomp from "../Nav1/Navcomp";
import Footer from "../Footer/Footer";

function ForgetPass() {
  // State to store the email input value
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Function to navigate to the signup page
  const openSignup = () => {
    navigate("/signup");
  };

  // Function to handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Get the authentication instance
    const auth = getAuth();

    try {
      // Check if the email is associated with any user
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      // User found, send the password reset email
      await sendPasswordResetEmail(auth, email);

      // Password reset email sent successfully
      alert("Password reset email sent. Please check your email.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);

      // Display more specific error messages based on Firebase error codes
      if (error.code === 'auth/user-not-found') {
        alert("No account found with the provided email address.");
      } else {
        alert("Error occurred while sending password reset email. Please try again.");
      }
    }
  };

  // Render the component
  return (
    <div className={styles.outer}>
      <Navcomp />
      <div className={styles.main}>
        <div className={styles.head}>
          <p>Forget Password</p>
        </div>
        <form onSubmit={handleResetPassword}>
          <div className={styles.email}>
            Email Address
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputemail}
              required
            />
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
          <p className={styles.sign} onClick={openSignup}>
            Sign Up
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

// Export the ForgetPass component
export default ForgetPass;