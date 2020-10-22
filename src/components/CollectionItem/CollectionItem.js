import React from "react";
import "./CollectionItem.scss";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <img src={imageUrl} alt="" className="image" />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
