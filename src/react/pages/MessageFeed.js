import React from "react";
import { Menu, MessageList, CreateMessageForm, TrendingNewsFeed,Grid } from "../components";
import { userIsAuthenticated } from "../HOCs";



 class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Message Feed</h2>
        <Grid>
          <Grid.Column width= {6}>
       <MessageList />

          </Grid.Column>
         
          <Grid.Column width = {6}>
          <h2>Trending News</h2>
       <TrendingNewsFeed/>
            
            </Grid.Column>

        </Grid>
       <CreateMessageForm />
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
