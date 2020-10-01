import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const PriceToCent = price * 100;
  const publishableKey =
    "pk_test_51HXI1dDVzjr8wI9XhEMJHOMfnjd8orp2gnWhsupIRbFsw4Yl0lKXxP1axl7CwPZztjSVCXvBgCGP4y65w2jxu7Ob00b7tOSan1";
  const onToken = (token) => {
    console.log(token);
    alert("Successful Payment ");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="crown clothing"
      billingAddress
      shippingAddress
      image=""
      description={`your total is $ ${price}`}
      amount={PriceToCent}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
