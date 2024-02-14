import styles from './Home.module.scss';
import React from 'react';
import image1 from '../../images/Image1.png';
import Card from '../../components/Card/Card';

function Home() {
    return (
        <main>
            <section className={styles.imageHeader}>
                <img src={image1} alt="Île avec des rochers, des arbres et la mer" className={styles.image1} />
                <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
            </section>
            <section className={styles.cardsContainer}>
                <Card />
            </section>
        </main>
    );
}

export default Home;