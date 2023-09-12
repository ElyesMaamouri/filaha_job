import React from 'react';
import styles from './BaseCard.module.scss'

const BaseCard = ({text, cardImage }: { text : string , cardImage : string}) => {
    return (
      
        <div className={styles.card} >
         <img src={cardImage} alt="" />
         <p>{text}</p>
        </div>
        
    );
}

export default BaseCard;

