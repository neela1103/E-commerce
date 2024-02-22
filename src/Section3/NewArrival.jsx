import styles from "./NewArrival.module.css";
import { useNavigate } from "react-router";

function NewArrival() {
  const navigate = useNavigate();
  const opencollection = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/shopnow')
  }
  return (
    <div id="womensSection" className={styles.main}>
      <p className={styles.new}>New Arrivals</p>
      <p className={styles.line}>
        New season, new arrivals, new you
        Upgrade your wardrobe with our latest collection Fresh off the rack: new arrivals!!!
      </p>
      <div className={styles.types}>
        <button className={styles.one}>Beauty and Trends</button>
        <button className={styles.two}>Women's Fashion</button>
        <button className={styles.three}>Women Accessories</button>
        <button className={styles.four}>Bags and Shoes</button>
        <button className={styles.five}>Discount Deals</button>
      </div>
      <div className={styles.upper}>
        <div className={styles.outer1}>
          <img src="images/box-1.png" className={styles.box1} width="250px" height="240px" alt="Box 1" />
          <p className={styles.dressname}>Long Dress</p>
          <p className={styles.karam}>Al Karam</p>
          <p className={styles.rating}>(4.1k) Customer Reviews</p>
          <p className={styles.price}>$95.50</p>
          <p className={styles.sold}>Almost Sold Out</p>
          <div className={styles.stars}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120" />
            </svg>
          </div>
        </div>
        <div className={styles.outer2}>
          <img src="images/box-2.png" className={styles.box2} width="250px" height="240px" alt="Box 2" />
          <p className={styles.dressname}>Full Sweater</p>
          <p className={styles.karam}>Al Karam</p>
          <p className={styles.rating}>(4.1k) Customer Reviews</p>
          <p className={styles.price}>$95.50</p>
          <p className={styles.sold}>Almost Sold Out</p>
          <div className={styles.stars}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120" />
            </svg>
          </div>
        </div>
        <div className={styles.outer3}>
          <img src="images/box-3.png" className={styles.box3} width="250px" height="240px" alt="Box 3" />
          <p className={styles.dressname}>Shiny Dress</p>
          <p className={styles.karam}>Al Karam</p>
          <p className={styles.rating}>(4.1k) Customer Reviews</p>
          <p className={styles.price}>$95.50</p>
          <p className={styles.sold}>Almost Sold Out</p>
          <div className={styles.stars}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120" />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.lower}>

        <div className={styles.outer4}>
          <img src="images/box 4.png" className={styles.box4} width="250px" height="240px" alt="Box 4" />
          <p className={styles.dressname}>White Dress</p>
          <p className={styles.karam}>Al Karam</p>
          <p className={styles.rating}>(4.1k) Customer Reviews</p>
          <p className={styles.price}>$95.50</p>
          <p className={styles.sold}>Almost Sold Out</p>
          <div className={styles.stars}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120" />
            </svg>
          </div>
        </div>
        <div className={styles.outer5}>
          <img src="images/box 5.png" className={styles.box5} width="250px" height="240px" alt="Box 5" />
          <p className={styles.dressname}>Colorful Dress</p>
          <p className={styles.karam}>Al Karam</p>
          <p className={styles.rating}>(4.1k) Customer Reviews</p>
          <p className={styles.price}>$95.50</p>
          <p className={styles.sold}>Almost Sold Out</p>
          <div className={styles.stars}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120" />
            </svg>
          </div>
        </div>
        <div className={styles.outer6}>
          <img src="images/box 6.png" className={styles.box6} width="250px" height="240px" alt="Box 6" />
          <p className={styles.dressname}>White Shirt</p>
          <p className={styles.karam}>Al Karam</p>
          <p className={styles.rating}>(4.1k) Customer Reviews</p>
          <p className={styles.price}>$95.50</p>
          <p className={styles.sold}>Almost Sold Out</p>
          <div className={styles.stars}>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120" />
            </svg>
          </div>
        </div>
      </div>
      <button className={styles.btn} onClick={opencollection}>View More</button>
    </div>
  );
}

export default NewArrival;
