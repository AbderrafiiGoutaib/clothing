import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import SignInSignOut from "./Pages/SignIn-SignOut/SignIn-SignOut";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/Shop/ShopPage";
import { auth, createUserProfilDocument } from "./Firebase/Firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";

class App extends React.Component {
  unsubsccribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubsccribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfilDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      /*  addCollectionToDocument(
        "collections",
        collectionArray.map(({ title, items }) => ({ title, items }))
      ); */

      // function to add our data to fireBase
    });
  }

  componentWillUnmount() {
    this.unsubsccribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkoutPage" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignOut />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionArray: selectCollectionForPreview,
});
const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchProps)(App);
