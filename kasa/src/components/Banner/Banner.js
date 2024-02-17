import styles from './Banner.module.scss';

function Banner({ src, alt, title }) {
    return (
        <section className={styles.imageHeader}>
            <img src={src} alt={alt} className={styles.image1} />
            <h1 className={styles.title}>{title}</h1>
        </section>
    );
}

export default Banner;