import React, { useState } from "react";
import "./Carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Carousel({ picture }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % picture.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + picture.length) % picture.length);
    };

    return (
        <div className="carousel">
            <img className="carousel_image" src={picture[currentIndex]} alt="" />

            <button className="carousel_button_left" onClick={goToPrevious}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className="carousel_counter">
                {currentIndex + 1}/{picture.length}
            </span>
            <button className="carousel_button_right" onClick={goToNext}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Carousel;
