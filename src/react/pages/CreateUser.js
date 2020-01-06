import React from "react";
import { NavMenu, CreateUserProfileForm, Link, Card } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./CreateUser.css"
class CreateUser extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Card id = 'createUser'>
        <NavMenu />

        <CreateUserProfileForm  />
        <Link to="/">Return Home </Link>
        </Card>

      </React.Fragment>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
