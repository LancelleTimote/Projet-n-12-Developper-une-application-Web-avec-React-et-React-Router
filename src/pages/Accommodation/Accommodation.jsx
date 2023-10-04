import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import immo from "../../datas/accommodation.json";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import UserPicture from "../../components/UserPicture/UserPicture";

function Accommodation() {
    const { id } = useParams();
    const accommodation = immo.find((item) => item.id === id);

    return (
        <div>
            <Header />
            {accommodation && <Carousel picture={accommodation.pictures} />}
            <div>
                <div>
                    <h2>{accommodation.title}</h2>
                    <span>{accommodation.location}</span>
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
