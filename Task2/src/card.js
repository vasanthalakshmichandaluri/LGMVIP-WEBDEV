import "./card.css";

const Card = ({ userid, fname, lname, email, image }) => {
  return (
    <div className="card">
      <img className="card-image-top" src={image} alt="user card" />
      <div className="card-body">
        <h5 className="title">{fname + " " + lname}</h5>
        <p className="emailid">{email}</p>
        <h6 className="user-id">{userid}</h6>
      </div>
    </div>
  );
};

export default Card;
