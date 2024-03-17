import React from "react";
import { BACKEND_URL } from "../helper";
import { Link } from "react-router-dom";

const Card = ({id,name,price,description,img}) => {
  return (
    
      <Link className="pcard" to={`/product/${id}`}>
        <div className="card">
          <div className="card-image">
            <img className="cimg" src={ `${BACKEND_URL+img}`} alt={name} />
          </div>
          <div className="card-content black-text">
            <span className="card-title">{name}</span>
            <p className="truncate">
              {description}
            </p>
            <h6>${price}</h6>
          </div>
          
        </div>
        </Link>
  );
};

export default Card;
