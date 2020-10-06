import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spiner.styles";

const WithSpiner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return spinner;
};

export default WithSpiner;
