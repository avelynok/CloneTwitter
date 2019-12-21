import React from "react";
import { LoginForm, Menu, Link, TrendingNewsFeed } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import GoogleLogin from "../components/GoogleLogin";


class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <p>Don't have an account? <Link to="/createuser" > Register Here</Link></p>
        <TrendingNewsFeed/>
        <GoogleLogin/>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
