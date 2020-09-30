import React from "react";
import "./Collections-Overview.scss";

import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...othercollections }) => (
        <CollectionPreview key={id} {...othercollections} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
