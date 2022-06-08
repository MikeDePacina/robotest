import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-green-300 shadow-lg duration-75 transition-transform  inline-block p-4 m-4 text-center rounded 	 ">
      <img alt="loona" src={`https://robohash.org/${id}.png?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
