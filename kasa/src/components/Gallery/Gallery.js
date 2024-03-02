import styles from './Gallery.module.scss';
import data from '../../logements.json';
import { useLocation } from 'react-router-dom';
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';
import { useEffect, useState } from 'react';

function Gallery() {
    let [banner, setBanner] = useState(1);
    let [currentPicture, setPicture] = useState(1);
    let [maxPicture, setMaxPicture] = useState(1);

    const location = useLocation();

    useEffect(() => {
        data.forEach(element => {
            if (location.pathname === `/fiche-logement/${element.id}`) {
                console.log("Logement actuel : ", element.id);
                setMaxPicture(element.pictures.length - 1);
                setBanner(element.cover);
            }
        });
    }, [location.pathname]);

    let handleClick = (arrow) => {
        if (arrow === 'left') {
            setPicture(currentPicture - 1);
        }
        else if (arrow === 'right') {
            setPicture(currentPicture + 1);
            console.log("Current picture : ", currentPicture);
        }
    }

    return (
        <div className={styles.bannerContainer}>
            <img className={styles.banner} src={banner} alt="Appartement à louer" />
            <div className={styles.arrows}>
                <img className={styles.arrow} onClick={() => handleClick('left')} src={arrowLeft} alt="Flèche gauche" />
                <img className={styles.arrow} onClick={() => handleClick('right')} src={arrowRight} alt="Flèche droite" />
            </div>
            <p className={styles.pictureNumber}>{currentPicture}/{maxPicture}</p>
        </div>
    );
}

export default Gallery;