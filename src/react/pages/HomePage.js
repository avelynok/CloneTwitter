import React from "react";
import {
  HomePageFeed,
  Grid,
  TrendingNewsFeed,
} from "../components";
import { userIsAuthenticated } from "../HOCs";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Grid columns="three" divided>
          <Grid.Column width={3}>
        
          </Grid.Column>

          <Grid.Column width={9}>
            <HomePageFeed/>
          </Grid.Column>

          <Grid.Column width={4}>
        
            <TrendingNewsFeed />
          
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(HomePage);