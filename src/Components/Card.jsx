import React from "react";

const Card = ({nameVal, descriptionVal, placesVal, dateVal, urlVal }) => {
    
  return (
    <div className="card text-center col-12 col-lg-6">
      <div className="card-header">{placesVal}</div>
      <img src={urlVal} className="card-img-top" alt={nameVal} />
      <div className="card-body">
        <h5 className="card-title">{nameVal}</h5>
        <p className="card-text">{descriptionVal}</p>
      </div>
      <div className="card-footer text-muted">{dateVal}</div>
    </div>
  );
};

export default Card;
