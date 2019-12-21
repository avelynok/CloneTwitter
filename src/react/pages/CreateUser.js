import React from "react";
import {Menu, CreateUserProfileForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class CreateUser extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Register Your Account</h2>
        <CreateUserProfileForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
