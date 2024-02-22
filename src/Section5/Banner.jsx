import styles from "./Banner.module.css";

function Banner() {
    return (
        <div>
        <div className={styles.main}>
            <div className={styles.quality}>
                <svg xmlns="http://www.w3.org/2000/svg"className={styles.icon}  viewBox="0 0 51 51" fill="none">
                    <path d="M17.2072 15.5786L16.0772 22.1676C16.0178 22.4769 16.0471 22.7968 16.1617 23.0901C16.2764 23.3834 16.4716 23.6379 16.7247 23.824C16.9736 24.0112 17.2697 24.1247 17.5794 24.1518C17.8892 24.1789 18.2004 24.1185 18.4778 23.9774L24.586 20.9099L30.3767 23.9406C30.6531 24.0902 30.9659 24.1588 31.2793 24.1384C31.5926 24.118 31.894 24.0094 32.1488 23.8251C32.4037 23.6408 32.6018 23.3882 32.7205 23.0962C32.8392 22.8041 32.8736 22.4845 32.82 22.1737L31.6899 15.6093L36.4422 10.9406C36.6656 10.7226 36.8237 10.4462 36.8988 10.1427C36.9738 9.83907 36.9627 9.52045 36.8667 9.22289C36.7707 8.92533 36.5936 8.66072 36.3556 8.45902C36.1175 8.25733 35.828 8.12662 35.5198 8.08169L28.8924 7.11237L25.9359 1.12465C25.7958 0.845784 25.5809 0.61183 25.3153 0.449214C25.0498 0.286598 24.7443 0.201802 24.4333 0.204404C24.1234 0.202947 23.8191 0.288284 23.5548 0.450837C23.2904 0.613389 23.0764 0.846722 22.9368 1.12465L19.9743 7.11237L13.3468 8.06942C13.0356 8.11162 12.7425 8.24123 12.5014 8.44335C12.2603 8.64546 12.0809 8.91184 11.9839 9.21185C11.8869 9.51185 11.8762 9.83327 11.9531 10.1391C12.0299 10.4449 12.1912 10.7228 12.4184 10.9406L17.2072 15.5786ZM20.7073 8.86697C20.851 8.84284 20.987 8.7846 21.1038 8.69711C21.2207 8.60962 21.3151 8.49538 21.3792 8.3639L24.4333 2.22894L27.4874 8.3639C27.5533 8.49767 27.6505 8.61337 27.7707 8.70101C27.891 8.78864 28.0306 8.8456 28.1777 8.86697L34.9456 9.84856L30.059 14.597C29.9515 14.7008 29.8708 14.8294 29.824 14.9715C29.7771 15.1137 29.7656 15.2653 29.7903 15.413L30.9447 22.1307L25.0258 19.0326C24.8964 18.9658 24.7529 18.931 24.6074 18.931C24.4619 18.931 24.3184 18.9658 24.189 19.0326L17.9586 22.1737L19.1191 15.4252C19.1395 15.2779 19.124 15.1279 19.074 14.9879C19.024 14.848 18.941 14.7223 18.832 14.6216L13.9454 9.8731L20.7073 8.86697Z" fill="black" />
                    <path d="M50.0878 27.505C49.781 27.1491 49.4072 26.8574 48.9879 26.6469C48.5687 26.4363 48.1121 26.311 47.6445 26.278C47.177 26.2457 46.7077 26.3084 46.2649 26.4623C45.822 26.6162 45.4145 26.8582 45.0668 27.1737L36.6068 34.8056C36.5848 34.636 36.5522 34.468 36.5091 34.3026C36.367 33.771 36.1122 33.2765 35.7622 32.853C35.4121 32.4294 34.9752 32.0868 34.4812 31.8486C32.9113 31.186 30.7307 31.4927 28.6233 31.7995C27.3908 32.0419 26.1319 32.1203 24.879 32.0326C24.3214 31.8921 23.7822 31.6862 23.2725 31.4191C21.6721 30.7013 19.4793 29.7197 15.3989 30.6216C13.2923 31.1681 11.3573 32.2401 9.77323 33.7381V31.4927C9.77323 31.2487 9.6767 31.0146 9.50487 30.842C9.33304 30.6695 9.09999 30.5725 8.85699 30.5725H0.91624C0.673238 30.5725 0.440189 30.6695 0.26836 30.842C0.0965321 31.0146 0 31.2487 0 31.4927V49.2841C0 49.5282 0.0965321 49.7623 0.26836 49.9348C0.440189 50.1074 0.673238 50.2044 0.91624 50.2044H8.85699C9.09999 50.2044 9.33304 50.1074 9.50487 49.9348C9.6767 49.7623 9.77323 49.5282 9.77323 49.2841V48.008C10.9949 48.2964 16.5412 49.5909 20.6398 49.5909C24.9156 49.5909 30.1443 48.6093 33.3634 47.2044C39.2945 44.6216 49.0616 33.4743 49.8557 32.5725C50.5437 31.9244 50.9528 31.0324 50.9962 30.0861C51.0395 29.1398 50.7136 28.2138 50.0878 27.505ZM7.94075 48.3639H1.83248V32.413H7.94075V48.3639ZM48.5852 31.2412L48.4996 31.3271C48.3958 31.4437 38.305 43.051 32.6182 45.5234C29.6251 46.8301 24.6896 47.7504 20.6398 47.7504C16.364 47.7504 10.0542 46.1798 9.99313 46.1676C9.9201 46.1586 9.84626 46.1586 9.77323 46.1676V36.3516C10.439 35.5848 12.7907 33.094 15.796 32.4314C19.2899 31.6645 21.0124 32.4314 22.5151 33.1124C23.1633 33.4331 23.8486 33.6721 24.5552 33.824C25.9978 33.9607 27.4525 33.8863 28.8738 33.6032C30.6513 33.3578 32.667 33.0756 33.7604 33.5357C33.9955 33.6714 34.201 33.8532 34.3647 34.0703C34.5284 34.2874 34.6469 34.5354 34.7133 34.7995C34.802 35.1616 34.8034 35.5398 34.7174 35.9026C34.6313 36.2654 34.4603 36.6023 34.2185 36.8854C32.8258 38.7627 24.3537 41.5725 20.8781 41.2964C20.6351 41.2777 20.3946 41.3567 20.2096 41.5161C20.0246 41.6754 19.9102 41.902 19.8916 42.1461C19.8729 42.3902 19.9516 42.6317 20.1103 42.8175C20.2689 43.0033 20.4946 43.1182 20.7376 43.1369C20.9269 43.1369 21.1346 43.1369 21.3484 43.1369C25.1416 43.1369 32.386 40.8915 35.037 38.6461L35.1042 38.6093L46.2457 28.548C46.5805 28.2484 47.0197 28.0941 47.4674 28.1185C47.7016 28.1328 47.9306 28.1945 48.1406 28.2999C48.3505 28.4053 48.5371 28.5523 48.689 28.732C49.0027 29.0804 49.1676 29.5386 49.1482 30.0079C49.1287 30.4773 48.9266 30.9202 48.5852 31.2412Z" fill="black" />
                </svg>
                <p className={styles.upper}>High Quality</p>
                <p className={styles.lower}>crafted from top materials</p>
            </div>

            <div className={styles.warranty}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}width="51" height="51" viewBox="0 0 38 51" fill="none">
                    <path d="M37.7767 18.4552L34.5201 14.8986L35.5391 10.2085C35.6336 9.79252 35.3815 9.37655 34.9718 9.24136L30.36 7.76466L28.8788 3.19935C28.7422 2.79378 28.322 2.5546 27.9018 2.63779L23.164 3.64653L19.5712 0.422732C19.256 0.13155 18.7623 0.13155 18.4471 0.422732L14.8543 3.64653L10.1165 2.63779C9.69629 2.5442 9.27608 2.79378 9.13951 3.19935L7.64777 7.76466L3.02549 9.24136C2.61578 9.37655 2.37418 9.79252 2.45822 10.2085L3.47721 14.8986L0.220609 18.4552C-0.0735364 18.7672 -0.0735364 19.2559 0.220609 19.5679L3.47721 23.1245L2.45822 27.8146C2.36367 28.2305 2.61578 28.6465 3.02549 28.7817L7.63727 30.2584L7.82636 30.8512L2.34266 45.899C2.2166 46.2318 2.32165 46.6062 2.60529 46.8246C2.87841 47.0429 3.26711 47.0741 3.57176 46.887L9.17103 43.4968L11.2826 49.6428C11.3981 49.9756 11.7133 50.2043 12.0705 50.2043H12.081C12.4381 50.2043 12.7533 49.986 12.8689 49.6532L17.5647 36.7996L18.4471 37.59C18.6047 37.7355 18.8043 37.8083 19.0144 37.8083C19.2245 37.8083 19.4136 37.7355 19.5817 37.59L20.4641 36.7996L25.1599 49.6532C25.2755 49.986 25.6012 50.2043 25.9478 50.2043H25.9583C26.3155 50.2043 26.6307 49.9756 26.7462 49.6428L28.8578 43.4968L34.4571 46.887C34.7617 47.0741 35.1504 47.0429 35.4235 46.8246C35.6967 46.6062 35.8017 46.2318 35.6862 45.899L30.1919 30.8616L30.381 30.2688L34.9928 28.7921C35.4025 28.6569 35.6441 28.2409 35.5601 27.825L34.5411 23.1349L37.7977 19.5783C38.0708 19.2559 38.0708 18.7776 37.7767 18.4552ZM12.0915 46.8662L10.4106 41.9785C10.3266 41.7393 10.1375 41.5521 9.89589 41.4585C9.65427 41.3649 9.39164 41.3961 9.17103 41.5313L4.71682 44.2247L8.65627 33.4406L9.108 34.8237C9.24457 35.2293 9.66477 35.4685 10.085 35.3853L14.8228 34.3766L16.1885 35.6037L12.0915 46.8662ZM33.27 44.2351L28.8158 41.5417C28.5951 41.4065 28.3325 41.3857 28.0909 41.4689C27.8493 41.5521 27.6602 41.7393 27.5761 41.9889L25.8953 46.8766L21.7773 35.6141L23.1429 34.387L27.8808 35.3957C28.301 35.4893 28.7212 35.2397 28.8578 34.8341L29.3095 33.451L33.27 44.2351ZM32.9968 22.3341C32.8182 22.5317 32.7447 22.8021 32.7972 23.0621L33.7427 27.4402L29.4461 28.8129C29.1939 28.8961 28.9838 29.0937 28.8998 29.3537L28.4901 30.6016L27.5131 33.607L23.0904 32.6711C22.8278 32.6191 22.5547 32.6919 22.3551 32.8687L19.0039 35.8637L15.6527 32.8583C15.4952 32.7231 15.2956 32.6399 15.0855 32.6399C15.0224 32.6399 14.9699 32.6503 14.9069 32.6607L10.4842 33.5966L9.5072 30.5912L9.09749 29.3433C9.01345 29.0937 8.81385 28.8857 8.55122 28.8025L4.2651 27.4402L5.21057 23.0621C5.26309 22.8021 5.18956 22.5317 5.01097 22.3341L1.98548 19.0167L5.02148 15.6993C5.20006 15.5018 5.2736 15.2314 5.22107 14.9714L4.27561 10.5933L8.57223 9.22056C8.82436 9.13737 9.03446 8.93979 9.1185 8.6798L10.4947 4.42648L14.9174 5.36242C15.18 5.41441 15.4531 5.34162 15.6527 5.16483L19.0039 2.16982L22.3551 5.17523C22.5547 5.35202 22.8278 5.42481 23.0904 5.37282L27.5131 4.43688L28.8998 8.6902C28.9838 8.93979 29.1834 9.14777 29.4461 9.23096L33.7427 10.6037L32.7972 14.9818C32.7447 15.2418 32.8182 15.5122 32.9968 15.7097L36.0223 19.0167L32.9968 22.3341Z" fill="black" />
                    <path d="M19.004 6.95349C12.0495 6.95349 6.39772 12.5483 6.39772 19.4327C6.39772 26.3171 12.0495 31.9119 19.004 31.9119C25.9584 31.9119 31.6102 26.3171 31.6102 19.4327C31.6102 12.5483 25.9584 6.95349 19.004 6.95349ZM19.004 30.248C12.9845 30.248 8.07855 25.3915 8.07855 19.4327C8.07855 13.4739 12.9845 8.61739 19.004 8.61739C25.0234 8.61739 29.9294 13.4739 29.9294 19.4327C29.9294 25.3915 25.0234 30.248 19.004 30.248Z" fill="black" />
                    <path d="M23.6998 13.2555L16.4828 20.327L14.3082 18.1952C13.6569 17.5608 12.5958 17.5608 11.934 18.1952L10.5999 19.4951C10.2847 19.8071 10.1061 20.223 10.1061 20.6702C10.1061 21.1174 10.2847 21.5334 10.5999 21.8453L15.2957 26.4418C15.6213 26.7642 16.0521 26.9202 16.4828 26.9202C16.9135 26.9202 17.3442 26.7642 17.6699 26.4418L27.4082 16.916C27.7233 16.6041 27.9019 16.1881 27.9019 15.7409C27.9019 15.2938 27.7233 14.8778 27.4082 14.5658L26.074 13.2659C25.4227 12.6211 24.3512 12.6211 23.6998 13.2555ZM18.4157 23.374L16.4828 25.2563L11.7974 20.6702L13.1316 19.3807L15.8945 22.0845C16.2201 22.4069 16.7454 22.4069 17.0711 22.0845L24.8869 14.441L24.2986 13.8482L26.2211 15.7305L18.4157 23.374Z" fill="black" />
                </svg>

                <p className={styles.upper}>Warrany Protection</p>
                <p className={styles.lower}>Over 2 years</p>
            </div>

            <div className={styles.shipping}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 46 51" fill="none">
                    <path d="M45.557 12.3756L23.4089 0.305501C23.2856 0.239081 23.1481 0.204346 23.0085 0.204346C22.8689 0.204346 22.7314 0.239081 22.6081 0.305501L0.46 12.3756C0.322383 12.4477 0.206829 12.5565 0.125776 12.6901C0.0447135 12.8239 0.00122667 12.9774 0 13.1342V37.2744C0.000408889 37.4303 0.0426183 37.5833 0.122122 37.7169C0.201633 37.8505 0.315458 37.9598 0.451482 38.0331L22.5996 50.1031C22.7229 50.1696 22.8604 50.2043 23 50.2043C23.1396 50.2043 23.2771 50.1696 23.4004 50.1031L45.5485 38.0331C45.6846 37.9598 45.7984 37.8505 45.8778 37.7169C45.9574 37.5833 45.9996 37.4303 46 37.2744V13.1342C46.0004 12.9791 45.9594 12.8268 45.8815 12.6933C45.8036 12.5598 45.6915 12.45 45.557 12.3756ZM23 2.04704L43.3593 13.1342L37.3963 16.3845L17.7441 4.90937L23 2.04704ZM2.64074 13.1342L9.05519 9.68565L28.6989 21.1177L23 24.2215L2.64074 13.1342ZM15.9807 5.86635L35.633 17.3415L30.4622 20.1607L10.8185 8.67694L15.9807 5.86635ZM31.5952 21.4971L36.2293 18.9796V25.4112L34.4404 23.618C34.341 23.518 34.2188 23.4445 34.0845 23.4037C33.9504 23.363 33.8083 23.3565 33.671 23.3846C33.5337 23.4128 33.4053 23.4748 33.2974 23.565C33.1893 23.6554 33.105 23.7712 33.0518 23.9025L31.5952 27.4545V21.4971ZM1.7037 14.574L22.1481 25.7216V47.9047L1.7037 36.7571V14.574ZM23.8519 47.9047V25.7216L29.8915 22.4282V31.7911C29.9014 31.9841 29.975 32.1683 30.1007 32.3138C30.2263 32.4595 30.3967 32.558 30.5844 32.5939C30.7721 32.6296 30.9663 32.6006 31.1356 32.5113C31.305 32.422 31.4399 32.2777 31.5185 32.1015L34.1252 25.7302L36.4593 28.0753C36.5784 28.1969 36.7307 28.2798 36.8965 28.3135C37.0625 28.3472 37.2344 28.3301 37.3908 28.2644C37.547 28.1987 37.6804 28.0875 37.7739 27.9447C37.8675 27.802 37.9169 27.6344 37.9159 27.4631V18.0485L44.2878 14.5999V36.7571L23.8519 47.9047Z" fill="black" />
                </svg>

                <p className={styles.upper}>Free Shipping</p>
                <p className={styles.lower}>Order over 150$</p>
            </div>

            <div className={styles.support}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 50 51" fill="none">
                    <path d="M40.8573 27.1085C40.3862 26.6376 39.7475 26.3731 39.0815 26.3731C38.4155 26.3731 37.7767 26.6376 37.3057 27.1085L34.9372 29.477C34.9321 29.477 34.9305 29.4879 34.9263 29.4921L33.7541 30.6584C33.3667 31.0483 32.9059 31.3578 32.3985 31.569C31.891 31.7801 31.3467 31.8889 30.797 31.8889C30.2474 31.8889 29.7031 31.7801 29.1956 31.569C28.688 31.3578 28.2274 31.0483 27.8399 30.6584L19.5513 22.3697C19.1613 21.9822 18.8518 21.5213 18.6406 21.0137C18.4294 20.506 18.3207 19.9616 18.3207 19.4118C18.3207 18.862 18.4294 18.3176 18.6406 17.8099C18.8518 17.3023 19.1613 16.8414 19.5513 16.4538L20.7184 15.2817L20.7293 15.275L23.0978 12.9073C23.3311 12.674 23.5162 12.3972 23.6423 12.0924C23.7686 11.7877 23.8336 11.461 23.8336 11.1311C23.8336 10.8012 23.7686 10.4745 23.6423 10.1698C23.5162 9.86504 23.3311 9.58816 23.0978 9.35491L15.9913 2.24426C15.5129 1.78738 14.8767 1.53244 14.2151 1.53244C13.5536 1.53244 12.9174 1.78738 12.4389 2.24426L10.0712 4.61196L10.0654 4.62117C7.24548 7.44651 5.59192 11.2294 5.43339 15.218C5.27486 19.2066 6.62295 23.1089 9.20972 26.149V29.0668C9.08916 29.1145 8.97278 29.1631 8.85892 29.2125L6.63689 26.9905C6.47693 26.8392 6.26513 26.7549 6.04497 26.7549C5.82481 26.7549 5.613 26.8392 5.45304 26.9905L1.90316 30.5403C1.7462 30.6973 1.65803 30.9102 1.65803 31.1323C1.65803 31.3543 1.7462 31.5672 1.90316 31.7242L4.12519 33.9462C4.07495 34.0601 4.02723 34.1765 3.97951 34.297H0.837358C0.615307 34.297 0.402356 34.3853 0.24534 34.5422C0.0883333 34.6992 0.00012207 34.9122 0.00012207 35.1343V40.1577C0.00012207 40.3797 0.0883333 40.5927 0.24534 40.7497C0.402356 40.9067 0.615307 40.9949 0.837358 40.9949H3.97951C4.02723 41.1155 4.07495 41.2318 4.12519 41.3449L1.90316 43.5677C1.7462 43.7247 1.65803 43.9376 1.65803 44.1597C1.65803 44.3817 1.7462 44.5946 1.90316 44.7516L5.45304 48.3015C5.61005 48.4585 5.82297 48.5466 6.04497 48.5466C6.26697 48.5466 6.47989 48.4585 6.63689 48.3015L8.85892 46.0794C8.97278 46.1288 9.08916 46.1774 9.20972 46.2251V49.3673C9.20972 49.5893 9.29797 49.8023 9.45495 49.9593C9.61193 50.1163 9.82492 50.2045 10.047 50.2045H15.0704C15.2924 50.2045 15.5054 50.1163 15.6624 49.9593C15.8194 49.8023 15.9076 49.5893 15.9076 49.3673V46.2251C16.0282 46.1774 16.1446 46.1288 16.2584 46.0794L18.4804 48.3015C18.6404 48.4528 18.8522 48.537 19.0724 48.537C19.2926 48.537 19.5043 48.4528 19.6643 48.3015L23.2142 44.7516C23.3712 44.5946 23.4593 44.3817 23.4593 44.1597C23.4593 43.9376 23.3712 43.7247 23.2142 43.5677L20.9921 41.3449C21.0424 41.2318 21.0901 41.1155 21.1378 40.9949H24.0548C27.0928 43.586 30.9957 44.937 34.9855 44.7785C38.9752 44.6201 42.7588 42.9639 45.5818 40.1401L45.5927 40.1334L47.9604 37.7648C48.1936 37.5316 48.3787 37.2547 48.5049 36.95C48.6312 36.6452 48.6962 36.3185 48.6962 35.9887C48.6962 35.6588 48.6312 35.3321 48.5049 35.0273C48.3787 34.7226 48.1936 34.4457 47.9604 34.2125L40.8573 27.1085ZM13.6245 3.42727C13.784 3.27506 13.9959 3.19013 14.2164 3.19013C14.4368 3.19013 14.6488 3.27506 14.8083 3.42727L21.9123 10.5321C22.069 10.689 22.157 10.9018 22.157 11.1236C22.157 11.3454 22.069 11.5581 21.9123 11.7151L20.1373 13.4892L11.8487 5.20054L13.6245 3.42727ZM23.4427 39.3204H20.5459C20.3687 39.3204 20.1959 39.3767 20.0528 39.4811C19.9095 39.5855 19.8031 39.7327 19.7489 39.9015C19.6189 40.3203 19.4493 40.7257 19.2423 41.1121C19.1554 41.2709 19.1223 41.4535 19.148 41.6327C19.1737 41.8119 19.2567 41.9779 19.3847 42.1059L21.4376 44.1597L19.0724 46.5257L17.0186 44.472C16.8905 44.3438 16.7243 44.2606 16.545 44.235C16.3657 44.2093 16.1829 44.2425 16.024 44.3296C15.6378 44.5372 15.2323 44.7068 14.8133 44.8361C14.6447 44.8906 14.4977 44.997 14.3935 45.1402C14.2892 45.2834 14.2331 45.456 14.2331 45.6332V48.53H10.8842V45.6332C10.8843 45.456 10.8281 45.2834 10.7239 45.1402C10.6196 44.997 10.4726 44.8906 10.304 44.8361C9.88504 44.7068 9.47956 44.5372 9.09335 44.3296C8.93444 44.2425 8.75167 44.2093 8.57233 44.235C8.393 44.2606 8.22681 44.3438 8.09871 44.472L6.04497 46.5257L3.68396 44.1597L5.73687 42.1059C5.86482 41.9779 5.94785 41.8119 5.97351 41.6327C5.99917 41.4535 5.96608 41.2709 5.8792 41.1121C5.67364 40.7255 5.50543 40.3201 5.37685 39.9015C5.32218 39.7313 5.21451 39.5832 5.0696 39.4787C4.92468 39.3741 4.75012 39.3187 4.57143 39.3204H1.67459V35.9715H4.57143C4.74869 35.9715 4.92137 35.9152 5.06461 35.8108C5.20784 35.7064 5.31424 35.5592 5.36848 35.3904C5.49706 34.9718 5.66526 34.5664 5.87082 34.1798C5.9577 34.0211 5.9908 33.8384 5.96514 33.6592C5.93948 33.48 5.85645 33.314 5.72849 33.186L3.68396 31.1323L6.04497 28.7662L8.09871 30.82C8.22681 30.9482 8.393 31.0313 8.57233 31.0569C8.75167 31.0826 8.93444 31.0494 9.09335 30.9623C9.47956 30.7548 9.88504 30.5851 10.304 30.4558C10.4726 30.4014 10.6196 30.2949 10.7239 30.1517C10.8281 30.0084 10.8843 29.8359 10.8842 29.6587V26.7619H14.2331V29.6587C14.2331 29.8359 14.2892 30.0084 14.3935 30.1517C14.4977 30.2949 14.6447 30.4014 14.8133 30.4558C15.2323 30.5851 15.6378 30.7548 16.024 30.9623C16.1829 31.0494 16.3657 31.0826 16.545 31.0569C16.7243 31.0313 16.8905 30.9482 17.0186 30.82L19.0724 28.7662L21.4376 31.1323L19.3847 33.186C19.2567 33.314 19.1737 33.48 19.148 33.6592C19.1223 33.8384 19.1554 34.0211 19.2423 34.1798C19.4493 34.5663 19.6189 34.9717 19.7489 35.3904C19.8031 35.5592 19.9095 35.7064 20.0528 35.8108C20.1959 35.9152 20.3687 35.9715 20.5459 35.9715H23.4427V39.3204ZM25.1172 39.7031V35.1343C25.1172 34.9122 25.029 34.6992 24.872 34.5422C24.715 34.3853 24.502 34.297 24.28 34.297H21.1378C21.0901 34.1765 21.0424 34.0601 20.9921 33.9462L23.2142 31.7242C23.3712 31.5672 23.4593 31.3543 23.4593 31.1323C23.4593 30.9102 23.3712 30.6973 23.2142 30.5403L19.6643 26.9905C19.5073 26.8335 19.2944 26.7453 19.0724 26.7453C18.8503 26.7453 18.6374 26.8335 18.4804 26.9905L16.2584 29.2125C16.1446 29.1631 16.0282 29.1145 15.9076 29.0668V25.9247C15.9076 25.7026 15.8194 25.4896 15.6624 25.3326C15.5054 25.1757 15.2924 25.0874 15.0704 25.0874H10.5024C8.2721 22.4767 7.06162 19.1472 7.09453 15.7136C7.12751 12.2801 8.40162 8.97447 10.6816 6.407L18.951 14.6764L18.3649 15.2675C17.8189 15.8108 17.3857 16.4565 17.09 17.1677C16.7944 17.879 16.6422 18.6416 16.6422 19.4118C16.6422 20.182 16.7944 20.9446 17.09 21.6558C17.3857 22.3671 17.8189 23.0128 18.3649 23.5561L26.6535 31.8447C27.1962 32.3904 27.8414 32.8235 28.552 33.1192C29.2625 33.4148 30.0244 33.5672 30.7941 33.5676C31.5637 33.568 32.3257 33.4164 33.0366 33.1215C33.7474 32.8265 34.393 32.3941 34.9363 31.8489L35.5316 31.2578L43.8018 39.5272C41.2335 41.8075 37.9268 43.0816 34.4924 43.1139C31.0581 43.1462 27.728 41.9346 25.1172 39.7031ZM46.7765 36.581L45.0024 38.3551L36.7138 30.0665L38.4887 28.2932C38.6457 28.1362 38.8586 28.0481 39.0806 28.0481C39.3027 28.0481 39.5156 28.1362 39.6726 28.2932L46.7765 35.3971C46.9335 35.5541 47.0217 35.767 47.0217 35.9891C47.0217 36.2111 46.9335 36.424 46.7765 36.581Z" fill="black" />
                    <path d="M12.5583 33.4597C11.7303 33.4597 10.921 33.7052 10.2326 34.1652C9.54412 34.6252 9.00754 35.2789 8.69073 36.0439C8.37392 36.8088 8.29095 37.6505 8.45254 38.4626C8.61404 39.2747 9.01273 40.0206 9.59821 40.6059C10.1836 41.1914 10.9295 41.5901 11.7416 41.7516C12.5537 41.9132 13.3953 41.8302 14.1602 41.5134C14.9252 41.1966 15.5789 40.66 16.039 39.9716C16.499 39.2832 16.7444 38.4738 16.7444 37.6459C16.7431 36.5361 16.3016 35.4721 15.5169 34.6873C14.7321 33.9025 13.6681 33.4611 12.5583 33.4597ZM12.5583 40.1576C12.0615 40.1576 11.5758 40.0103 11.1628 39.7343C10.7497 39.4583 10.4278 39.066 10.2378 38.607C10.0476 38.1482 9.99791 37.6431 10.0948 37.1559C10.1917 36.6687 10.4309 36.2211 10.7822 35.8699C11.1335 35.5186 11.581 35.2794 12.0682 35.1824C12.5555 35.0855 13.0605 35.1353 13.5195 35.3254C13.9784 35.5155 14.3707 35.8374 14.6467 36.2505C14.9227 36.6635 15.07 37.1492 15.07 37.6459C15.07 38.312 14.8053 38.9509 14.3343 39.4219C13.8633 39.893 13.2244 40.1576 12.5583 40.1576Z" fill="black" />
                    <path d="M28.5803 0.212126C28.3602 0.181927 28.1372 0.240382 27.9602 0.374625C27.7833 0.508867 27.6669 0.707912 27.6367 0.927963C27.6065 1.14801 27.6649 1.37104 27.7992 1.548C27.9334 1.72495 28.1325 1.84133 28.3525 1.87153C33.4022 2.57755 38.0842 4.90985 41.6895 8.51517C45.2948 12.1206 47.6271 16.8025 48.3332 21.8522C48.3606 22.0525 48.4598 22.2361 48.6121 22.3691C48.7644 22.502 48.9599 22.5754 49.162 22.5755C49.2001 22.5755 49.2381 22.573 49.2759 22.568C49.3848 22.5531 49.4898 22.5169 49.5848 22.4613C49.6797 22.4058 49.7628 22.3322 49.8293 22.2445C49.8958 22.1569 49.9444 22.057 49.9722 21.9506C50.0001 21.8442 50.0067 21.7334 49.9917 21.6244C49.2351 16.2131 46.7357 11.1958 42.8722 7.33215C39.0087 3.46851 33.9915 0.969004 28.5803 0.212126Z" fill="black" />
                    <path d="M28.3215 6.95712C32.039 7.61543 35.4646 9.40017 38.1342 12.0698C40.8038 14.7395 42.5886 18.1649 43.2469 21.8825C43.2808 22.0767 43.3821 22.2526 43.5329 22.3794C43.6838 22.5062 43.8745 22.5758 44.0716 22.5758C44.1201 22.5757 44.1686 22.5715 44.2164 22.5632C44.4351 22.525 44.6297 22.4014 44.7573 22.2199C44.885 22.0382 44.9353 21.8132 44.8971 21.5945C44.1796 17.5376 42.2323 13.7993 39.3192 10.8862C36.4062 7.97293 32.668 6.02551 28.6112 5.30776C28.5029 5.28874 28.3919 5.29123 28.2845 5.3151C28.1772 5.33898 28.0757 5.38376 27.9856 5.44688C27.8956 5.51001 27.8189 5.59025 27.7599 5.68303C27.7008 5.77581 27.6606 5.8793 27.6416 5.9876C27.6226 6.09589 27.6251 6.20688 27.649 6.31421C27.6729 6.42154 27.7177 6.52313 27.7808 6.61315C27.8439 6.70318 27.9241 6.77987 28.0169 6.8389C28.1097 6.89792 28.2132 6.93811 28.3215 6.95712Z" fill="black" />
                    <path d="M28.2703 12.0701C30.6568 12.6606 32.8369 13.8914 34.5752 15.63C36.3136 17.3685 37.5443 19.5486 38.1346 21.9353C38.1575 22.045 38.2023 22.149 38.2663 22.2412C38.3302 22.3333 38.412 22.4117 38.5068 22.4715C38.6016 22.5315 38.7074 22.5717 38.8181 22.5899C38.9287 22.6081 39.0419 22.6039 39.1509 22.5775C39.2599 22.5511 39.3625 22.5032 39.4526 22.4364C39.5427 22.3696 39.6184 22.2855 39.6754 22.1889C39.7323 22.0923 39.7692 21.9852 39.784 21.8741C39.7988 21.7629 39.7911 21.6499 39.7613 21.5418C39.0976 18.8562 37.713 16.4031 35.7568 14.4469C33.8008 12.4909 31.3476 11.1063 28.6621 10.4425C28.5543 10.4141 28.4419 10.4075 28.3316 10.4231C28.2212 10.4387 28.1151 10.4762 28.0194 10.5334C27.9237 10.5905 27.8404 10.6662 27.7743 10.756C27.7082 10.8457 27.6609 10.9478 27.6347 11.0561C27.6086 11.1646 27.6044 11.277 27.6224 11.387C27.6403 11.497 27.6801 11.6023 27.7393 11.6968C27.7985 11.7912 27.8759 11.8729 27.9671 11.937C28.0583 12.0011 28.1613 12.0463 28.2703 12.0701Z" fill="black" />
                    <path d="M30.1409 23.413C30.8033 23.413 31.4508 23.2166 32.0015 22.8486C32.5523 22.4806 32.9815 21.9575 33.2349 21.3456C33.4885 20.7337 33.5548 20.0604 33.4255 19.4107C33.2963 18.761 32.9773 18.1643 32.509 17.696C32.0406 17.2276 31.4439 16.9087 30.7943 16.7795C30.1446 16.6502 29.4713 16.7165 28.8594 16.97C28.2474 17.2235 27.7243 17.6527 27.3564 18.2034C26.9884 18.7542 26.792 19.4017 26.792 20.064C26.792 20.9523 27.1448 21.8041 27.7729 22.4321C28.4009 23.0602 29.2527 23.413 30.1409 23.413ZM30.1409 18.3896C30.4721 18.3896 30.7958 18.4878 31.0712 18.6718C31.3466 18.8557 31.5612 19.1173 31.688 19.4232C31.8147 19.7292 31.8478 20.0659 31.7833 20.3907C31.7186 20.7155 31.5591 21.0139 31.325 21.2481C31.0908 21.4822 30.7924 21.6417 30.4676 21.7064C30.1428 21.7709 29.8061 21.7378 29.5001 21.6111C29.1942 21.4843 28.9326 21.2697 28.7487 20.9943C28.5647 20.7189 28.4665 20.3952 28.4665 20.064C28.4665 19.62 28.6429 19.1941 28.9569 18.88C29.271 18.566 29.6969 18.3896 30.1409 18.3896Z" fill="black" />
                </svg>

                <p className={styles.upper}>24 / 7 Support</p>
                <p className={styles.lower}>Dedicated support</p>
            </div>
        </div>
        <div className={styles.insta}>
                <p className={styles.follow}>Follow Us On Instagram</p>
                <p className={styles.para}>Stay in vogue with Fashion Hub Fashion! Follow us on Instagram for the latest trends and style inspiration</p>
        </div>

        <div className={styles.imageBanner}>
            <img src="images\down1.png" className={styles.low1} height="200px"></img>
            <img src="images\up1.png" className={styles.up1} height="250px"></img>
            <img src="images\down2.png" className={styles.low1} height="200px" ></img>
            <img src="images\up2.png" className={styles.up1} height="250px"></img>
            <img src="images\down3.png" className={styles.low1} height="200px"></img>
            <img src="images\up3.png" className={styles.up1} height="250px"></img>
            <img src="images\down4.png" className={styles.low} height="200px" width="220px"></img>
        </div>
        

        <div className={styles.community}>
            <p className={styles.comm}>This Is What Our Customers Say</p>
            <p className={styles.commdown}>Join the chorus of delighted customers who have experienced seamless service, unparalleled quality, and unforgettable moments with us!</p>
        </div>
        </div>
    )
}

export default Banner;