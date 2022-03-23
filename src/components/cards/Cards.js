import React from "react";
import { data } from "../../data/data.js";

import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      {data.map((d) => {
        const { id, title, desc: description, image } = d;
        return (
          <div className="card" key={id}>
            <h2>{title.toUpperCase()}</h2>
            <div className="card-image__container">
              <img src={image} alt="city-foto" />
              <div className="card-image__overlay">
                <h4>{description}</h4>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Cards;
