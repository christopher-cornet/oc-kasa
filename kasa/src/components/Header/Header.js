import styles from './Header.module.scss';
import logoKasa from '../../images/logoKasa.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header>
            <img src={logoKasa} className={styles.logoKasa} alt="Kasa" />
            <nav>
                <ul className={styles.ul}>
                    <li><Link to="/" className={location.pathname === "/" ?  styles.homeLink_CurrentPath : styles.homeLink}>Accueil</Link></li>
                    <li><Link to="/a-propos" className={location.pathname === "/a-propos" ?  styles.aboutLink_CurrentPath : styles.aboutLink}>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;