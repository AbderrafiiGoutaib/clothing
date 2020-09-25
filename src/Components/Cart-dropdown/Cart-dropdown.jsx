import React from "react";
import "./Cart-dropdown.scss";
import CustomButton from "../Custom-button/Custom-button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton>Checkout </CustomButton>
    </div>
  );
};

export default CartDropdown;
