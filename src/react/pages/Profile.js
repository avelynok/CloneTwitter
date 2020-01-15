import React from "react";
import {
  NavMenu,
  DeleteUserProfile,
  TrendingNewsFeed,
  GetUser,
  Grid,
  WhoToFollow,
  MessageList,
  SearchBar,
  Header,
  Segment
} from "../components";
import { userIsAuthenticated } from "../HOCs";


class Profile extends React.Component {
  render() {
    return (
      <>
        <Grid columns="three" divided>
          <Grid.Column width={3}>
            <NavMenu isAuthenticated={this.props.isAuthenticated} />
          </Grid.Column>
          <Grid.Column width={9}>
            <Header as="h2" style={{ margin: "10px 0 20px 17px" }}>
              {this.props.match.params.username}
              {this.props.username === this.props.loggedInUsername && <DeleteUserProfile username={this.props.username}/>}
            </Header>
            <Segment style={{ width: "100%" }}>
              <GetUser
                className="ui user"
                username={this.props.match.params.username}
              />
              <MessageList username={this.props.match.params.username} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <SearchBar />
            <WhoToFollow />
            <TrendingNewsFeed />
          </Grid.Column>
        </Grid>

        
       
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
