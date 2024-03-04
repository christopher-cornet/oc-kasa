import styles from './Card.module.scss';

function Card({ src, className, alt, title }) {
    return (
        <div>
            <img src={src} className={className} alt={alt} />
            <p className={styles.cardTitle}>{title}</p>
        </div>
    );
}

export default Card;