import React, { useRef, useState } from 'react';
import styles from './ImageScroller.module.css';

const div1Content = (
  <div className={styles.div1}>
    <div className={styles.outer}>
      <img src="../images/face.png" alt="Image"  className={styles.img1} />
      <div className={styles.reviews}>
        <p className={styles.review}>Quick service & very trustworthy. I personally reccommend this brand.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 95 20" fill="none" className={styles.stars}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.33182L9.5 0.204102L7.33536 7.33182H0L5.93479 11.9461L3.73214 19.2041L9.5 14.7187L15.2679 19.2041L13.0652 11.9461L19 7.33182H11.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.33182L28.5 0.204102L26.3354 7.33182H19L24.9348 11.9461L22.7321 19.2041L28.5 14.7187L34.2679 19.2041L32.0652 11.9461L38 7.33182H30.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.33182L47.5 0.204102L45.3354 7.33182H38L43.9348 11.9461L41.7321 19.2041L47.5 14.7187L53.2679 19.2041L51.0652 11.9461L57 7.33182H49.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.33182L66.5 0.204102L64.3354 7.33182H57L62.9348 11.9461L60.7321 19.2041L66.5 14.7187L72.2679 19.2041L70.0652 11.9461L76 7.33182H68.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.33182L85.5 0.204102L83.3354 7.33182H76L81.9348 11.9461L79.7321 19.2041L85.5 14.7187L91.2679 19.2041L89.0652 11.9461L95 7.33182H87.6646Z" fill="#FCA120" />
        </svg>
        <div className={styles.line}></div>
        <p className={styles.name}>Sherlin</p>
      </div>
    </div>
  </div>
);

const div2Content = (
  <div className={styles.div2}>
    <div className={styles.outer}>
      <img src="../images/face2.png" alt="Image" className={styles.img1} />
      <div className={styles.reviews}>
        <p className={styles.review1}>"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!".</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 95 20" fill="none" className={styles.stars}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.33182L9.5 0.204102L7.33536 7.33182H0L5.93479 11.9461L3.73214 19.2041L9.5 14.7187L15.2679 19.2041L13.0652 11.9461L19 7.33182H11.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.33182L28.5 0.204102L26.3354 7.33182H19L24.9348 11.9461L22.7321 19.2041L28.5 14.7187L34.2679 19.2041L32.0652 11.9461L38 7.33182H30.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.33182L47.5 0.204102L45.3354 7.33182H38L43.9348 11.9461L41.7321 19.2041L47.5 14.7187L53.2679 19.2041L51.0652 11.9461L57 7.33182H49.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.33182L66.5 0.204102L64.3354 7.33182H57L62.9348 11.9461L60.7321 19.2041L66.5 14.7187L72.2679 19.2041L70.0652 11.9461L76 7.33182H68.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.33182L85.5 0.204102L83.3354 7.33182H76L81.9348 11.9461L79.7321 19.2041L85.5 14.7187L91.2679 19.2041L89.0652 11.9461L95 7.33182H87.6646Z" fill="#FCA120" />
        </svg>
        <div className={styles.line}></div>
        <p className={styles.name}>James K.</p>
      </div>
    </div>
  </div>
);

const div3Content = (
  <div className={styles.div3}>
    <div className={styles.outer}>
      <img src="../images/face3.jpg" alt="Image"  className={styles.img1} />
      <div className={styles.reviews}>
        <p className={styles.review}>Quick service & very trustworthy. I personally reccommend this brand.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 95 20" fill="none" className={styles.stars}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.33182L9.5 0.204102L7.33536 7.33182H0L5.93479 11.9461L3.73214 19.2041L9.5 14.7187L15.2679 19.2041L13.0652 11.9461L19 7.33182H11.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.33182L28.5 0.204102L26.3354 7.33182H19L24.9348 11.9461L22.7321 19.2041L28.5 14.7187L34.2679 19.2041L32.0652 11.9461L38 7.33182H30.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.33182L47.5 0.204102L45.3354 7.33182H38L43.9348 11.9461L41.7321 19.2041L47.5 14.7187L53.2679 19.2041L51.0652 11.9461L57 7.33182H49.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.33182L66.5 0.204102L64.3354 7.33182H57L62.9348 11.9461L60.7321 19.2041L66.5 14.7187L72.2679 19.2041L70.0652 11.9461L76 7.33182H68.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.33182L85.5 0.204102L83.3354 7.33182H76L81.9348 11.9461L79.7321 19.2041L85.5 14.7187L91.2679 19.2041L89.0652 11.9461L95 7.33182H87.6646Z" fill="#FCA120" />
        </svg>
        <div className={styles.line}></div>
        <p className={styles.name}>Divid S.</p>
      </div>
    </div>
  </div>
);

const div4Content = (
  <div className={styles.div4}>
    <div className={styles.outer}>
      <img src="../images/face4.jpg" alt="Image" width={130} height={130} className={styles.img1} />
      <div className={styles.reviews}>
        <p className={styles.review}>You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 95 20" fill="none" className={styles.stars}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.33182L9.5 0.204102L7.33536 7.33182H0L5.93479 11.9461L3.73214 19.2041L9.5 14.7187L15.2679 19.2041L13.0652 11.9461L19 7.33182H11.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.33182L28.5 0.204102L26.3354 7.33182H19L24.9348 11.9461L22.7321 19.2041L28.5 14.7187L34.2679 19.2041L32.0652 11.9461L38 7.33182H30.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.33182L47.5 0.204102L45.3354 7.33182H38L43.9348 11.9461L41.7321 19.2041L47.5 14.7187L53.2679 19.2041L51.0652 11.9461L57 7.33182H49.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.33182L66.5 0.204102L64.3354 7.33182H57L62.9348 11.9461L60.7321 19.2041L66.5 14.7187L72.2679 19.2041L70.0652 11.9461L76 7.33182H68.6646Z" fill="#FCA120" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.33182L85.5 0.204102L83.3354 7.33182H76L81.9348 11.9461L79.7321 19.2041L85.5 14.7187L91.2679 19.2041L89.0652 11.9461L95 7.33182H87.6646Z" fill="#FCA120" />
        </svg>
        <div className={styles.line}></div>
        <p className={styles.name}>Tom m.</p>
      </div>
    </div>
  </div>
);

function ImageScroller() {
  const sliderRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesPerPage = 3;

  const contentData = [
    { id: 1, content: div1Content },
    { id: 2, content: div2Content },
    { id: 3, content: div3Content },
    { id: 4, content: div4Content },
  ];

  const visibleContent = contentData.slice(
    currentImageIndex,
    currentImageIndex + imagesPerPage
  );

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : contentData.length - imagesPerPage
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < contentData.length - imagesPerPage ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.imagescontainer} ref={sliderRef}>
        {visibleContent.map((content, index) => (
          <div
            key={content.id}
            className={`${styles.content} ${index === 1 ? styles.enlarged : ''
              }`}
          >
            {content.content}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.navbtn} onClick={handlePrevClick}>
        {'<'}
        </button>
        <button className={styles.navbtn} onClick={handleNextClick}>
        {'>'}
        </button>
      </div>
    </div>
  );
}

export default ImageScroller;