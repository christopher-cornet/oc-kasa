import React, { useState } from 'react';
import styles from './Collapse.module.scss';

function Collapse({ title, text }) {
    const [buttonClick, setButtonClick] = useState(false);

    const handleClick = () => {
        buttonClick ? setButtonClick(false) : setButtonClick(true);
    }

    return (
        <div className={styles.value}>
            <h1 className={styles.valueTitle}>{buttonClick}</h1>
            <div className={styles.title_arrow}>
                <p className={styles.valueTitle}>{title}</p>
                <button onClick={handleClick} className={styles.arrow}>V</button>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.valueText}>{text}</p>
            </div>
        </div>
    )
}

export default Collapse;