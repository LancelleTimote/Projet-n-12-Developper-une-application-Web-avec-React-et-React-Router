import { NavLink } from "react-router-dom";
import "./HeaderNav.scss";

function HeaderNav() {
    return (
        <nav className="header_nav">
            <ul className="header_nav_list">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "header_nav_list_active" : "header_nav_list_element")}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "header_nav_list_active" : "header_nav_list_element")}>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;
