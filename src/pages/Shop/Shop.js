import React from "react";
import "./Shop.scss";

import SHOP_DATA from "./Shop.data";

import CollectionPreview from "components/CollectionPreview";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...rest }) => {
          return <CollectionPreview key={id} {...rest} />;
        })}
      </div>
    );
  }
}

export default Shop;
