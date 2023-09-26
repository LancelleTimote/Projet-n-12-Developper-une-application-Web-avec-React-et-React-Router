import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import imageAboutBanner from "../../assets/images/about_banner.jpg";
import Footer from "../../components/Footer/Footer";

function About() {
    return (
        <div>
            <Header />
            <Banner image={imageAboutBanner} />
            <h1> Page A propos 🏠</h1>
            <Footer />
        </div>
    );
}

export default About;
