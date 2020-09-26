import React from "react";
import "./Custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn,invented, ...otherProps }) => {
  return (
    <button
      className={`${invented ? 'invented' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
