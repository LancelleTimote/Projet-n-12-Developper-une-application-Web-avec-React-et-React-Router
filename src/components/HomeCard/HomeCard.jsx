import { Link } from "react-router-dom";
import "./HomeCard.scss";

function HomeCard({ id, title, cover }) {
    return (
        <Link className="homecard" to={`/accommodation/${id}`}>
            <img className="homecard_image" src={cover} alt={title}></img>
            <h2 className="homecard_title">{title}</h2>
        </Link>
    );
}

export default HomeCard;
