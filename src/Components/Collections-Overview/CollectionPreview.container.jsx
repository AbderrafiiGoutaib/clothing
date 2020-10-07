import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./Collections-Overview";
import WithSpiner from "../with-spiner/with-spiner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const collectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpiner
)(CollectionsOverview);
export default collectionsOverviewContainer;
