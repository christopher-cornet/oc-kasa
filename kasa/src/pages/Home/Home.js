import styles from './Home.module.scss';
import React from 'react';
import Image1 from '../../images/Image1.png';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';

function Home() {
    return (
        <main>
            <Banner src={Image1} alt="Île avec des rochers, des arbres et la mer" title="Chez vous, partout et ailleurs" />
            <section className={styles.cardsContainer}>
                <Card />
            </section>
        </main>
    );
}

export default Home;