import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpiner from "../../Components/with-spiner/with-spiner.component";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpiner
)(CollectionPage);

export default CollectionPageContainer;
