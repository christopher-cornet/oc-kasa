import styles from './Card.module.scss';
import data from '../../logements.json';
import { Link } from 'react-router-dom';

function Card() {
    console.log(data);
    const cardData = data.slice(0, 6).map((logement) =>
        <Link to="/fiche-logement">
            <div key={logement.id}>
                <img src={logement.cover} className={styles.cardImg} alt="Appartement à louer" />
                <p>{logement.title}</p>
            </div>
        </Link>
    );

    return (
        <div className={styles.grid}>
            {cardData}
        </div>
    );
}

export default Card;