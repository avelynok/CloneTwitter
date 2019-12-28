import React from "react";
import {
  Menu,
  CreateUserProfilePic,
  DeleteUserProfile,
  TrendingNewsFeed,
  GetUser,
  Link,
  MessageList,
  Grid
} from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Home</h2>
        <Grid>
          <Grid.Column width = {5}>
            <GetUser />
          </Grid.Column>
          <Grid.Column width = {5}>
            <MessageList />
          </Grid.Column>
          <Grid.Column width = {6}>
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
