import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import styles from "./NavBar.module.scss"
const Navbar = () => {
    return (<div className={styles.container}>
        <LeftNavbar />
        <RightNavbar />
    </div>);
}

export default Navbar;