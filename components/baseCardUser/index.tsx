import React from 'react';
import styles from './BaseCardUser.module.scss'

const BaseCardUser = ({ text, cardImage }: { text: string, cardImage: string }) => {
    return (

        <div className={styles.containerCard} >

            <img src={cardImage} alt="" />
            <a href="">{text}</a>
        </div>

    );
}

export default BaseCardUser;

