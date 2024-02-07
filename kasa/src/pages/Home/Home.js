import styles from './Home.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1 className={styles.title}>Home</h1>
            <Link to="/fiche-logement"><button className={styles.button}>Logement</button></Link>
        </div>
    );
}

export default Home;