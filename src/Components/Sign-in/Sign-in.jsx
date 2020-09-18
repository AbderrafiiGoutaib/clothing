import React, { Component } from "react";
import "./Sign-in.scss";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/Custom-button/Custom-button";
import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  HandleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  HandleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I ALREADY HAVE AN ACCOUNT</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.HandleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handelChange={this.HandleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handelChange={this.HandleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SignIn</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SignIn with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
