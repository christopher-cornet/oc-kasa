// import styles from './About.module.scss';
import Banner from '../../components/Banner/Banner';
import Image2 from '../../images/Image2.png';
import Value from '../../components/Value/Value';

function About() {
    return (
        <div>
            <Banner src={Image2} alt="Montagnes et forêts" />
            <main>
                <Value title="Fiabilité" text="" />
                <Value title="Respect" text="" />
                <Value title="Service" text="" />
                <Value title="Sécurité" text="" />
            </main>
        </div>
    );
}

export default About;