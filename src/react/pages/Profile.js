import React from "react";
import { Menu, CreateUserProfilePic, DeleteUserProfile,  GetUser, Link, } from "../components";
import { userIsAuthenticated } from "../HOCs";


class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <GetUser/>
        
        
        <CreateUserProfilePic/>
        <DeleteUserProfile/>
      
         <Link to="/home" > Go Home</Link>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
