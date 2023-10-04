import "./UserPicture.scss";

function UserPicture({ picture, name }) {
    const altText = `Photo de ${name}`;
    return <img className="userPicture" src={picture} alt={altText} />;
}

export default UserPicture;
