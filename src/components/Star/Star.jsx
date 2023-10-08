import "./Star.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star({ rating }) {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star_full" />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star_full star_empty" />);
        }
    }
    return <div className="star-rating">{stars}</div>;
}

export default Star;
