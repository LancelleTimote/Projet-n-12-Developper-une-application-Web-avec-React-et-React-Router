import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import realEstateData from "../../datas/accommodation.json";
import { Navigate, useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import UserPicture from "../../components/UserPicture/UserPicture";
import "./Accommodation.scss";
import Star from "../../components/Star/Star";

function Accommodation() {
    const { id } = useParams();
    const accommodation = realEstateData.find((item) => item.id === id);

    if (!accommodation) {
        return <Navigate to="/404" />;
    }

    return (
        <div>
            <Header />
            {accommodation && <Carousel picture={accommodation.pictures} />}
            <div className="accommodation">
                <div className="accommodation_top">
                    <div className="accommodation_top_left">
                        <div className="accommodation_top_left_text">
                            <h2 className="accommodation_top_left_text_title">{accommodation.title}</h2>
                            <span className="accommodation_top_left_text_location">{accommodation.location}</span>
                        </div>
                        <div className="accommodation_top_left_tags">
                            {accommodation.tags.map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="accommodation_top_right">
                        <div className="accommodation_top_right_host">
                            <span className="accommodation_top_right_host_name">{accommodation.host.name}</span>
                            <UserPicture picture={accommodation.host.picture} name={accommodation.host.name} />
                        </div>
                        <div className="accommodation_top_right_stars">
                            <Star rating={accommodation.rating} />
                        </div>
                    </div>
                </div>
                <div className="accommodation_bot">
                    <Dropdown title="Description" customClassName="accommodation_bot_dropdown">
                        <p className="accommodation_bot_dropdown_description">{accommodation.description}</p>
                    </Dropdown>
                    <Dropdown title="Équipements" customClassName="accommodation_bot_dropdown">
                        <ul className="accommodation_bot_dropdown_equipments">
                            {accommodation.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Accommodation;
