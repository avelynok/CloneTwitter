import React from "react";
import {
  Menu,
  CreateUserProfilePic,
  DeleteUserProfile,
  TrendingNewsFeed,
  GetUser,
  Link,
  MessageList,
  Grid,
  WhoToFollow,
  ProfileNewsFeed
} from "../components";
import { userIsAuthenticated } from "../HOCs";


class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Home</h2>
        <Grid columns="three" divided>
          <Grid.Column width = {4}>
            <GetUser className = 'ui user'/>
          </Grid.Column>
          <Grid.Column width = {8}>
            <ProfileNewsFeed/>
            <MessageList />
          </Grid.Column>
          <Grid.Column width = {4}>
            <WhoToFollow/>
            <TrendingNewsFeed />
          </Grid.Column>
        </Grid>

        <CreateUserProfilePic /> 
        <DeleteUserProfile /> 
        {/* ^^This will be a button that removes a profile */}
        <Link to="/home"> Go Home</Link>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
