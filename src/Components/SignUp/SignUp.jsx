import React from "react";
import "./SignUp.scss";

import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/Custom-button/Custom-button";
import { auth, createUserProfilDocument } from "../../Firebase/Firebase.utils";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = this.state;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don t match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfilDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I already have an account </h2>
        <span> Sign up with your email and password</span>
        <form className="sigh-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="confirm Password"
            onChange={this.handleChange}
            required
          />
          <CustomButton type="Submit"> Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
