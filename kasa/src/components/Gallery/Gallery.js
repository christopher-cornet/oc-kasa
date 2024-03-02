import styles from './Gallery.module.scss';
import data from '../../logements.json';
import { useLocation } from 'react-router-dom';
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';

function Gallery() {
    console.log(data);

    let currentPicture = 1;
    // let maxPicture = data.length;

    const location = useLocation();

    console.log(location.pathname);

    let handleClick = (arrow) => {
        if (arrow === 'left') {
            console.log('left');
        }
        else if (arrow === 'right') {
            console.log('right');
        }
    }

    return (
        <div className={styles.bannerContainer}>
            <img className={styles.banner} src={data[0].cover} alt="Appartement à louer" />
            <div className={styles.arrows}>
                <img className={styles.arrow} onClick={() => handleClick('left')} src={arrowLeft} alt="Flèche gauche" />
                <img className={styles.arrow} onClick={() => handleClick('right')} src={arrowRight} alt="Flèche droite" />
            </div>
            <p className={styles.pictureNumber}>{pictureNumber}</p>
        </div>
    );
}

export default Gallery;