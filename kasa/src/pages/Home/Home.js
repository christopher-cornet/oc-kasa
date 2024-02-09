import styles from './Home.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/Image1.png';

function Home() {
    return (
        <main>
            <section className={styles.imageHeader}>
                <img src={image1} alt="Île avec des rochers, des arbres et la mer" className={styles.image1} />
                <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
            </section>
            <Link to="/fiche-logement"><button className={styles.button}>Logement</button></Link>
            <section className={styles.cardsContainer}>

            </section>
        </main>
    );
}

export default Home;