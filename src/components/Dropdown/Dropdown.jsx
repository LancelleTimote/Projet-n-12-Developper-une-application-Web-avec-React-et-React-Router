import "./Dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <section className="dropdown">
            <div className="dropdown_top">
                {title && <h2>{title}</h2>}
                <button className="dropdown_top_button" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </button>
            </div>
            {isOpen && children}
        </section>
    );
}

export default Dropdown;

/* <i class="fa-solid fa-chevron-down"></i>
            <i class="fa-solid fa-chevron-up"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-circle"></i> */
