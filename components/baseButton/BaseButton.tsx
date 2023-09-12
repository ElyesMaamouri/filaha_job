import React from 'react';
import styles from './BaseButton.module.scss'

const BaseButton = ({text, customStyle }: { text : string, customStyle: {width?: string, height?:string, fontSize: string, fontWeight: string, color : string} }) => {
    return (
        <button style={customStyle} className={styles.container}>
           {text}
        </button>
    );
}

export default BaseButton;

