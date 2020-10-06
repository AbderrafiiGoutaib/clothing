import React from "react";
import { connect } from "react-redux";
import CartIcon from "../Card-icon/Card-icon";
import CartDropdown from "../Cart-dropdown/Cart-dropdown";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  HeaderContainer,
  LogoContainer,
  Option,
  OptionsContainer,
} from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
 // console.log("mucurrent user" + currentUser);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <Option to="/shop">SHOP</Option>
        <Option to="/shop">CONTACT</Option>
        {currentUser ? (
          <OptionsContainer onClick={() => auth.signOut()}>
            SIGN OUT / {currentUser.displayName}
          </OptionsContainer>
        ) : (
          <Option to="/signin">SIGN IN</Option>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStateToPeops = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
/* const mapStateToPeops = (state) => ({
  currentUser:selectCurrentUser(state)
  hidden:selectCartHidden(state)
}); */

export default connect(mapStateToPeops)(Header);
