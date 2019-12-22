import React from "react";
import {Menu, CreateUserProfileForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class CreateUser extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Register Your Account</h2>
        <CreateUserProfileForm />
        <Link to = "/">Go Home </Link>
      </>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
