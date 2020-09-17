import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import SignInSignOut from "./Pages/SignIn-SignOut/SignIn-SignOut";
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/Shop/ShopPage";
import { auth } from "./Firebase/Firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      curentUser: null,
    };
  }

  unsubsccribeFromAuth = null;

  componentDidMount() {
    this.unsubsccribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ curentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubsccribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.curentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
