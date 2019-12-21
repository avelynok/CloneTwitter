import React from "react";
import { LoginForm, Menu, TrendingNewsFeed } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import GoogleLogin from "../components/GoogleLogin";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        {/* <p>Don't have an acoount? Regiser Here</p> */}
        <TrendingNewsFeed/>
        <GoogleLogin/>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
