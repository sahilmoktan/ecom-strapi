import React from "react";
import { BACKEND_URL } from "../helper";

const Card = ({id,name,price,description,img}) => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={ `${BACKEND_URL+img}`} alt={name} />
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p>
              {description}
            </p>
            <h6>{price}</h6>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
