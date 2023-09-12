import React from "react";
import Image from 'next/image';
import styles from './leftNavbar.module.scss'
const RightNavbar: React.FC<any> = () => {

    return (

        <div className={styles.logoArea}>
           
        <img className={styles.logo} src="/img/logo.svg" alt="" />
        </div>
    );
}

export default RightNavbar;