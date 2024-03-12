import './Footer.module.scss';
import LogoKasaFooter from '../../images/logoKasaFooter.png';

function Footer() {
    return (
        <footer>
            <img src={LogoKasaFooter} alt="Logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;