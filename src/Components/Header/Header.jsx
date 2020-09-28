import React from "react";
import "./Header.scss";
import { connect } from "react-redux";
import CartIcon from "../Card-icon/Card-icon";
import CartDropdown from "../Cart-dropdown/Cart-dropdown";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToPeops = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});
/* const mapStateToPeops = (state) => ({
  currentUser:selectCurrentUser(state)
  hidden:selectCartHidden(state)
}); */

export default connect(mapStateToPeops)(Header);
