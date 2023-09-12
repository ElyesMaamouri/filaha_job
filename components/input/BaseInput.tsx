import React from 'react';
import styles from './BaseInput.module.scss'

const BaseInput = ({type, placeholder, customStyle }: { type : string , placeholder : string, customStyle : {width? : string, height?:string}}) => {
    return (
        <input type={type} placeholder={placeholder} className={styles.container} />
        
        
    );
}

export default BaseInput;

