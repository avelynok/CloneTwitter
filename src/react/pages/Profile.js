import React from "react";
import { Menu, CreateUserProfilePic, DeleteUserProfile, TrendingNewsFeed, GetUser, UpdateProfile } from "../components";
import { userIsAuthenticated } from "../HOCs";


class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UpdateProfile />
        <CreateUserProfilePic/>
        <DeleteUserProfile/>
        <TrendingNewsFeed/>
        <GetUser/>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
