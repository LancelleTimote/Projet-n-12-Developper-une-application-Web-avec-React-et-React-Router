import realEstateData from "../../datas/accommodation.json";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import imageHomeBanner from "../../assets/images/home_banner.jpg";
import HomeCard from "../../components/HomeCard/HomeCard";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

function Home() {
    return (
        <div>
            <Header />
            <Banner image={imageHomeBanner} title="Chez vous, partout et ailleurs" />
            <section className="homeCardContainer">
                {realEstateData.map((item) => (
                    <HomeCard key={item.id} id={item.id} title={item.title} cover={item.cover} />
                ))}
            </section>
            <Footer />
        </div>
    );
}

export default Home;
