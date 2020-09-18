import React from "react";
import "./SignIn-SignOut.scss";

import SignIn from "../../Components/Sign-in/Sign-in";
import SignUp from "../../Components/SignUp/SignUp";

const SignInSignOut = () => (
  <div className="sign-in-and-sign-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignOut;
