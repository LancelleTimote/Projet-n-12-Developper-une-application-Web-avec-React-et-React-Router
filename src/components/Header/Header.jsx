import "./Header.scss";
import Logo from "../../assets/images/logo.svg"
import HeaderNav from "../HeaderNav/HeaderNav"

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo de l'agence Kasa" />
      <HeaderNav />
    </header>
  );
}

export default Header;