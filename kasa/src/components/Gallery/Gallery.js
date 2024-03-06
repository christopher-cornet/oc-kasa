import styles from './Gallery.module.scss';
import data from '../../logements.json';
import { useLocation } from 'react-router-dom';
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';
import { useEffect, useState } from 'react';

function Gallery() {
    let [banner, setBanner] = useState("");
    let [pictureNumber, setPictureNumber] = useState(1);
    let [maximumPictures, setMaximumPictures] = useState(1);
    let [currentElement, setCurrentElement] = useState("");

    const location = useLocation();

    useEffect(() => {
        data.forEach(element => {
            if (location.pathname === `/fiche-logement/${element.id}`) {
                setCurrentElement(element);
                setMaximumPictures(element.pictures.length);
                setBanner(element.pictures[0]);
            }
        });
    }, [currentElement, location.pathname]);

    let handleClick = (arrow) => {
        if (arrow === 'left') {
            if (pictureNumber === 1) {
                setPictureNumber(maximumPictures);
                setBanner(currentElement.pictures[currentElement.pictures.length - 1]);
            }
            else {
                setPictureNumber(pictureNumber - 1);
                setBanner(currentElement.pictures[pictureNumber - 2]);
            }
        }
        else if (arrow === 'right') {
            if (pictureNumber === maximumPictures) {
                setPictureNumber(1);
                setBanner(currentElement.pictures[0]);
            }
            else {
                setPictureNumber(pictureNumber + 1);
                setBanner(currentElement.pictures[pictureNumber]);
            }
        }
    }

    return (
        <div className={styles.bannerContainer}>
            <img className={styles.banner} src={banner} alt="Appartement à louer" />
            <div className={styles.arrows}>
                <img className={styles.arrow} onClick={() => handleClick('left')} src={arrowLeft} alt="Flèche gauche" />
                <img className={styles.arrow} onClick={() => handleClick('right')} src={arrowRight} alt="Flèche droite" />
            </div>
            <p className={styles.pictureNumber}>{pictureNumber}/{maximumPictures}</p>
        </div>
    );
}

export default Gallery;