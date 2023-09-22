import immo from "../../datas/accommodation.json";
import Banner from "../../components/Banner/Banner";
import imageHomeBanner from "../../assets/images/home_banner.jpg";

function Home() {
    console.log(immo);
    return (
        <div>
            <Banner image={imageHomeBanner} title="Chez vous, partout et ailleurs" />
            <h1> Page d'accueil 🏠</h1>
        </div>
    );
}

export default Home;
