import styles from './Card.module.scss';
import data from '../../logements.json';

function Card() {
    const cardData = data.slice(0, 6).map((logement) =>
        <div key={logement.id}>
            <img src={logement.cover} className={styles.cardImg} alt="Appartement à louer" />
            <p>{logement.title}</p>
        </div>
    );

    return (
        <div className={styles.grid}>
            {cardData}
        </div>
    );
}

export default Card;