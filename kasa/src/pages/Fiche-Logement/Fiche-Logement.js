import styles from './Fiche-Logement.module.scss';
import Gallery from '../../components/Gallery/Gallery';
import data from '../../logements.json';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import StarActive from '../../images/StarActive.png';
import StarInactive from '../../images/StarInactive.png';
import { useNavigate } from "react-router-dom";

function Logement() {
    let [title, setTitle] = useState("");
    let [currentLocation, setCurrentLocation] = useState("");
    let [tags, setTags] = useState("");
    let [hostName, setHostName] = useState("");
    let [hostPicture, setHostPicture] = useState("");
    let [description, setDescription] = useState("");
    let [equipments, setEquipments] = useState("");
    let [rating, setRating] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {        
        const id = data.map(element => element.id);

        const currentPageId = location.pathname.split('/').pop();

        if (!id.includes(currentPageId)) {
            navigate("/error404");
        }
    }, [navigate, location.pathname]);

    const generateStars = (rating) => {
        const stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src={StarActive} alt="Étoile active" />);
        }
        
        for (let i = rating; i < 5; i++) {
            stars.push(<img key={i} src={StarInactive} alt="Étoile inactive" />);
        }

        return stars;
    };

    useEffect(() => {
        data.forEach(element => {
            const equipments = element.equipments.map((equipment, index) => {
                return <p key={index}>{equipment}</p>;
            });

            const tags = element.tags.map((tag, index) => {
                return <div key={index} className={styles.backgroundTag}>
                    <p key={index} className={styles.tag}>{tag}</p>
                </div>;
            });

            if (location.pathname === `/fiche-logement/${element.id}`) {
                const stars = parseInt(element.rating);

                setTitle(element.title);
                setCurrentLocation(element.location);
                setTags(tags);
                setHostName(element.host.name);
                setHostPicture(element.host.picture);
                setDescription(element.description);
                setEquipments(equipments);
                setRating(stars);
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

                        <div className={styles.tagsContainer}>
                            {tags}
                        </div>
                    </div>

                    <div className={styles.informationsHost}>
                        <div className={styles.host}>
                            <h1 className={styles.hostName}>{hostName}</h1>
                            <img className={styles.hostPicture} src={hostPicture} alt="Propriétaire de l'appartement" />
                        </div>
                        <div className={styles.ratingContainer}>
                            {generateStars(rating)}
                        </div>
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