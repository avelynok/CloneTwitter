import React from "react";
import { CreateUserProfileForm, Link, Card } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./CreateUser.css"
class CreateUser extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Card id = 'createUser'>
     

        <CreateUserProfileForm  />
        <Link to="/">Return Home </Link>
        </Card>

      </React.Fragment>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
