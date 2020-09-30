import React from "react";
import CollectionsOverview from "../../Components/Collections-Overview/Collections-Overview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
