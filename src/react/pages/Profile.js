import React from "react";
import {
  NavMenu,
  CreateUserProfilePic,
  DeleteUserProfile,
  TrendingNewsFeed,
  GetUser,
  Link,
  MessageList,
  Grid,
  WhoToFollow,
  ProfileNewsFeed,
  SearchBar
} from "../components";
import { userIsAuthenticated } from "../HOCs";


class Profile extends React.Component {
  render() {
    return (
      <>
        <NavMenu isAuthenticated={this.props.isAuthenticated} />
        <h2>Home</h2>
        <Grid columns="three" divided>
          <Grid.Column width = {1}>
           
          </Grid.Column>
          <Grid.Column width = {8}>
          <GetUser className = 'ui user'/>
            <ProfileNewsFeed/>
            <MessageList />
          </Grid.Column>
          <Grid.Column width = {4}>
            <SearchBar/>
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
