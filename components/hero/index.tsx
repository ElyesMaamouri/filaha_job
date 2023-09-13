import React from 'react';
import styles from "./Hero.module.scss";
import SideBar from '../../layout/Sidebar';
import BaseCard from '../baseCard/BaseCard';
import Map from '../map';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Link from 'next/link';
import { useRouter } from 'next/router';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { fr } from 'date-fns/locale';
import BaseCardUser from '../baseCardUser';
import Footer from '@/layout/Footer';
 

const Hero = () => {

    const [selected, setSelected] = React.useState<Date>();


    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <SideBar text="acceuil" icon={"/img/home.svg"} customStyle={{ background: "#3F9858" }} link={'/'} />
                    <SideBar link={'/qui-sommes-nous'} text="a propos" icon={"/img/information-button 1.svg"} customStyle={{ background: "#ACD460" }} />
                    <SideBar text="référentiel" icon={"/img/book 1.svg"} customStyle={{ background: "#ACD460" }} />
                    <SideBar text="offre d'emploi" icon={"/img/business-card 1.svg"} customStyle={{ background: "#ACD460" }} />
                    <SideBar text="documentation" icon={"/img/doc.svg"} customStyle={{ background: "#ACD460" }} />
                    <Map />
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        locale={fr}
                    />
                </div>





                <div className={styles.heroStyle}>

                    <Carousel
                        autoPlay
                        swipeable={false}
                        infiniteLoop
                        interval={3000}
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        width="100%"
                        className={styles.rightHero}

                    >

                        <div className={styles.cardWrapper}>
                            <BaseCard text='FILAHA JOB au service des exploilants agricoles ' cardImage="./img/card-img-1.jpg" />
                            <BaseCard text='coopération maroco-espagnole : offres emploi' cardImage="./img/card-img-2.jpg" />
                            <BaseCard text='Lancement de la compagne agricole 2023 ' cardImage="./img/card-img-3.jpg" />
                            <BaseCard text='Agro IT days : Transformation digitale au cours de la SGG ' cardImage="./img/card-img-4.jpg" />
                        </div>
                        <div className={styles.cardWrapper}>
                            <BaseCard text='FILAHA JOB au service des exploilants agricoles ' cardImage="./img/card-img-5.jpg" />
                            <BaseCard text='coopération maroco-espagnole : offres emploi' cardImage="./img/card-img-1.jpg" />
                            <BaseCard text='Lancement de la compagne agricole 2023 ' cardImage="./img/card-img-2.jpg" />
                            <BaseCard text='Agro IT days : Transformation digitale au cours de la SGG ' cardImage="./img/card-img-3.jpg" />
                        </div>
                        <div className={styles.cardWrapper}>
                            <BaseCard text='FILAHA JOB au service des exploilants agricoles ' cardImage="./img/card-img-4.jpg" />
                            <BaseCard text='coopération maroco-espagnole : offres emploi' cardImage="./img/card-img-5.jpg" />
                            <BaseCard text='Lancement de la compagne agricole 2023 ' cardImage="./img/card-img-1.jpg" />
                            <BaseCard text='Agro IT days : Transformation digitale au cours de la SGG ' cardImage="./img/card-img-2.jpg" />
                        </div>

                    </Carousel>

                    <div className={styles.cardUser}>
                        <BaseCardUser cardImage='./img/user-1.jpg' text='Espace Employeur agricole' />
                        <BaseCardUser cardImage='./img/user-2.jpg' text='Espace Demandeur emploi' />
                    </div>
                    <Footer />
                    <svg className={styles.iconChat} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 87 87" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.7422 2.71875H61.1719C68.6794 2.71875 74.7656 8.80488 74.7656 16.3125V38.6848C80.2807 40.4171 84.2812 45.5695 84.2812 51.6562V81.5625C84.2812 82.5441 83.752 83.4496 82.8967 83.9313C82.0414 84.4131 80.9929 84.3964 80.1534 83.8876L71.1902 78.4554H43.5C35.9923 78.4554 29.9062 72.3692 29.9062 64.8616V61.7545H19.361L6.97049 70.214C6.13797 70.7825 5.05929 70.8436 4.1679 70.3728C3.27652 69.9021 2.71875 68.9769 2.71875 67.9688V42.1406H8.15625V62.8205L16.9885 56.7903C17.4402 56.4819 17.9745 56.317 18.5215 56.317H29.9062V51.6562C29.9062 44.1486 35.9924 38.0625 43.5 38.0625H69.3281V16.3125C69.3281 11.8079 65.6764 8.15625 61.1719 8.15625H38.7422V2.71875ZM43.5 43.5C38.9954 43.5 35.3438 47.1517 35.3438 51.6562V64.8616C35.3438 69.3662 38.9954 73.0179 43.5 73.0179H71.9498C72.4467 73.0179 72.934 73.1539 73.3589 73.4116L78.8438 76.7356V51.6562C78.8438 47.1517 75.1921 43.5 70.6875 43.5H43.5Z" fill="#EC9937" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.71875 16.3125C2.71875 8.80488 8.80488 2.71875 16.3125 2.71875H38.7422C40.2438 2.71875 41.4609 3.93598 41.4609 5.4375C41.4609 6.93902 40.2438 8.15625 38.7422 8.15625H16.3125C11.8079 8.15625 8.15625 11.8079 8.15625 16.3125V42.1406C8.15625 43.6422 6.93902 44.8594 5.4375 44.8594C3.93598 44.8594 2.71875 43.6422 2.71875 42.1406V16.3125Z" fill="#E89A3F" />
                    </svg>
                </div>


            </div>



        </>





    );
}

export default Hero;

