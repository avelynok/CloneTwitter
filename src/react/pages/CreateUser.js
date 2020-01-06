import React from "react";
import { NavMenu, CreateUserProfileForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class CreateUser extends React.Component {
  render() {
    return (
      <>
        <NavMenu />
        <CreateUserProfileForm />
        <Link to="/">Return Home </Link>
      </>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
