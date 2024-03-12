import styles from './404.module.scss';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <main>
            <h1 className={styles.title}>404</h1>
            <p className={styles.oops}>Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/" className={styles.home}>Retourner sur la page d'accueil</Link>
        </main>
    );
}

export default Error404;