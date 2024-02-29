import styles from './Gallery.module.scss';
import data from '../../logements.json';
// import { useLocation } from 'react-router-dom';
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';

function Gallery() {
    console.log(data);

    // const location = useLocation();

    let arrowLeft = () => {

    }

    let arrowRight = () => {

    }

    return (
        <div className={styles.bannerContainer}>
            <img className={styles.banner} src={data[0].cover} alt="Appartement à louer" />
            <div className={styles.arrows}>
                <img className={styles.arrow} onClick={arrowLeft} src={arrowLeft} alt="Flèche gauche" />
                <img className={styles.arrow} onClick={arrowRight} src={arrowRight} alt="Flèche droite" />
            </div>
        </div>
    );
}

export default Gallery;