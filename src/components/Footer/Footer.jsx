import FooterLogo from "../../assets/images/logo_footer.svg";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer_logo" src={FooterLogo} alt="Logo de l'agence Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
