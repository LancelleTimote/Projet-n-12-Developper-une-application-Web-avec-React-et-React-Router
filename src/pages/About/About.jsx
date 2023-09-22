import Banner from "../../components/Banner/Banner";
import imageAboutBanner from "../../assets/images/about_banner.jpg";

function About() {
    return (
        <div>
            <Banner image={imageAboutBanner} />
            <h1> Page A propos 🏠</h1>
        </div>
    );
}

export default About;
