import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from './Components/Header/Header'
import SignInSignOut from './Pages/SignIn-SignOut/SignIn-SignOut'
import HomePage from "./Pages/HomePage/HomePage.component";
import ShopPage from "./Pages/Shop/ShopPage";

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
