import React from "react";
import { BACKEND_URL } from "../helper";

const Card = ({id,name,price,description,img}) => {
  return (
    
      
        <div className="card pcard">
          <div className="card-image">
            <img className="cimg" src={ `${BACKEND_URL+img}`} alt={name} />
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p className="truncate">
              {description}
            </p>
            <h6>${price}</h6>
          </div>
          
        </div>
   
  );
};

export default Card;
