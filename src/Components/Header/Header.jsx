import React from "react";
import "./Header.scss";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase.utils";

const Header = ({ currentUser }) => {
  console.log("mucurrent user" + currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT / {currentUser.displayName}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToPeops = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToPeops)(Header);
