import React from "react";
import "./CollectionPreview.scss";

import CollectionItem from "components/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...rest }) => {
            // return <div key={item.id}>{item.name}</div>;
            return <CollectionItem key={id} {...rest} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
