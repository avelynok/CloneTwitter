import React, { Component } from "react";
import { List, Card, Segment, Header } from "../components";

class TrendingNewsFeed extends Component {
  render() {
    return (
      <Card style={{ width: "95%"}} >
        <Segment>
          <Header as="h2">Trending Now</Header>
          <List divided relaxed>
            <List.Item>
              <List.Content>
                <List.Header>Snickerdoodle</List.Header>
                An excellent companion
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Poodle</List.Header>A poodle, its pretty basic
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Paulo</List.Header>
                He's also a dog
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Snickerdoodle</List.Header>
                An excellent companion
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Poodle</List.Header>A poodle, its pretty basic
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Paulo</List.Header>
                He's also a dog
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Paulo</List.Header>
                He's also a dog
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Snickerdoodle</List.Header>
                An excellent companion
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Poodle</List.Header>A poodle, its pretty basic
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Card>
    );
  }
}

export default TrendingNewsFeed;