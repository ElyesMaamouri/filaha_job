import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import styles from "./NavBar.module.scss"
import CalendarTimes from "@/components/calendar/calendarTimes";
const Navbar = () => {
    return (<div className={styles.container}>
        <LeftNavbar />
        <RightNavbar />
   
    </div>);
}

export default Navbar;