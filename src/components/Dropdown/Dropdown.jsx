import "./Dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Dropdown({ title, children, customClassName }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <section className={`dropdown ${customClassName}`}>
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
