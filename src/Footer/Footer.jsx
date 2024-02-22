import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <div className={styles.main}>
        <hr className={styles.lastline}></hr>
            <div className={styles.first}>
                <div className={styles.brandname}>FASHION <span className={styles.red}>HUB</span></div>
                <p className={styles.para}>Fashion Hub , New Delhi</p>
                <p className={styles.para1}>© 2021 All rights reserved.</p>
            </div>
            <div className={styles.second}>
                <ul>
                    <li className={styles.head}>Customer Services</li>
                    <li>Returns policy</li>
                    <li>Shipping information</li>
                    <li>FAQs</li>
                    <li>Track Order</li>
                    <li className={styles.sell}>Sell on FASHIONHUB</li>
                </ul>
            </div>
            <div className={styles.third}>
                <p className={styles.down}>DOWNLOAD THE APP</p>

                <div className={styles.icons}>
                    <div className={styles.firsticon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="40" viewBox="0 0 131 40" fill="none">
                            <g clip-path="url(#clip0_9_390)">
                                <path d="M126.167 38.9633H5.34591C2.83546 38.9633 0.792053 36.9142 0.792053 34.4056V4.99579C0.792053 2.48631 2.83546 0.444824 5.34591 0.444824H126.167C128.676 0.444824 130.792 2.48631 130.792 4.99579V34.4056C130.792 36.9142 128.676 38.9633 126.167 38.9633Z" fill="#A6A6A6" />
                                <path d="M129.86 34.4065C129.86 36.4441 128.209 38.0946 126.168 38.0946H5.3459C3.30539 38.0946 1.64909 36.4441 1.64909 34.4065V4.99472C1.64909 2.95805 3.30539 1.30176 5.3459 1.30176H126.167C128.209 1.30176 129.859 2.95805 129.859 4.99472L129.86 34.4065Z" fill="black" />
                                <path d="M29.8042 19.4962C29.7763 16.3926 32.3455 14.8827 32.4629 14.8124C31.0079 12.691 28.7526 12.4011 27.9601 12.378C26.066 12.1787 24.2286 13.5114 23.2638 13.5114C22.2796 13.5114 20.7938 12.3972 19.1923 12.43C17.1316 12.4618 15.2038 13.6549 14.1464 15.5076C11.9643 19.2853 13.5918 24.8368 15.6824 27.8904C16.7281 29.3858 17.9501 31.0556 19.5496 30.9969C21.1144 30.9324 21.6989 29.9992 23.5873 29.9992C25.4584 29.9992 26.0072 30.9969 27.6385 30.9593C29.3179 30.9324 30.3752 29.4571 31.3844 27.9481C32.5929 26.2341 33.0783 24.546 33.0975 24.4593C33.0581 24.4458 29.836 23.2161 29.8042 19.4962Z" fill="white" />
                                <path d="M26.7227 10.3692C27.5643 9.31668 28.1402 7.88475 27.9803 6.43164C26.7622 6.48557 25.2388 7.27423 24.3615 8.30364C23.5854 9.21075 22.8921 10.6976 23.0712 12.0958C24.4395 12.1979 25.8445 11.4053 26.7227 10.3692Z" fill="white" />
                                <path d="M52.4502 30.7819H50.2633L49.0654 27.0177H44.9015L43.7604 30.7819H41.6313L45.7567 17.9668H48.3047L52.4502 30.7819ZM48.7043 25.4384L47.6209 22.0921C47.5064 21.7503 47.2916 20.9452 46.9748 19.678H46.9363C46.8101 20.223 46.6069 21.0281 46.3277 22.0921L45.2636 25.4384H48.7043Z" fill="white" />
                                <path d="M63.0592 26.0479C63.0592 27.6195 62.6345 28.8617 61.7852 29.7736C61.0244 30.5854 60.0798 30.9908 58.9521 30.9908C57.7349 30.9908 56.8606 30.5536 56.3281 29.6793H56.2895V34.547H54.2365V24.5833C54.2365 23.5953 54.2105 22.5813 54.1604 21.5413H55.966L56.0806 23.0059H56.1191C56.8038 21.9024 57.8428 21.3516 59.2372 21.3516C60.3272 21.3516 61.2372 21.782 61.9652 22.6439C62.6952 23.5067 63.0592 24.641 63.0592 26.0479ZM60.9676 26.123C60.9676 25.2236 60.7654 24.4822 60.359 23.8986C59.9151 23.29 59.319 22.9857 58.5718 22.9857C58.0652 22.9857 57.6049 23.1552 57.1938 23.4893C56.7816 23.8264 56.512 24.2665 56.3858 24.8115C56.3223 25.0657 56.2905 25.2737 56.2905 25.4374V26.9782C56.2905 27.6503 56.4966 28.2175 56.9087 28.6807C57.3209 29.1439 57.8563 29.375 58.5149 29.375C59.2882 29.375 59.8901 29.0765 60.3205 28.4813C60.7519 27.8853 60.9676 27.0995 60.9676 26.123Z" fill="white" />
                                <path d="M73.6874 26.0479C73.6874 27.6195 73.2627 28.8617 72.4124 29.7736C71.6526 30.5854 70.708 30.9908 69.5804 30.9908C68.3632 30.9908 67.4888 30.5536 66.9572 29.6793H66.9187V34.547H64.8657V24.5833C64.8657 23.5953 64.8397 22.5813 64.7896 21.5413H66.5952L66.7098 23.0059H66.7483C67.432 21.9024 68.471 21.3516 69.8664 21.3516C70.9555 21.3516 71.8655 21.782 72.5954 22.6439C73.3224 23.5067 73.6874 24.641 73.6874 26.0479ZM71.5958 26.123C71.5958 25.2236 71.3926 24.4822 70.9863 23.8986C70.5424 23.29 69.9482 22.9857 69.2 22.9857C68.6925 22.9857 68.2332 23.1552 67.821 23.4893C67.4089 23.8264 67.1402 24.2665 67.0141 24.8115C66.9515 25.0657 66.9187 25.2737 66.9187 25.4374V26.9782C66.9187 27.6503 67.1248 28.2175 67.535 28.6807C67.9472 29.1429 68.4826 29.375 69.1432 29.375C69.9164 29.375 70.5183 29.0765 70.9487 28.4813C71.3801 27.8853 71.5958 27.0995 71.5958 26.123Z" fill="white" />
                                <path d="M85.5704 27.1882C85.5704 28.2782 85.1919 29.1651 84.4321 29.8498C83.5972 30.598 82.435 30.9716 80.9414 30.9716C79.5624 30.9716 78.4569 30.7059 77.6201 30.1733L78.0958 28.4622C78.9972 29.0072 79.9861 29.2807 81.0637 29.2807C81.837 29.2807 82.4388 29.1054 82.8712 28.7568C83.3016 28.4082 83.5164 27.9402 83.5164 27.3567C83.5164 26.8367 83.3392 26.3985 82.9838 26.0432C82.6304 25.6879 82.0401 25.3576 81.2158 25.0523C78.9721 24.2155 77.8512 22.9896 77.8512 21.3776C77.8512 20.3242 78.2441 19.4604 79.0309 18.7882C79.8147 18.1151 80.8605 17.7791 82.1682 17.7791C83.3344 17.7791 84.3031 17.9822 85.0764 18.3876L84.5631 20.0613C83.8409 19.6684 83.0243 19.4719 82.1104 19.4719C81.3882 19.4719 80.8239 19.6501 80.4195 20.0045C80.0776 20.3213 79.9062 20.7074 79.9062 21.1648C79.9062 21.6713 80.1017 22.0902 80.4946 22.4196C80.8364 22.7239 81.4575 23.0532 82.3589 23.4085C83.4615 23.8525 84.2713 24.3715 84.7923 24.9666C85.3113 25.5598 85.5704 26.3022 85.5704 27.1882Z" fill="white" />
                                <path d="M92.3583 23.0822H90.0953V27.5686C90.0953 28.7098 90.494 29.2798 91.2932 29.2798C91.6601 29.2798 91.9644 29.248 92.2052 29.1845L92.262 30.7435C91.8575 30.8947 91.325 30.9708 90.6654 30.9708C89.8546 30.9708 89.221 30.7233 88.7635 30.2293C88.3081 29.7343 88.0789 28.9043 88.0789 27.7381V23.0803H86.7307V21.5395H88.0789V19.8476L90.0953 19.239V21.5395H92.3583V23.0822Z" fill="white" />
                                <path d="M102.569 26.0855C102.569 27.5059 102.162 28.672 101.351 29.5839C100.501 30.5228 99.3725 30.9908 97.9656 30.9908C96.6098 30.9908 95.5303 30.5411 94.7252 29.6417C93.9202 28.7423 93.5177 27.607 93.5177 26.2386C93.5177 24.8067 93.9318 23.6338 94.7628 22.7219C95.5919 21.809 96.7109 21.3525 98.1178 21.3525C99.4736 21.3525 100.565 21.8022 101.388 22.7026C102.176 23.576 102.569 24.7037 102.569 26.0855ZM100.438 26.1519C100.438 25.2997 100.256 24.5688 99.8877 23.9593C99.4572 23.2217 98.8419 22.8538 98.0446 22.8538C97.2193 22.8538 96.5924 23.2226 96.162 23.9593C95.7932 24.5698 95.6112 25.3122 95.6112 26.1905C95.6112 27.0427 95.7932 27.7736 96.162 28.3822C96.6059 29.1198 97.2261 29.4876 98.0263 29.4876C98.8101 29.4876 99.4255 29.1121 99.8694 28.3629C100.248 27.7418 100.438 27.0032 100.438 26.1519Z" fill="white" />
                                <path d="M109.242 23.3468C109.039 23.3093 108.822 23.29 108.595 23.29C107.873 23.29 107.314 23.5625 106.921 24.1085C106.579 24.59 106.408 25.1986 106.408 25.9333V30.7819H104.356L104.375 24.4513C104.375 23.3863 104.349 22.4166 104.298 21.5422H106.086L106.161 23.3102H106.218C106.435 22.7026 106.777 22.2134 107.245 21.8465C107.702 21.5162 108.196 21.3516 108.729 21.3516C108.918 21.3516 109.09 21.365 109.242 21.3891V23.3468Z" fill="white" />
                                <path d="M118.424 25.7244C118.424 26.0922 118.4 26.4023 118.349 26.6556H112.19C112.214 27.5684 112.511 28.2666 113.083 28.7481C113.602 29.1785 114.273 29.3942 115.098 29.3942C116.01 29.3942 116.842 29.2488 117.59 28.957L117.911 30.3822C117.037 30.7636 116.005 30.9533 114.814 30.9533C113.381 30.9533 112.256 30.5315 111.437 29.6889C110.621 28.8463 110.212 27.7148 110.212 26.2954C110.212 24.902 110.592 23.7416 111.354 22.8162C112.151 21.8282 113.229 21.3342 114.584 21.3342C115.916 21.3342 116.924 21.8282 117.609 22.8162C118.151 23.601 118.424 24.5717 118.424 25.7244ZM116.466 25.1919C116.48 24.5833 116.346 24.0575 116.067 23.6136C115.712 23.0425 115.166 22.7575 114.431 22.7575C113.76 22.7575 113.214 23.0358 112.797 23.5943C112.455 24.0382 112.252 24.5707 112.19 25.1909L116.466 25.1919Z" fill="white" />
                                <path d="M48.0254 10.0832C48.0254 11.2166 47.6855 12.0698 47.0066 12.6428C46.3778 13.1714 45.4841 13.4362 44.3266 13.4362C43.7527 13.4362 43.2616 13.4112 42.8504 13.3611V7.16832C43.3868 7.08165 43.9646 7.03735 44.5886 7.03735C45.6912 7.03735 46.5222 7.27713 47.0826 7.75669C47.7105 8.29883 48.0254 9.07402 48.0254 10.0832ZM46.9613 10.1111C46.9613 9.37639 46.7668 8.81306 46.3778 8.42017C45.9887 8.02824 45.4206 7.8318 44.6723 7.8318C44.3546 7.8318 44.084 7.85298 43.8596 7.89728V12.6052C43.9838 12.6245 44.2111 12.6331 44.5414 12.6331C45.3137 12.6331 45.9098 12.4184 46.3296 11.9889C46.7495 11.5594 46.9613 10.9335 46.9613 10.1111Z" fill="white" />
                                <path d="M53.6674 11.0731C53.6674 11.7713 53.468 12.3433 53.0694 12.792C52.6515 13.2533 52.0978 13.4834 51.4063 13.4834C50.74 13.4834 50.2094 13.2629 49.8136 12.8199C49.4188 12.3779 49.2214 11.8204 49.2214 11.1482C49.2214 10.4453 49.4246 9.86846 49.8329 9.42068C50.2412 8.97291 50.79 8.74854 51.4815 8.74854C52.1478 8.74854 52.6832 8.96905 53.0886 9.41105C53.4738 9.84054 53.6674 10.3952 53.6674 11.0731ZM52.6206 11.1059C52.6206 10.687 52.5301 10.3278 52.35 10.0283C52.1382 9.66624 51.8368 9.4852 51.4449 9.4852C51.0395 9.4852 50.7313 9.66624 50.5195 10.0283C50.3384 10.3278 50.2489 10.6928 50.2489 11.1242C50.2489 11.5431 50.3394 11.9022 50.5195 12.2017C50.738 12.5638 51.0423 12.7448 51.4352 12.7448C51.8204 12.7448 52.1228 12.5609 52.3404 12.1921C52.5272 11.8868 52.6206 11.5248 52.6206 11.1059Z" fill="white" />
                                <path d="M61.2324 8.84106L59.812 13.3805H58.8876L58.2992 11.4093C58.15 10.9172 58.0286 10.428 57.9343 9.94269H57.916C57.8283 10.4415 57.707 10.9297 57.551 11.4093L56.926 13.3805H55.991L54.6554 8.84106H55.6925L56.2057 10.9991C56.33 11.5094 56.432 11.9957 56.5139 12.456H56.5322C56.6073 12.0766 56.7315 11.5932 56.9068 11.0087L57.551 8.84203H58.3734L58.9906 10.9625C59.1399 11.4796 59.2612 11.9774 59.3546 12.457H59.3826C59.4509 11.99 59.554 11.4921 59.6907 10.9625L60.2415 8.84203H61.2324V8.84106Z" fill="white" />
                                <path d="M66.4642 13.3803H65.455V10.7803C65.455 9.97916 65.1507 9.57857 64.5402 9.57857C64.2407 9.57857 63.999 9.68835 63.8112 9.90886C63.6254 10.1294 63.531 10.3894 63.531 10.6869V13.3794H62.5218V10.138C62.5218 9.73938 62.5093 9.30701 62.4852 8.83901H63.3721L63.4193 9.54872H63.4472C63.5647 9.3282 63.74 9.1462 63.9701 9.00079C64.2436 8.83131 64.5498 8.74561 64.8849 8.74561C65.3086 8.74561 65.6611 8.88235 65.9413 9.15679C66.2899 9.49286 66.4642 9.99457 66.4642 10.6609V13.3803Z" fill="white" />
                                <path d="M69.2472 13.3804H68.2389V6.75806H69.2472V13.3804Z" fill="white" />
                                <path d="M75.1886 11.0731C75.1886 11.7713 74.9893 12.3433 74.5906 12.792C74.1727 13.2533 73.6181 13.4834 72.9276 13.4834C72.2603 13.4834 71.7297 13.2629 71.3349 12.8199C70.9401 12.3779 70.7426 11.8204 70.7426 11.1482C70.7426 10.4453 70.9458 9.86846 71.3541 9.42068C71.7624 8.97291 72.3113 8.74854 73.0018 8.74854C73.6691 8.74854 74.2035 8.96905 74.6099 9.41105C74.9951 9.84054 75.1886 10.3952 75.1886 11.0731ZM74.1409 11.1059C74.1409 10.687 74.0504 10.3278 73.8704 10.0283C73.6595 9.66624 73.3571 9.4852 72.9661 9.4852C72.5598 9.4852 72.2516 9.66624 72.0407 10.0283C71.8597 10.3278 71.7701 10.6928 71.7701 11.1242C71.7701 11.5431 71.8606 11.9022 72.0407 12.2017C72.2593 12.5638 72.5636 12.7448 72.9565 12.7448C73.3417 12.7448 73.6431 12.5609 73.8607 12.1921C74.0485 11.8868 74.1409 11.5248 74.1409 11.1059Z" fill="white" />
                                <path d="M80.0728 13.3804H79.1666L79.0915 12.8575H79.0636C78.7535 13.2745 78.3115 13.4834 77.7376 13.4834C77.3091 13.4834 76.9624 13.3457 76.7015 13.0722C76.4646 12.8238 76.3461 12.5147 76.3461 12.1478C76.3461 11.5931 76.5772 11.1704 77.0424 10.8776C77.5065 10.5849 78.1594 10.4414 79.0001 10.4482V10.3634C79.0001 9.76542 78.6861 9.46691 78.0573 9.46691C77.6095 9.46691 77.2147 9.57957 76.8738 9.80298L76.6687 9.14046C77.0905 8.8795 77.6115 8.74854 78.2258 8.74854C79.4122 8.74854 80.0073 9.37446 80.0073 10.6263V12.298C80.0073 12.7516 80.0295 13.1127 80.0728 13.3804ZM79.0251 11.8204V11.1203C77.9119 11.1011 77.3553 11.4063 77.3553 12.0351C77.3553 12.272 77.4189 12.4492 77.5489 12.5676C77.6789 12.6861 77.8445 12.7448 78.0419 12.7448C78.2634 12.7448 78.4704 12.6745 78.6592 12.5349C78.8489 12.3943 78.9654 12.2162 79.0087 11.9976C79.0193 11.9485 79.0251 11.8888 79.0251 11.8204Z" fill="white" />
                                <path d="M85.8072 13.3804H84.9117L84.8645 12.6514H84.8366C84.5506 13.2061 84.0633 13.4834 83.3786 13.4834C82.8317 13.4834 82.3762 13.2686 82.0151 12.8392C81.654 12.4097 81.4739 11.8521 81.4739 11.1675C81.4739 10.4327 81.6694 9.83761 82.0623 9.38309C82.4426 8.95939 82.9087 8.74754 83.4634 8.74754C84.0729 8.74754 84.4995 8.95265 84.7422 9.36383H84.7615V6.75806H85.7716V12.1574C85.7716 12.5994 85.7832 13.0067 85.8072 13.3804ZM84.7615 11.466V10.7091C84.7615 10.5781 84.7518 10.4722 84.7335 10.3913C84.6767 10.1486 84.5544 9.9445 84.3686 9.77983C84.1808 9.61517 83.9545 9.53235 83.6935 9.53235C83.317 9.53235 83.0223 9.68161 82.8057 9.98109C82.5909 10.2806 82.4821 10.6629 82.4821 11.1299C82.4821 11.5786 82.5852 11.9426 82.7922 12.2229C83.0108 12.5214 83.3055 12.6706 83.6743 12.6706C84.0055 12.6706 84.2704 12.5464 84.4716 12.297C84.6661 12.0669 84.7615 11.7895 84.7615 11.466Z" fill="white" />
                                <path d="M94.4383 11.0731C94.4383 11.7713 94.2389 12.3433 93.8403 12.792C93.4223 13.2533 92.8696 13.4834 92.1772 13.4834C91.5118 13.4834 90.9812 13.2629 90.5845 12.8199C90.1897 12.3779 89.9923 11.8204 89.9923 11.1482C89.9923 10.4453 90.1955 9.86846 90.6037 9.42068C91.012 8.97291 91.5609 8.74854 92.2533 8.74854C92.9187 8.74854 93.4551 8.96905 93.8595 9.41105C94.2447 9.84054 94.4383 10.3952 94.4383 11.0731ZM93.3925 11.1059C93.3925 10.687 93.302 10.3278 93.1219 10.0283C92.9091 9.66624 92.6086 9.4852 92.2158 9.4852C91.8113 9.4852 91.5032 9.66624 91.2903 10.0283C91.1093 10.3278 91.0197 10.6928 91.0197 11.1242C91.0197 11.5431 91.1103 11.9022 91.2903 12.2017C91.5089 12.5638 91.8132 12.7448 92.2061 12.7448C92.5913 12.7448 92.8946 12.5609 93.1123 12.1921C93.2981 11.8868 93.3925 11.5248 93.3925 11.1059Z" fill="white" />
                                <path d="M99.8646 13.3803H98.8563V10.7803C98.8563 9.97916 98.5521 9.57857 97.9406 9.57857C97.6411 9.57857 97.3994 9.68835 97.2126 9.90886C97.0258 10.1294 96.9323 10.3894 96.9323 10.6869V13.3794H95.9222V10.138C95.9222 9.73938 95.9106 9.30701 95.8866 8.83901H96.7725L96.8197 9.54872H96.8476C96.966 9.3282 97.1413 9.1462 97.3705 9.00079C97.6449 8.83131 97.9502 8.74561 98.2863 8.74561C98.709 8.74561 99.0615 8.88235 99.3417 9.15679C99.6912 9.49286 99.8646 9.99457 99.8646 10.6609V13.3803Z" fill="white" />
                                <path d="M106.656 9.59689H105.545V11.8021C105.545 12.3625 105.742 12.6427 106.133 12.6427C106.314 12.6427 106.465 12.6273 106.583 12.5956L106.609 13.3611C106.41 13.4362 106.148 13.4738 105.825 13.4738C105.427 13.4738 105.117 13.3524 104.892 13.1098C104.667 12.8671 104.555 12.4588 104.555 11.8859V9.59689H103.892V8.84097H104.555V8.00897L105.544 7.71045V8.84001H106.655L106.656 9.59689Z" fill="white" />
                                <path d="M111.999 13.3804H110.989V10.7996C110.989 9.98591 110.684 9.57857 110.075 9.57857C109.607 9.57857 109.287 9.8145 109.112 10.2864C109.082 10.3855 109.065 10.5069 109.065 10.6494V13.3794H108.057V6.75806H109.065V9.49383H109.084C109.402 8.99598 109.857 8.74754 110.448 8.74754C110.865 8.74754 111.211 8.88428 111.486 9.15872C111.827 9.50057 111.999 10.009 111.999 10.6812V13.3804Z" fill="white" />
                                <path d="M117.51 10.8958C117.51 11.0769 117.496 11.229 117.472 11.3532H114.446C114.459 11.802 114.604 12.1438 114.884 12.3807C115.14 12.5926 115.47 12.6985 115.875 12.6985C116.323 12.6985 116.731 12.6272 117.099 12.4837L117.257 13.1848C116.826 13.3716 116.32 13.465 115.733 13.465C115.03 13.465 114.477 13.258 114.076 12.8439C113.673 12.4298 113.474 11.8742 113.474 11.177C113.474 10.4923 113.66 9.92226 114.035 9.46775C114.426 8.98241 114.954 8.73975 115.622 8.73975C116.274 8.73975 116.77 8.98241 117.105 9.46775C117.376 9.85293 117.51 10.3296 117.51 10.8958ZM116.547 10.6349C116.555 10.3354 116.488 10.0773 116.351 9.85967C116.176 9.57945 115.909 9.43886 115.548 9.43886C115.219 9.43886 114.95 9.5756 114.745 9.85004C114.578 10.0686 114.478 10.3296 114.446 10.6349H116.547Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9_390">
                                    <rect width="130" height="39" fill="white" transform="translate(0.792053 0.204102)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={styles.secondicon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="39" viewBox="0 0 131 39" fill="none">
                                <g clip-path="url(#clip0_9_422)">
                                    <path d="M125.852 0.204102H5.60205C2.94556 0.204102 0.792053 2.35761 0.792053 5.0141V33.8741C0.792053 36.5306 2.94556 38.6841 5.60205 38.6841H125.852C128.509 38.6841 130.662 36.5306 130.662 33.8741V5.0141C130.662 2.35761 128.509 0.204102 125.852 0.204102Z" fill="black" />
                                    <path d="M125.852 0.973701C126.924 0.973703 127.951 1.39939 128.709 2.15711C129.467 2.91483 129.892 3.94252 129.892 5.0141V33.8741C129.892 34.9457 129.467 35.9734 128.709 36.7311C127.951 37.4888 126.924 37.9145 125.852 37.9145H5.60205C4.53047 37.9145 3.50278 37.4888 2.74506 36.7311C1.98734 35.9734 1.56165 34.9457 1.56165 33.8741V5.0141C1.56165 4.48351 1.66616 3.95811 1.86921 3.46791C2.07226 2.9777 2.36987 2.53229 2.74506 2.15711C3.12024 1.78192 3.56565 1.48431 4.05586 1.28126C4.54606 1.07821 5.07146 0.973701 5.60205 0.973701H125.852ZM125.852 0.204102H5.60205C4.97039 0.204102 4.34492 0.328516 3.76135 0.570241C3.17777 0.811966 2.64752 1.16627 2.20087 1.61292C1.75422 2.05957 1.39992 2.58982 1.15819 3.17339C0.916467 3.75697 0.792053 4.38244 0.792053 5.0141L0.792053 33.8741C0.792053 35.1498 1.29882 36.3732 2.20087 37.2753C3.10292 38.1773 4.32636 38.6841 5.60205 38.6841H125.852C127.128 38.6841 128.351 38.1773 129.253 37.2753C130.155 36.3732 130.662 35.1498 130.662 33.8741V5.0141C130.662 3.73841 130.155 2.51497 129.253 1.61292C128.351 0.710869 127.128 0.204102 125.852 0.204102Z" fill="#A6A6A6" />
                                    <path d="M46.4101 10.0549C46.4265 10.4078 46.3709 10.7603 46.2469 11.091C46.1229 11.4217 45.9329 11.7238 45.6886 11.9789C45.4158 12.2623 45.0863 12.485 44.7216 12.6325C44.357 12.7801 43.9653 12.8491 43.5722 12.8351C42.9757 12.8304 42.3939 12.6498 41.8997 12.3159C41.4054 11.9821 41.0206 11.5097 40.7936 10.9581C40.5666 10.4066 40.5075 9.80024 40.6235 9.21517C40.7396 8.6301 41.0258 8.09229 41.4462 7.66915C41.7225 7.38707 42.0537 7.1647 42.4194 7.01577C42.7851 6.86685 43.1774 6.79455 43.5722 6.80335C43.9789 6.80199 44.3816 6.88384 44.7555 7.04385C45.1036 7.18426 45.4135 7.40513 45.6597 7.68839L45.1499 8.19825C44.9579 7.96986 44.7154 7.78926 44.4416 7.67072C44.1678 7.55218 43.8701 7.49895 43.5722 7.51523C43.2717 7.51375 42.974 7.57297 42.697 7.68934C42.4199 7.8057 42.1692 7.97682 41.9599 8.19242C41.7506 8.40802 41.587 8.66367 41.4789 8.94403C41.3708 9.2244 41.3204 9.52372 41.3307 9.82403C41.3244 10.2724 41.4511 10.7127 41.6947 11.0892C41.9383 11.4657 42.288 11.7617 42.6996 11.9397C43.1112 12.1177 43.5663 12.1699 44.0076 12.0895C44.4488 12.0092 44.8563 11.8 45.1787 11.4883C45.4748 11.1675 45.6455 10.7509 45.6597 10.3146H43.5722V9.62201H46.3716C46.3973 9.76488 46.4102 9.90975 46.4101 10.0549ZM50.8161 7.64991H48.2187V9.47771H50.5852V10.1703H48.2187V11.9981H50.8161V12.71H47.4491V6.93803H50.8161V7.64991ZM53.9714 12.71H53.2307V7.64991H51.6145V6.93803H55.6261V7.64991H53.9714V12.71ZM58.4543 12.71V6.93803H59.1951V12.71H58.4543ZM62.4851 12.71H61.7444V7.64991H60.1282V6.93803H64.0917V7.64991H62.4851V12.71ZM71.6049 11.9597C71.0425 12.5189 70.2816 12.8328 69.4885 12.8328C68.6954 12.8328 67.9345 12.5189 67.3721 11.9597C66.8254 11.381 66.5209 10.6152 66.5209 9.81922C66.5209 9.02322 66.8254 8.25739 67.3721 7.67877C67.6493 7.39954 67.979 7.17793 68.3422 7.0267C68.7055 6.87547 69.095 6.79761 69.4885 6.79761C69.8819 6.79761 70.2715 6.87547 70.6347 7.0267C70.998 7.17793 71.3277 7.39954 71.6049 7.67877C72.1537 8.25628 72.4597 9.02253 72.4597 9.81922C72.4597 10.6159 72.1537 11.3822 71.6049 11.9597ZM67.9204 11.4787C68.3369 11.8934 68.9007 12.1263 69.4885 12.1263C70.0762 12.1263 70.6401 11.8934 71.0565 11.4787C71.4675 11.0256 71.6952 10.4358 71.6952 9.82403C71.6952 9.2123 71.4675 8.62247 71.0565 8.16939C70.6401 7.75465 70.0762 7.5218 69.4885 7.5218C68.9007 7.5218 68.3369 7.75465 67.9204 8.16939C67.5094 8.62247 67.2817 9.2123 67.2817 9.82403C67.2817 10.4358 67.5094 11.0256 67.9204 11.4787ZM73.5 12.71V6.93803H74.4043L77.2133 11.4306V6.93803H77.9541V12.71H77.1845L74.2504 8.00585V12.71H73.5Z" fill="white" stroke="white" stroke-width="0.1924" stroke-miterlimit="10" />
                                    <path d="M66.3427 21.1275C65.5349 21.1313 64.7464 21.3743 64.0766 21.8259C63.4067 22.2775 62.8857 22.9173 62.5792 23.6647C62.2727 24.4121 62.1945 25.2336 62.3544 26.0254C62.5143 26.8172 62.9052 27.5439 63.4778 28.1138C64.0503 28.6836 64.7788 29.0711 65.5714 29.2273C66.364 29.3835 67.185 29.3014 67.931 28.9914C68.6769 28.6814 69.3143 28.1574 69.7627 27.4855C70.2112 26.8135 70.4505 26.0238 70.4505 25.216C70.4583 24.6753 70.3573 24.1386 70.1534 23.6377C69.9495 23.1369 69.6469 22.6822 69.2636 22.3007C68.8803 21.9192 68.4242 21.6188 67.9224 21.4172C67.4206 21.2157 66.8834 21.1172 66.3427 21.1275ZM66.3427 27.698C65.8459 27.7327 65.3502 27.6172 64.9199 27.3665C64.4896 27.1157 64.1447 26.7413 63.9301 26.292C63.7154 25.8426 63.6409 25.3391 63.7162 24.8468C63.7915 24.3545 64.0131 23.8962 64.3523 23.5316C64.6915 23.167 65.1326 22.9128 65.6181 22.8022C66.1037 22.6915 66.6113 22.7295 67.075 22.9112C67.5387 23.0928 67.937 23.4098 68.2182 23.8208C68.4993 24.2319 68.6503 24.718 68.6515 25.216C68.667 25.5316 68.6192 25.847 68.5108 26.1438C68.4025 26.4406 68.2358 26.7126 68.0206 26.944C67.8054 27.1753 67.5461 27.3612 67.2579 27.4907C66.9698 27.6202 66.6586 27.6907 66.3427 27.698ZM57.3865 21.1275C56.5783 21.1294 55.7888 21.3708 55.1177 21.8212C54.4466 22.2716 53.9241 22.9108 53.6161 23.6581C53.3081 24.4053 53.2285 25.2271 53.3874 26.0195C53.5462 26.812 53.9364 27.5396 54.5085 28.1104C55.0807 28.6812 55.8092 29.0697 56.602 29.2267C57.3949 29.3836 58.2164 29.3021 58.9629 28.9924C59.7095 28.6827 60.3474 28.1586 60.7963 27.4865C61.2451 26.8143 61.4846 26.0243 61.4846 25.216C61.4925 24.6753 61.3914 24.1386 61.1875 23.6377C60.9836 23.1369 60.681 22.6822 60.2978 22.3007C59.9145 21.9192 59.4584 21.6188 58.9566 21.4172C58.4548 21.2157 57.9176 21.1172 57.3769 21.1275H57.3865ZM57.3865 27.698C56.8895 27.7347 56.3929 27.6209 55.9614 27.3714C55.53 27.122 55.1836 26.7484 54.9674 26.2993C54.7512 25.8503 54.6753 25.3465 54.7494 24.8537C54.8235 24.3608 55.0443 23.9017 55.383 23.5361C55.7217 23.1705 56.1626 22.9153 56.6483 22.8038C57.1341 22.6922 57.6422 22.7295 58.1064 22.9108C58.5707 23.0921 58.9696 23.4089 59.2513 23.82C59.533 24.2312 59.6843 24.7176 59.6857 25.216C59.7012 25.5316 59.6533 25.847 59.545 26.1438C59.4366 26.4406 59.2699 26.7126 59.0548 26.944C58.8396 27.1753 58.5803 27.3612 58.2921 27.4907C58.0039 27.6202 57.6927 27.6907 57.3769 27.698H57.3865ZM46.7179 22.3878V24.1194H50.8738C50.8086 24.9349 50.4696 25.7045 49.9118 26.3031C49.496 26.7266 48.9962 27.0584 48.4445 27.2771C47.8927 27.4958 47.3013 27.5966 46.7083 27.5729C45.4837 27.5729 44.3092 27.0864 43.4432 26.2205C42.5772 25.3545 42.0907 24.18 42.0907 22.9553C42.0907 21.7307 42.5772 20.5562 43.4432 19.6902C44.3092 18.8242 45.4837 18.3377 46.7083 18.3377C47.8798 18.3186 49.0111 18.7649 49.8541 19.5787L51.0758 18.357C50.5068 17.7808 49.8278 17.3246 49.0793 17.0156C48.3307 16.7066 47.5277 16.551 46.7179 16.558C45.8627 16.5247 45.0096 16.6645 44.2096 16.9688C43.4097 17.2731 42.6794 17.7358 42.0626 18.3291C41.4457 18.9224 40.955 19.6341 40.6198 20.4216C40.2846 21.2091 40.1118 22.0562 40.1118 22.912C40.1118 23.7679 40.2846 24.615 40.6198 25.4025C40.955 26.19 41.4457 26.9017 42.0626 27.495C42.6794 28.0883 43.4097 28.551 44.2096 28.8553C45.0096 29.1596 45.8627 29.2993 46.7179 29.2661C47.5414 29.3033 48.3632 29.1637 49.1282 28.8567C49.8931 28.5497 50.5835 28.0825 51.1528 27.4864C52.1606 26.379 52.6987 24.9234 52.6535 23.4267C52.6566 23.0621 52.6244 22.6981 52.5573 22.3397L46.7179 22.3878ZM90.3062 23.7346C90.0553 22.9964 89.5861 22.352 88.9608 21.8864C88.3355 21.4209 87.5835 21.1562 86.8045 21.1275C86.2783 21.1265 85.7574 21.2334 85.2742 21.4417C84.7909 21.6499 84.3555 21.955 83.9948 22.3382C83.6342 22.7214 83.356 23.1745 83.1774 23.6695C82.9988 24.1645 82.9236 24.6908 82.9565 25.216C82.9448 25.7537 83.0416 26.2882 83.2411 26.7876C83.4406 27.2871 83.7387 27.7412 84.1177 28.1228C84.4966 28.5044 84.9486 28.8057 85.4466 29.0088C85.9446 29.2118 86.4784 29.3124 87.0161 29.3045C87.689 29.3082 88.3523 29.1448 88.9467 28.8292C89.541 28.5136 90.0478 28.0555 90.4216 27.496L89.0267 26.534C88.8185 26.881 88.5238 27.1681 88.1713 27.3671C87.8189 27.5661 87.4208 27.6702 87.0161 27.6691C86.5994 27.685 86.1876 27.5752 85.8341 27.3538C85.4807 27.1325 85.2021 26.81 85.0344 26.4282L90.5082 24.1675L90.3062 23.7346ZM84.7266 25.1006C84.7071 24.803 84.7471 24.5046 84.8444 24.2227C84.9417 23.9408 85.0943 23.6812 85.2931 23.459C85.492 23.2368 85.7332 23.0566 86.0027 22.9288C86.2721 22.801 86.5643 22.7283 86.8622 22.7148C87.1725 22.6944 87.482 22.7655 87.7522 22.9195C88.0224 23.0734 88.2415 23.3033 88.3822 23.5806L84.7266 25.1006ZM80.2821 29.064H82.0811V17.039H80.2821V29.064ZM77.3384 22.0414H77.2711C76.9999 21.7383 76.6678 21.4959 76.2964 21.3301C75.9251 21.1643 75.5229 21.0789 75.1162 21.0794C74.0649 21.1304 73.0735 21.5839 72.3475 22.346C71.6215 23.108 71.2166 24.1202 71.2166 25.1727C71.2166 26.2253 71.6215 27.2374 72.3475 27.9995C73.0735 28.7616 74.0649 29.2151 75.1162 29.2661C75.5238 29.2729 75.928 29.1903 76.3004 29.0241C76.6726 28.8579 77.004 28.6121 77.2711 28.3041H77.3288V28.8909C77.3288 30.4589 76.4918 31.2959 75.145 31.2959C74.6965 31.2854 74.2612 31.1416 73.8946 30.883C73.528 30.6243 73.2466 30.2623 73.0864 29.8433L71.5183 30.4974C71.8135 31.2154 72.3164 31.8289 72.9626 32.2591C73.6088 32.6893 74.3688 32.9167 75.145 32.912C77.2518 32.912 78.993 31.6711 78.993 28.6504V21.368H77.3384V22.0414ZM75.2797 27.698C74.6592 27.6433 74.0816 27.3582 73.6609 26.8987C73.2402 26.4393 73.0069 25.839 73.0069 25.216C73.0069 24.5931 73.2402 23.9927 73.6609 23.5333C74.0816 23.0739 74.6592 22.7888 75.2797 22.7341C75.5874 22.7499 75.8888 22.8271 76.1662 22.9611C76.4435 23.0952 76.6913 23.2834 76.8948 23.5147C77.0983 23.746 77.2534 24.0157 77.3511 24.3079C77.4488 24.6001 77.487 24.9089 77.4635 25.216C77.4897 25.5245 77.4531 25.8352 77.3559 26.1291C77.2586 26.4231 77.1028 26.6943 76.8978 26.9263C76.6927 27.1583 76.4428 27.3463 76.163 27.4789C75.8833 27.6116 75.5795 27.6861 75.2701 27.698H75.2797ZM98.7333 17.039H94.4331V29.064H96.2321V24.5042H98.7429C99.2556 24.541 99.7704 24.4718 100.255 24.3009C100.74 24.13 101.184 23.8611 101.561 23.5109C101.937 23.1607 102.237 22.7367 102.442 22.2654C102.647 21.7941 102.753 21.2856 102.753 20.7716C102.753 20.2576 102.647 19.7491 102.442 19.2778C102.237 18.8065 101.937 18.3825 101.561 18.0323C101.184 17.6821 100.74 17.4132 100.255 17.2423C99.7704 17.0714 99.2556 17.0022 98.7429 17.039H98.7333ZM98.7333 22.811H96.2225V18.7129H98.7718C99.319 18.7129 99.8439 18.9303 100.231 19.3173C100.618 19.7043 100.835 20.2291 100.835 20.7764C100.835 21.3237 100.618 21.8485 100.231 22.2355C99.8439 22.6225 99.319 22.8399 98.7718 22.8399L98.7333 22.811ZM109.825 21.0794C109.17 21.0403 108.518 21.1933 107.949 21.5198C107.38 21.8462 106.919 22.3318 106.622 22.9169L108.219 23.5806C108.376 23.2904 108.614 23.0523 108.905 22.8952C109.195 22.738 109.525 22.6687 109.854 22.6956C110.082 22.6689 110.314 22.688 110.535 22.7517C110.756 22.8154 110.962 22.9225 111.141 23.0666C111.32 23.2108 111.468 23.3892 111.578 23.5914C111.687 23.7936 111.755 24.0156 111.778 24.2444V24.3695C111.2 24.0636 110.556 23.9049 109.902 23.9077C108.18 23.9077 106.439 24.8697 106.439 26.6109C106.456 26.9822 106.547 27.3463 106.707 27.6817C106.867 28.0171 107.093 28.317 107.371 28.5636C107.649 28.8102 107.974 28.9986 108.326 29.1176C108.678 29.2366 109.05 29.2838 109.421 29.2564C109.874 29.289 110.328 29.1989 110.734 28.9958C111.14 28.7927 111.484 28.484 111.73 28.102H111.788V29.064H113.519V24.4368C113.519 22.33 111.922 21.1083 109.873 21.1083L109.825 21.0794ZM109.604 27.6691C109.017 27.6691 108.199 27.3709 108.199 26.6494C108.199 25.6874 109.219 25.37 110.123 25.37C110.695 25.3559 111.26 25.4954 111.759 25.774C111.699 26.2948 111.452 26.7764 111.065 27.1299C110.678 27.4835 110.176 27.6852 109.652 27.698L109.604 27.6691ZM119.83 21.368L117.771 26.5821H117.714L115.578 21.368H113.654L116.857 28.66L115.03 32.71H116.905L121.831 21.368H119.83ZM103.659 29.064H105.458V17.039H103.659V29.064Z" fill="white" />
                                    <path d="M10.8353 7.45748C10.5218 7.83372 10.3635 8.31538 10.3928 8.80428V30.0837C10.3635 30.5726 10.5218 31.0543 10.8353 31.4305L10.9027 31.4979L22.8219 19.5883V19.3093L10.9027 7.39014L10.8353 7.45748Z" fill="url(#paint0_linear_9_422)" />
                                    <path d="M26.7661 23.5614L22.8219 19.5883V19.3093L26.7661 15.3267L26.8526 15.3748L31.5761 18.0587C32.9229 18.8187 32.9229 20.0693 31.5761 20.8389L26.8719 23.5133L26.7661 23.5614Z" fill="url(#paint1_linear_9_422)" />
                                    <path d="M26.8815 23.5037L22.8218 19.4441L10.8353 31.4306C11.1098 31.6719 11.46 31.8098 11.8254 31.8203C12.1908 31.8308 12.5483 31.7134 12.8363 31.4883L26.8911 23.5037" fill="url(#paint2_linear_9_422)" />
                                    <path d="M26.8815 15.3844L12.8267 7.39977C12.5387 7.17468 12.1811 7.05725 11.8158 7.06779C11.4504 7.07833 11.1002 7.21617 10.8257 7.45749L22.8219 19.444L26.8815 15.3844Z" fill="url(#paint3_linear_9_422)" />
                                    <path opacity="0.2" d="M26.7661 23.4172L12.8267 31.3537C12.5489 31.5614 12.2115 31.6736 11.8647 31.6736C11.5179 31.6736 11.1804 31.5614 10.9027 31.3537L10.8353 31.4211L10.9027 31.4884C11.1798 31.6975 11.5175 31.8107 11.8647 31.8107C12.2119 31.8107 12.5496 31.6975 12.8267 31.4884L26.8815 23.5038L26.7661 23.4172Z" fill="black" />
                                    <path opacity="0.12" d="M10.8353 31.2959C10.5218 30.9197 10.3635 30.438 10.3928 29.9491V30.0934C10.3635 30.5823 10.5218 31.064 10.8353 31.4402L10.9027 31.3729L10.8353 31.2959ZM31.5761 20.6947L26.7661 23.4172L26.8526 23.5037L31.5761 20.8294C31.8441 20.7035 32.0741 20.5091 32.243 20.2659C32.4119 20.0227 32.5137 19.7392 32.5381 19.4441C32.484 19.7122 32.3691 19.9644 32.2023 20.1812C32.0356 20.3979 31.8213 20.5736 31.5761 20.6947Z" fill="black" />
                                    <path opacity="0.25" d="M12.8267 7.53454L31.5761 18.1935C31.8213 18.3146 32.0356 18.4902 32.2023 18.707C32.3691 18.9238 32.484 19.176 32.5381 19.4441C32.5137 19.149 32.4119 18.8655 32.243 18.6223C32.0741 18.3791 31.8441 18.1847 31.5761 18.0588L12.8267 7.39986C11.4799 6.63988 10.3832 7.2748 10.3832 8.814V8.9583C10.4121 7.40948 11.4895 6.77456 12.8267 7.53454Z" fill="white" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_9_422" x1="21.7637" y1="8.58303" x2="5.6213" y2="24.7254" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00A0FF" />
                                        <stop offset="0.01" stop-color="#00A1FF" />
                                        <stop offset="0.26" stop-color="#00BEFF" />
                                        <stop offset="0.51" stop-color="#00D2FF" />
                                        <stop offset="0.76" stop-color="#00DFFF" />
                                        <stop offset="1" stop-color="#00E3FF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_9_422" x1="33.3365" y1="19.444" x2="10.0657" y2="19.444" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFE000" />
                                        <stop offset="0.41" stop-color="#FFBD00" />
                                        <stop offset="0.78" stop-color="#FFA500" />
                                        <stop offset="1" stop-color="#FF9C00" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_9_422" x1="24.6785" y1="21.6567" x2="2.78338" y2="43.5422" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF3A44" />
                                        <stop offset="1" stop-color="#C31162" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_9_422" x1="7.81465" y1="0.377161" x2="17.5886" y2="10.1511" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#32A071" />
                                        <stop offset="0.07" stop-color="#2DA771" />
                                        <stop offset="0.48" stop-color="#15CF74" />
                                        <stop offset="0.8" stop-color="#06E775" />
                                        <stop offset="1" stop-color="#00F076" />
                                    </linearGradient>
                                    <clipPath id="clip0_9_422">
                                        <rect width="129.87" height="38.48" fill="white" transform="translate(0.792053 0.204102)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.forth}>
                <ul>
                    <li>Explore</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className={styles.fifth}>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Legal</li>
                    <li>Terms of services</li>
                    <li>Help Center</li>
                    <li className={styles.social}>Social Media</li>
                </ul>
                <div className={styles.downicons}>
                    <a 
                        className={styles.instagram}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a 
                        className={styles.facebook}>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a 
                        className={styles.youtube}>
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>

                   
                </div>
            </div>
        </div>
    );
};
export default Footer;