import React from "react";
import CollectionCard from "./CollectionCard";
import "./CollectionCardList.css";

function CollectionCardList({ punkList, onClickHandler }) {
  return (
    <div className="collectionCardList">
      {punkList.map((card) => {
        return (
          <CollectionCard
            key={card.token_id}
            id={card.token_id}
            name={card.name}
            traits={card.traits}
            image={card.image_original_url}
            onClickHandler={onClickHandler}
          />
        );
      })}
    </div>
  );
}

export default CollectionCardList;
