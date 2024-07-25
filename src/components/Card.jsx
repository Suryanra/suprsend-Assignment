// Card.js
import React from "react";

const Card = ({ name, number, email, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <p>Phone: {number}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Card;
