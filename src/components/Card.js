import React from "react";

const Card = ({ details }) => {
  return (
    <>
      <div className="image ">
        <img src={details.image} alt="" />
      </div>
      <div className="details">
        <h6>{details.name}</h6>
        <p>{details.role}</p>
        <p>{details.reviews}</p>
      </div>
    </>
  );
};

export default Card;
