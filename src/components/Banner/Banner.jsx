import "./Banner.scss";

function Banner({ image, title }) {
    return (
        <section className="banner">
            <img src={image} alt="" />
            {title && <p className="banner_text">{title}</p>}
        </section>
    );
}

export default Banner;
