import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import imageAboutBanner from "../../assets/images/about_banner.jpg";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./About.scss";

function About() {
    return (
        <div>
            <Header />
            <Banner image={imageAboutBanner} />
            <div className="about_dropdown_container">
                <Dropdown title="Fiabilité">
                    <p className="about_dropdown_container_p">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Dropdown>
                <Dropdown title="Respect">
                    <p className="about_dropdown_container_p">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Dropdown>
                <Dropdown title="Service">
                    <p className="about_dropdown_container_p">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Dropdown>
                <Dropdown title="Sécurité">
                    <p className="about_dropdown_container_p">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Dropdown>
            </div>
            <Footer />
        </div>
    );
}

export default About;
