import React from "react";
import { Menu, CreateUserProfilePic, DeleteUserProfile, TrendingNewsFeed, GetUser, Link} from "../components";
import { userIsAuthenticated } from "../HOCs";


class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        
        <CreateUserProfilePic/>
        <DeleteUserProfile/>
        <TrendingNewsFeed/>
        <GetUser/>
         <Link to="/home" > Go Home</Link>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
