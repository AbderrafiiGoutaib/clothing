import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";

import React, { Component } from "react";
import collectionsOverviewContainer from "../../Components/Collections-Overview/CollectionPreview.container";
import CollectionPageContainer from "../CollectionPage/CollectionPage.container";

class ShopPage extends Component {
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    /*  collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionMap);
      this.setState({ loading: false });
    }); */
    // Promise pathern
    /* collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionMap);
      this.setState({ loading: false });
    }) */
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={collectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispach) => ({
  fetchCollectionsStartAsync: () => dispach(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
