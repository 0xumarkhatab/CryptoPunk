import React from "react";
import "./CollectionCard.css";
import weth from "./assets/weth.png";

function CollectionCard({ image, traits, id, name, onClickHandler }) {
  const clickHandler = (e) => {
    console.log("clicked" + e);
  };

  return (
    <div
      className="collectionCard"
      onClick={() => {
        onClickHandler(id);
      }}
    >
      <img src={image} alt="" />
      <div className="details">
        <div className="name">{name}</div>
        <div className="id">.#{id}</div>
        <div className="priceContainer">
          <img src={weth} alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
