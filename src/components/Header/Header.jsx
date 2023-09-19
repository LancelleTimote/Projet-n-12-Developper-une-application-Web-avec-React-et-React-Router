import Logo from "../../assets/images/logo.svg";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img className="header_logo" src={Logo} alt="Logo de l'agence Kasa" />
            <HeaderNav />
        </header>
    );
}

export default Header;
