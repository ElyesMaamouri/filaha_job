import React from "react";
import styles from './rightNavbar.module.scss'
import BaseButton from "../../../components/baseButton/BaseButton";
import BaseInput from "../../../components/input/BaseInput";

const RightNavbar: React.FC<any> = () => {

    return (
        <div className={styles.container}>
            <div className={styles.action}>
                <form className={styles.formInput} action="">
                    <BaseInput type="text" placeholder="Search" customStyle={{ width: '100%', height: "38px" }} />
                    <svg className={styles.iconSearch} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M39.4375 36.6484L28 25.2109C30.1328 22.4766 31.2812 19.1016 31.2812 15.6406C31.2812 7.01562 24.2656 0 15.6406 0C7.01562 0 0 7.01562 0 15.6406C0 24.2656 7.01562 31.2813 15.6406 31.2813C19.1328 31.2813 22.5234 30.1172 25.2656 27.9609L36.6953 39.3906C37.4844 40.1172 38.7031 40.0625 39.4297 39.2734C40.1094 38.5312 40.1094 37.3906 39.4375 36.6484ZM3.86719 15.6406C3.86719 9.14844 9.14844 3.875 15.6328 3.875C22.1172 3.875 27.3984 9.15625 27.3984 15.6406C27.3984 22.125 22.1172 27.4063 15.6328 27.4063C9.14844 27.4063 3.86719 22.125 3.86719 15.6406Z" fill="black" />
                    </svg>
                </form>
                <div className={styles.btn}>
                    <BaseButton text="FR" customStyle={{ width: '38px', height: '38px', fontSize: "16px", fontWeight: '400', color: "#000" }} />
                    <BaseButton text="ع" customStyle={{ width: '38px', height: '38px', fontSize: "16px", fontWeight: '400', color: "#000" }} />

                </div>
            </div>
        </div>
    );
}

export default RightNavbar;