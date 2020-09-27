import React from "react";
import "./Cart-dropdown.scss";
import CustomButton from "../Custom-button/Custom-button";
import CartItem from "../CartItem/CartItem";
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Checkout </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
