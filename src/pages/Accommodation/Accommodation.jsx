import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import realEstateData from "../../datas/accommodation.json";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import UserPicture from "../../components/UserPicture/UserPicture";
import "./Accommodation.scss";

function Accommodation() {
    const { id } = useParams();
    const accommodation = realEstateData.find((item) => item.id === id);

    return (
        <div>
            <Header />
            {accommodation && <Carousel picture={accommodation.pictures} />}
            <div className="accommodation">
                <div className="accommodation_top">
                    <div className="accommodation_top_text">
                        <h2 className="accommodation_top_text_title">{accommodation.title}</h2>
                        <span className="accommodation_top_text_location">{accommodation.location}</span>
                    </div>
                    <div className="accommodation_top_host">
                        <span className="accommodation_top_host_name">{accommodation.host.name}</span>
                        <UserPicture picture={accommodation.host.picture} name={accommodation.host.name} />
                    </div>
                </div>
                <div className="accommodation_mid">
                    <div className="accommodation_mid_tags">
                        {accommodation.tags.map((tag) => (
                            <Tag key={tag} tag={tag} />
                        ))}
                    </div>
                    <div>
                        <span>stars</span>
                    </div>
                </div>
                <div className="accommodation_bot">
                    <Dropdown title="Description">
                        <p className="accommodation_bot_description">{accommodation.description}</p>
                    </Dropdown>
                    <Dropdown title="Équipements">
                        <ul className="accommodation_bot_equipments">
                            {accommodation.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
                <div>
                    <span>{accommodation.host.name}</span>
                    <UserPicture picture={accommodation.host.picture} name={accommodation.host.name} />
                </div>
            </div>
            <div>
                {accommodation.tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
            <div>
                <Dropdown title="Description">
                    <p>{accommodation.description}</p>
                </Dropdown>
                <Dropdown title="Équipements">
                    <ul>
                        {accommodation.equipments.map((equipment) => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                </Dropdown>
            </div>
            <Footer />
        </div>
    );
}

export default Accommodation;
