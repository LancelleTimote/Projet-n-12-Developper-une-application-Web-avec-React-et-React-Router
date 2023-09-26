import FooterLogo from "../../assets/images/footer_logo.svg";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer_logo" src={FooterLogo} alt="Logo de l'agence Kasa" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
