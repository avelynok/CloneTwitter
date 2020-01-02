import React from "react";
import {
  NavMenu,
  MessageList,
  SearchBar,
  TrendingNewsFeed,
  Grid
} from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Grid columns="three" divided>
          <Grid.Column width={3}>
            <NavMenu isAuthenticated={this.props.isAuthenticated} />
          </Grid.Column>

          <Grid.Column width={9}>
            <MessageList />
          </Grid.Column>

          <Grid.Column width={4}>
            <SearchBar />
            <TrendingNewsFeed />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
