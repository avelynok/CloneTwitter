import React from "react";
import { Menu, TrendingNewsFeed, CreateUserProfileForm, CreateUserProfilePic, DeleteUserProfile} from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <CreateUserProfileForm/>
        <CreateUserProfilePic />
        <DeleteUserProfile/>
        <TrendingNewsFeed />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
