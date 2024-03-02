import styles from './Fiche-Logement.module.scss';
import Gallery from '../../components/Gallery/Gallery';
import data from '../../logements.json';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';

function Logement() {
    let [title, setTitle] = useState("");
    let [currentLocation, setCurrentLocation] = useState("");
    let [tags, setTags] = useState("");
    let [hostName, setHostName] = useState("");
    let [hostPicture, setHostPicture] = useState("");
    let [description, setDescription] = useState("");
    let [equipments, setEquipments] = useState("");

    const location = useLocation();

    useEffect(() => {
        data.forEach(element => {
            const equipments = element.equipments.map((equipment, index) => {
                return <p key={index}>{equipment}</p>;
            });

            if (location.pathname === `/fiche-logement/${element.id}`) {
                setTitle(element.title);
                setCurrentLocation(element.location);
                setTags(element.tags);
                setHostName(element.host.name);
                setHostPicture(element.host.picture);
                setDescription(element.description);
                setEquipments(equipments);
            }
        });
    }, [location.pathname]);
    
    return (
        <div className={styles.ficheLogement}>
            <Gallery />

            <main className={styles.main}>
                <section className={styles.informationsContainer}>
                    <div>
                        <h1 className={styles.bannerTitle}>{title}</h1>
                        <h2 className={styles.location}>{currentLocation}</h2>

                        <div className={styles.tagContainer}>
                            <div className={styles.tags} key={tags}>
                                <p className={styles.tag}>{tags}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.informationsHost}>
                        <h1 className={styles.hostName}>{hostName}</h1>
                        <img className={styles.hostPicture} src={hostPicture} alt="Propriétaire de l'appartement" />
                    </div>
                </section>

                <section className={styles.details}>
                    <Collapse
                        title="Description"
                        text={description}
                    />
                    <Collapse
                        title="Équipements"
                        text={equipments}
                    />
                </section>
            </main>
        </div>
    );
}

export default Logement;