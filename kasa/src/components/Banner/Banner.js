import styles from './Banner.module.scss';

function Banner({ src, alt }) {
    return (
        <div>
            <img src={src} alt={alt} />
            <h1 className={styles.title}></h1>
        </div>
    );
}

export default Banner;