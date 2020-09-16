import React, { Component } from "react";
import "./Sign-in.scss";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/Custom-button/Custom-button";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passsword: "",
    };
  }

  HandleSubmit = (event) => {
    event.prentDefault();

    this.setState({ email: "", passsword: "" });
  };
  HandleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I ALREADY HAVE AN ACCOUNT</h2>
        <span>Sign in with your email and passsword</span>
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
            value={this.state.passsword}
            handelChange={this.HandleChange}
            required
          />
          <CustomButton type="submit">SignIn</CustomButton>
        </form>
      </div>
    );
  }
}
