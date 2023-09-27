import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import imageAboutBanner from "../../assets/images/about_banner.jpg";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Dropdown/Dropdown";

function About() {
    return (
        <div>
            <Header />
            <Banner image={imageAboutBanner} />
            <Dropdown />
            <Footer />
        </div>
    );
}

export default About;
