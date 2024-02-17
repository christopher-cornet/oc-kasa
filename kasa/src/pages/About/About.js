import styles from './About.module.scss';
import Banner from '../../components/Banner/Banner';
import Image2 from '../../images/Image2.png';

function About() {
    return (
        <div>
            <Banner src={Image2} alt="Montagnes et forêts" title="" />
        </div>
    );
}

export default About;