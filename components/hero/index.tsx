import React from 'react';
import styles from "./Hero.module.scss";
import SideBar from '../../layout/Sidebar';
import BaseCard from '../baseCard/BaseCard';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <SideBar text="acceuil" icon={"/img/home.svg"} customStyle={{ background: "#3F9858" }} />
                <SideBar text="a propos" icon={"/img/information-button 1.svg"} customStyle={{ background: "#ACD460" }} />
                <SideBar text="référentiel" icon={"/img/book 1.svg"}   customStyle={{ background: "#ACD460" }} />
                <SideBar text="offre d'emploi" icon={"/img/business-card 1.svg"} customStyle={{ background: "#ACD460" }} />
                <SideBar text="documentation" icon={"/img/doc.svg"} customStyle={{ background: "#ACD460" }} />
            </div>
            <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg"/>
        </div>
    );
}

export default Hero;

