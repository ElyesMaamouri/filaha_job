import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {
    return (

        <div className={styles.containerFooter} >
            <div className={styles.leftFooter}>
                <p>©  2023 Tous droits réservés</p>
                <a href="">Plan du site</a>
                <a href="">Lien Utiles</a>
            </div>
            <div className={styles.rightFooter}>
                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 98 79" fill="none">
                <path d="M98 9.35238C94.3556 10.9385 90.4724 11.9898 86.4237 12.5002C90.5887 10.033 93.7676 6.15592 95.2621 1.48277C91.3789 3.77985 87.0914 5.40239 82.5221 6.30785C78.8349 2.41254 73.5796 0 67.8466 0C56.7236 0 47.7689 8.95738 47.7689 19.9384C47.7689 21.5184 47.9036 23.0376 48.2344 24.4839C31.5315 23.6757 16.7519 15.7332 6.82325 3.634C5.08987 6.61777 4.07313 10.033 4.07313 13.7095C4.07313 20.6129 7.65625 26.7324 12.9972 30.2752C9.76937 30.2145 6.60275 29.2847 3.92 27.8202C3.92 27.8809 3.92 27.9599 3.92 28.0389C3.92 37.7255 10.8841 45.7714 20.0165 47.6248C18.3811 48.0685 16.5987 48.2812 14.749 48.2812C13.4627 48.2812 12.1642 48.2082 10.9454 47.9408C13.5485 55.8348 20.9353 61.6382 29.7185 61.8266C22.883 67.1318 14.2039 70.3282 4.80813 70.3282C3.1605 70.3282 1.58025 70.2553 0 70.0548C8.89962 75.7488 19.4469 79 30.821 79C67.7915 79 88.004 48.6154 88.004 22.278C88.004 21.3968 87.9734 20.5461 87.9305 19.7014C91.9179 16.8938 95.2682 13.3875 98 9.35238Z" fill="#03A9F4" />
            </svg>
                </a>
              <a href="">  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 70 70" fill="none">
                    <path d="M70 35C70 52.4699 57.2004 66.9498 40.4688 69.5748V45.1172H48.624L50.1758 35H40.4688V28.4348C40.4688 25.6662 41.825 22.9688 46.1727 22.9688H50.5859V14.3555C50.5859 14.3555 46.5801 13.6719 42.7506 13.6719C34.7566 13.6719 29.5312 18.5172 29.5312 27.2891V35H20.6445V45.1172H29.5312V69.5748C12.7996 66.9498 0 52.4699 0 35C0 15.6707 15.6707 0 35 0C54.3293 0 70 15.6707 70 35Z" fill="#1877F2" />
                </svg></a>
                <a href="">    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 58 58" fill="none">
                    <g clip-path="url(#clip0_64_20)">
                        <path d="M50.0909 0H7.90909C3.54102 0 0 3.54102 0 7.90909V50.0909C0 54.459 3.54102 58 7.90909 58H50.0909C54.459 58 58 54.459 58 50.0909V7.90909C58 3.54102 54.459 0 50.0909 0Z" fill="#0077B5" />
                        <path d="M20.8922 15.8182C20.8922 16.7959 20.6023 17.7516 20.0591 18.5645C19.516 19.3774 18.744 20.0109 17.8407 20.3851C16.9375 20.7592 15.9436 20.8571 14.9847 20.6664C14.0258 20.4756 13.145 20.0049 12.4537 19.3135C11.7624 18.6222 11.2916 17.7414 11.1008 16.7825C10.9101 15.8237 11.008 14.8298 11.3821 13.9265C11.7563 13.0233 12.3899 12.2512 13.2028 11.7081C14.0157 11.1649 14.9714 10.875 15.949 10.875C17.2601 10.875 18.5174 11.3958 19.4444 12.3228C20.3714 13.2499 20.8922 14.5072 20.8922 15.8182Z" fill="white" />
                        <path d="M19.7719 24.0568V45.8958C19.7728 46.0569 19.7418 46.2166 19.6808 46.3657C19.6197 46.5148 19.5298 46.6504 19.4162 46.7646C19.3025 46.8788 19.1675 46.9695 19.0187 47.0313C18.8699 47.0932 18.7104 47.125 18.5493 47.125H13.3392C13.1781 47.1255 13.0185 47.094 12.8695 47.0326C12.7206 46.9711 12.5853 46.8809 12.4714 46.7669C12.3575 46.653 12.2672 46.5177 12.2057 46.3688C12.1443 46.2198 12.1129 46.0602 12.1133 45.8991V24.0568C12.1133 23.7317 12.2424 23.4199 12.4723 23.19C12.7022 22.9601 13.0141 22.8309 13.3392 22.8309H18.5493C18.8739 22.8318 19.1848 22.9613 19.414 23.1912C19.6432 23.421 19.7719 23.7323 19.7719 24.0568Z" fill="white" />
                        <path d="M47.006 35.4261V45.9979C47.0064 46.1461 46.9775 46.2928 46.9211 46.4297C46.8646 46.5667 46.7816 46.6911 46.6768 46.7958C46.5721 46.9006 46.4477 46.9836 46.3107 47.0401C46.1738 47.0966 46.027 47.1254 45.8789 47.125H40.2766C40.1285 47.1254 39.9818 47.0966 39.8448 47.0401C39.7079 46.9836 39.5835 46.9006 39.4787 46.7958C39.374 46.6911 39.291 46.5667 39.2345 46.4297C39.178 46.2928 39.1492 46.1461 39.1496 45.9979V35.7524C39.1496 34.2233 39.5978 29.056 35.1522 29.056C31.7085 29.056 31.0065 32.592 30.8681 34.1804V45.9979C30.8681 46.294 30.7517 46.5782 30.5439 46.7891C30.336 47 30.0536 47.1206 29.7575 47.125H24.3464C24.1986 47.125 24.0522 47.0958 23.9156 47.0391C23.7791 46.9824 23.655 46.8994 23.5506 46.7947C23.4462 46.69 23.3635 46.5657 23.3073 46.429C23.251 46.2923 23.2222 46.1458 23.2227 45.9979V23.9612C23.2222 23.8134 23.251 23.6669 23.3073 23.5302C23.3635 23.3935 23.4462 23.2692 23.5506 23.1645C23.655 23.0598 23.7791 22.9767 23.9156 22.92C24.0522 22.8634 24.1986 22.8342 24.3464 22.8342H29.7575C30.0565 22.8342 30.3431 22.9529 30.5545 23.1643C30.7659 23.3756 30.8846 23.6623 30.8846 23.9612V25.866C32.1632 23.948 34.0581 22.4684 38.1016 22.4684C47.0587 22.4684 47.006 30.8322 47.006 35.4261Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_64_20">
                            <rect width="58" height="58" fill="white" />
                        </clipPath>
                    </defs>
                </svg></a>
            </div>

        </div>

    );
}

export default Footer;

