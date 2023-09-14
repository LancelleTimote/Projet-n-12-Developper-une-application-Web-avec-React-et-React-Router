import { Link } from "react-router-dom";

function HeaderNav() {
    return (
        <nav>
            <ul>
                <li><Link to="/Kasa">Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
            </ul>
        </nav>
    );
}

export default HeaderNav;