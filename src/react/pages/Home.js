import React from "react";
import { LoginForm, Card, GoogleLogin } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Card id="Page">
          <LoginForm />

          <GoogleLogin />
        </Card>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
