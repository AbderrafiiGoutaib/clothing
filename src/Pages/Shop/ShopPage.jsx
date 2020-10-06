import CollectionsOverview from "../../Components/Collections-Overview/Collections-Overview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions.js";
import WithSpiner from "../../Components/with-spiner/with-spiner.component";

import React, { Component } from "react";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../Firebase/Firebase.utils";

const CollectionsOverviewWithSpinner = WithSpiner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpiner(CollectionPage);
class ShopPage extends Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
   /*  collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionMap);
      this.setState({ loading: false });
    }); */

    

    // Promise pathern 
    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionMap);
      this.setState({ loading: false });
    })
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispach) => ({
  updateCollections: (collectionMap) =>
    dispach(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
