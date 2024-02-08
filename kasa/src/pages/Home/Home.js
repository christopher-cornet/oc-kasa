import styles from './Home.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/Image1.png';

function Home() {
    return (
        <div>
            <section className={styles.imageHeader}>
                <img src={image1} alt="Image1" className={styles.image1} />
                <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
            </section>
            <Link to="/fiche-logement"><button className={styles.button}>Logement</button></Link>
        </div>
    );
}

export default Home;