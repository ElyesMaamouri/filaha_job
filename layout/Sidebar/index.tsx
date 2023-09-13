import React from "react";
import styles from "./SideBar.module.scss"
import Link from 'next/link';
const SideBar: React.FC<any> = ({ text, icon,  customStyle, link }: { text: string, icon : string,  customStyle: { background: string }, link:string }) => {
    return (
        <div className={styles.container}>
     
                <div style={customStyle} className={styles.menu}>
                    <div></div>
                    <Link className={styles.link} href={`${link}`}>{text}</Link>
                   <img src={icon} alt="icon"  />

              
            </div>
     
        </div>
    );
}

export default SideBar;