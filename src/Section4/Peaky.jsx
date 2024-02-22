import React from 'react';
import styles from './Peaky.module.css';
import { useNavigate } from 'react-router';

function Peaky() {
  const navigate = useNavigate();
  const opencollection = () =>{
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/shopnow')
  }
  return (
    <div id='Peaky' className={styles.main}>
      <div className={styles.peaky}>

        <img src='images/Peaky.png' height="480px"></img>

        <div className={styles.firstarrow}>

          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="31" viewBox="0 0 105 31" fill="none">
            <path d="M24.5 11H85L104.5 30.5" stroke="black" />
            <g filter="url(#filter0_b_9_87)">
              <circle cx="10.5" cy="10.5" r="10.5" fill="lightgrey" fill-opacity="90" />
              <circle cx="10.5" cy="10.5" r="10" stroke="black" />
            </g>
            <defs>
              <filter id="filter0_b_9_87" x="-20" y="-20" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_87" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_87" result="shape" />
              </filter>
            </defs>
          </svg>
          <div className={styles.box1}><p className={styles.words}>Flat Cap</p></div>
        </div>

        <div className={styles.secondarrow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="31" viewBox="0 0 105 31" fill="none">
            <path d="M24.5 11H85L104.5 30.5" stroke="black" />
            <g filter="url(#filter0_b_9_94)">
              <circle cx="10.5" cy="10.5" r="10.5" fill="lightgrey" fill-opacity="90" />
              <circle cx="10.5" cy="10.5" r="10" stroke="black" />
            </g>
            <defs>
              <filter id="filter0_b_9_94" x="-20" y="-20" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_94" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_94" result="shape" />
              </filter>
            </defs>
          </svg>
          <div className={styles.box2}><p className={styles.words}>Hugo Boss</p></div>
        </div>

        <div className={styles.thirdarrow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="31" viewBox="0 0 105 31" fill="none">
            <path d="M24.5 11H85L104.5 30.5" stroke="black" />
            <g filter="url(#filter0_b_9_101)">
              <circle cx="10.5" cy="10.5" r="10.5" fill="lightgrey" fill-opacity="90" />
              <circle cx="10.5" cy="10.5" r="10" stroke="black" />
            </g>
            <defs>
              <filter id="filter0_b_9_101" x="-20" y="-20" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_101" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_101" result="shape" />
              </filter>
            </defs>
          </svg>
          <div className={styles.box3}><p className={styles.words}>Santoni</p></div>
        </div>

        <div className={styles.fortharrow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="166" height="31" viewBox="0 0 166 31" fill="none">
            <path d="M141 11H20.5L1 30.5" stroke="black" />
            <g filter="url(#filter0_b_9_115)">
              <circle cx="10.5" cy="10.5" r="10.5" transform="matrix(-1 0 0 1 165.5 0)" fill="lightgrey" fill-opacity="90" />
              <circle cx="10.5" cy="10.5" r="10" transform="matrix(-1 0 0 1 165.5 0)" stroke="black" />
            </g>
            <defs>
              <filter id="filter0_b_9_115" x="124.5" y="-20" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_115" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_115" result="shape" />
              </filter>
            </defs>
          </svg>
          <div className={styles.box4}><p className={styles.words}>Suspender</p></div>
        </div>

        <div className={styles.fiftharrow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="166" height="31" viewBox="0 0 166 31" fill="none">
            <path d="M141 11H20.5L1 30.5" stroke="black" />
            <g filter="url(#filter0_b_9_108)">
              <circle cx="10.5" cy="10.5" r="10.5" transform="matrix(-1 0 0 1 165.5 0)" fill="lightgrey" fill-opacity="90" />
              <circle cx="10.5" cy="10.5" r="10" transform="matrix(-1 0 0 1 165.5 0)" stroke="black" />
            </g>
            <defs>
              <filter id="filter0_b_9_108" x="124.5" y="-20" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_108" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_108" result="shape" />
              </filter>
            </defs>
          </svg>

          <div className={styles.box5}>
            <p className={styles.words}>Hugo Boss</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.written}>
        <p className={styles.women}>Men's Collection</p>
        <p className={styles.name}>Peaky Blinders</p>
        <p className={styles.desc}>DESCRIPTION</p>
        <p className={styles.lines}>Embrace the vintage charm and rugged elegance of the Peaky Blinders-inspired dress. This dress exudes timeless sophistication, featuring a tailored silhouette, herringbone or pinstripe patterns, and a high neckline.</p>
        <p className={styles.size}>Size:</p>
        <p className={styles.rate}>$100</p>
        <p className={styles.rate2}>.00</p>
        <button className={styles.btn} onClick={opencollection}>Buy Now</button>
      </div>
    </div>
  );
}

export default Peaky;
