import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import immo from "../../datas/accommodation.json";
import { useParams } from "react-router-dom";

function Accommodation() {
    const { id } = useParams();
    const accommodation = immo.find((item) => item.id === id);

    return (
        <div>
            <Header />
            {accommodation && <Carousel pictures={accommodation.pictures} />}
            <div>
                <div>
                    <h2>{accommodation.title}</h2>
                    <span>{accommodation.location}</span>
                </div>
            </div>
            <div></div>
            <div></div>

            <Footer />
        </div>
    );
}

export default Accommodation;
