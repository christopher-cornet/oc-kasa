import styles from './Header.module.scss';
import logoKasa from '../../images/logoKasa.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src={logoKasa} className={styles.logoKasa} alt="Kasa" />
            <nav>
                <ul>
                    <li><Link to="/" className={styles.homeLink}>Accueil</Link></li>
                    <li><Link to="/a-propos" className={styles.aboutLink}>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;