import React from "react";
import "./Cart-dropdown.scss";
import CustomButton from "../Custom-button/Custom-button";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> your box is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkoutPage");
          dispatch(toggleCartHidden());
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
