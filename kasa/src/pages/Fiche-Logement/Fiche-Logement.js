import styles from './Fiche-Logement.module.scss';
import Gallery from '../../components/Gallery/Gallery';
import data from '../../logements.json';
// import { useLocation } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';

function Logement() {
    return (
        <div className={styles.ficheLogement}>
            <Gallery />

            <main className={styles.main}>
                <section className={styles.informationsContainer}>
                    <div>
                        <h1 className={styles.bannerTitle}>{data[0].title}</h1>
                        <h2 className={styles.location}>{data[0].location}</h2>

                        <div className={styles.tagContainer}>
                            <div className={styles.tags} key={data[0].id}>
                                <p className={styles.tag}>{data[0].tags}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.informationsHost}>
                        <h1 className={styles.hostName}>{data[0].host.name}</h1>
                        <img className={styles.hostPicture} src={data[0].host.picture} alt="Propriétaire de l'appartement" />
                    </div>
                </section>

                <section className={styles.details}>
                    <Collapse
                        title="Description"
                        text={data[0].description}
                    />
                    <Collapse
                        title="Équipements"
                        text={data[0].equipments} // /!\ Je dois mapper les équipements
                    />
                </section>
            </main>
        </div>
    );
}

export default Logement;