import React from 'react';
import styles from "./Hero.module.scss";
import SideBar from '../../layout/Sidebar';
import BaseCard from '../baseCard/BaseCard';
import Map from '../map';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CalendarTimes from '../calendar/calendarTimes';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { fr } from 'date-fns/locale';

const Hero = () => {

    const [selected, setSelected] = React.useState<Date>();


    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <SideBar text="acceuil" icon={"/img/home.svg"} customStyle={{ background: "#3F9858" }} />
                <SideBar text="a propos" icon={"/img/information-button 1.svg"} customStyle={{ background: "#ACD460" }} />
                <SideBar text="référentiel" icon={"/img/book 1.svg"} customStyle={{ background: "#ACD460" }} />
                <SideBar text="offre d'emploi" icon={"/img/business-card 1.svg"} customStyle={{ background: "#ACD460" }} />
                <SideBar text="documentation" icon={"/img/doc.svg"} customStyle={{ background: "#ACD460" }} />

                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    locale={fr}
                />
            </div>




            <Carousel

                swipeable={false}
                infiniteLoop
                interval={10000}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                width="100%"
                className={styles.rightHero}

            >

                <div className={styles.cardWrapper}>
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                </div>
                <div className={styles.cardWrapper}>
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                </div>
                <div className={styles.cardWrapper}>
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                    <BaseCard text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' cardImage="./img/card-img-1.jpg" />
                </div>

            </Carousel>
        </div>


    );
}

export default Hero;

