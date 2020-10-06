import React from "react";
import { CustomButtonContainer } from "./Custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};
export default CustomButton;
