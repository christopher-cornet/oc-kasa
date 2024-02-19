import styles from './Home.module.scss';
import React from 'react';
import Image1 from '../../images/Image1.png';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import data from '../../logements.json';
import { Link } from 'react-router-dom';

function Home() {
    const cardData = data.slice(0, 6).map((logement) =>
        <Link to={`/fiche-logement/${logement.id}`} key={logement.id}>
            <Card src={logement.cover} className={styles.cardImg} alt="Appartement à louer" title={logement.title} />
        </Link>
    );

    return (
        <main>
            <Banner src={Image1} alt="Île avec des rochers, des arbres et la mer" title="Chez vous, partout et ailleurs" />
            <section className={styles.cardsContainer}>
                <div className={styles.grid}>
                    {cardData}
                </div>
            </section>
        </main>
    );
}

export default Home;