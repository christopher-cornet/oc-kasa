import React, { useState } from 'react';
import styles from './Collapse.module.scss';
import Arrow from '../../images/chevron-up.svg';

function Collapse({ title, text }) {
    const [buttonClick, setButtonClick] = useState(false);
    const [showText, setshowText] = useState(false);

    const handleClick = () => {
        setButtonClick(!buttonClick);
        setshowText(!showText);
    }

    return (
        <div className={styles.value}>
            <div className={styles.title_arrow}>
                <p className={styles.valueTitle}>{title}</p>
                <div onClick={handleClick} className={styles.arrowContainer}>
                    <img src={Arrow} alt="arrow" className={buttonClick ? styles.arrowUp : styles.arrowDown} />
                </div>
            </div>
            <div className={showText ? `${styles.textContainer} ${styles.showText}` : `${styles.textContainer} ${styles.hideText}`}>
                <div className={styles.valueText}>{text}</div>
            </div>
        </div>
    )
}

export default Collapse;