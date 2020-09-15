import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.component.jsx";
import ShopPage from "./Pages/Shop/ShopPage.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
