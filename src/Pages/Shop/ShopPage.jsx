import CollectionsOverview from "../../Components/Collections-Overview/Collections-Overview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching,selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";
import WithSpiner from "../../Components/with-spiner/with-spiner.component";

import React, { Component } from "react";

const CollectionsOverviewWithSpinner = WithSpiner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpiner(CollectionPage);
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
    const { match, isCollectionFetching ,isCollectionsLoaded} = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded : selectIsCollectionsLoaded
});
const mapDispatchToProps = (dispach) => ({
  fetchCollectionsStartAsync: () => dispach(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
