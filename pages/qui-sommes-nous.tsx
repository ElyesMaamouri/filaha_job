import React from "react";
import Navbar from "../layout/Navbar";
import Map from "@/components/map";
import SideBar from "@/layout/Sidebar";
 
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { fr } from 'date-fns/locale';
import styles from '../styles/WhoWeAre.module.scss'

export default function WhoAreWe() {
    const [selected, setSelected] = React.useState<Date>();
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.menu}>
                    <SideBar text="acceuil" icon={"/img/home.svg"} customStyle={{ background: "#3F9858" }} link={"/"} />
                    <SideBar text="a propos" icon={"/img/information-button 1.svg"} customStyle={{ background: "#ACD460" }} link={"/qui-sommes-nous"} />
                    <SideBar text="référentiel" icon={"/img/book 1.svg"} customStyle={{ background: "#ACD460" }} link={"/"} />
                    <SideBar text="offre d'emploi" icon={"/img/business-card 1.svg"} customStyle={{ background: "#ACD460" }} link={"/"} />
                    <SideBar text="documentation" icon={"/img/doc.svg"} customStyle={{ background: "#ACD460" }} link={"/"} />
                     <Map/>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        locale={fr}
                    />
                </div>

               
                <div className={styles.content}>
                    <h1 className={styles.title}>Qui sommes-nous ?</h1>

                    <div className={styles.informations}>
                        <div className={styles.cardContainer}>
                            <div className={styles.card__greenDark}>
                                <p className={styles.card__text}>Notre Vision</p>
                                <img className={styles.shape1} src="/img/shape1.png" />
                            </div>
                            <p className={styles.decription}>FILAHA JOB vise la résorptioon du chomage, l"amélioration du rendement et de l'activité agricole, l"amélioration de la sécurité alimentaire, eet la lutte contre les pratiques informelles dans le secteur agricole</p>
                        </div>

                        <div className={styles.cardContainer}>
                            <div className={styles.card__greenDark}>
                                <p className={styles.card__text}>Notre Mission</p>
                                <img className={styles.shape1} src="/img/shape1.png" />
                            </div>
                            <p className={styles.decription}>FILAHA JOB offre un service de digital recrutement de haut niveau pour assurer un meilleur maillage entre les travailleurs et les employeurs dans le marché de l'emploi agricole</p>
                        </div>
                    </div>

                    <div className={styles.solutions}>

                        <div className={styles.cardContainer}>
                            <div className={styles.card__greenLight}>
                                <p className={styles.card__text}>Nos Solutions</p>
                                <img className={styles.shape1} src="/img/shape2.png" />
                            </div>
                            <div className={styles.decription}>

                                <div>

                                    <div className={styles.solution__card}>

                                        <div className={styles.check}>
                                            <img className={styles.imgCheck} src="/img/check.png" />
                                        </div>

                                        <div className={styles.rightSide}>
                                            <h2 className={styles.title}>Plateforme spécialisée</h2>
                                            <p className={styles.decription}>Bilingue, responsive et interactive</p>
                                        </div>

                                    </div>

                                    <div className={styles.solution__card}>

                                        <div className={styles.check}>
                                            <img className={styles.imgCheck} src="/img/check.png" />
                                        </div>

                                        <div className={styles.rightSide}>
                                            <h2 className={styles.title}>Expéerience interactive</h2>
                                            <p className={styles.decription}>Consultatioon, dépot et suivi des candidatures</p>
                                        </div>

                                    </div>

                                    <div className={styles.solution__card}>

                                        <div className={styles.check}>
                                            <img className={styles.imgCheck} src="/img/check.png" />
                                        </div>

                                        <div className={styles.rightSide}>
                                            <h2 className={styles.title}>Digital matchmaking</h2>
                                            <p className={styles.decription}>Consultation des offres et delandes d{""}emploi</p>
                                        </div>

                                    </div>

                                </div>

                                <div>

                                    <div className={styles.solution__card}>

                                        <div className={styles.check}>
                                            <img className={styles.imgCheck} src="/img/check.png" />
                                        </div>

                                        <div className={styles.rightSide}>
                                            <h2 className={styles.title}>Outils innovants</h2>
                                            <div className={styles.decription}>Conception et édition de CV (PDF, Vidéo, Audio)
                                            <p>Chatbot</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className={styles.solution__card}>

                                        <div className={styles.check}>
                                            <img className={styles.imgCheck} src="/img/check.png" />
                                        </div>

                                        <div className={styles.rightSide}>
                                            <h2 className={styles.title}>Open access</h2>
                                            <div className={styles.decription}>Référentiel des exploitations agricoles
                                            <p>Référentiell des métiers agricoles</p>
                                            <p>CVthéque spécialisée en argriculture</p>
                                            
                                            </div>
                                        </div>

                                    </div>


                                </div>


                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}
