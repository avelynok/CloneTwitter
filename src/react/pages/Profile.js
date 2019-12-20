import React from "react";
import { Menu,CreateUserProfileForm, CreateUserProfilePic, DeleteUserProfile } from "../components";
import { userIsAuthenticated } from "../HOCs";
//trying to merge again
class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <CreateUserProfileForm/>
        <CreateUserProfilePic/>
        <DeleteUserProfile/>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
