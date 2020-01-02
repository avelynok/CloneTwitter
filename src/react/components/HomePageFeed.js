import React, { Component } from "react";
import {
  Feed,
  Icon,
  Link,
  Segment,
  Header,
  Embed,
  Form,
  Button,
  Card,
  Container,
} from "../components";

class HomePageFeed extends Component {
  state = { log: [] };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleClick = () =>
    this.updateLog(
      "Need To set it up to display post ttyped in input box + user profile pic "
    );

  handleKeyPress = e => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      this.updateLog();
    }
  };

  updateLog = message =>
    this.setState(prevState => ({ log: [message, ...prevState.log] }));

    

  render() {
    const { log} = this.state;


    return (
      <>
        <Header as="h2" style={{ margin: "10px 0 20px 0" }}>
          Home
        </Header>
        <Feed>
          <Container
            style={{ height: "150px", width: "100%", "margin-bottom": "100px" }}
          >
            <Card
              style={{
                height: "180px",
                width: "100%",
                padding: "20px",
                "background-color": ""
              }}
            >
              <Form reply>
                <Form.TextArea
                  placeholder="What is going on?"
                  style={{ "font-size": "19px" }}
                />
                <Button.Group
                  basic
                  compact
                  floated="left"
                >
                  <Button icon>
                    <Icon name="microphone" />
                  </Button>
                  <Button icon>
                    <Icon name="image" />
                  </Button>
                  <Button icon>
                    <Icon name="paperclip" />
                  </Button>
                </Button.Group>
                <Button
                  onClick={this.handleClick}
                  onKeyPress={this.handleKeyPress}
                  compact
                  floated="right"
                >
                  Kweet
                </Button>
              </Form>
            </Card>
          </Container>
         

          <Feed.Event>



            <Feed.Label>
              <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User>
                {log.map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Segment basic>
            <Embed id="125292332" source="vimeo" />
          </Segment>

          <Feed.Event>
            <Feed.Label>
              <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Helen Troy</a> added <Link to="#">2 new illustrations</Link>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </a>
                <a>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />1 Like
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
            <Feed.Content>
              <Feed.Summary
                date="2 Days Ago"
                user="Jenny Hess"
                content="add you as a friend"
              />
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />8 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to
                where we'd we started, then starting all over again. Even if we
                don't run extra laps that day, we surely will come back for more
                of the same another day soon.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </a>
                <p>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </p>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />
                  41 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
            <Feed.Label>
              <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Helen Troy</a> added <Link to="#">2 new illustrations</Link>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </a>
                <a>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />1 Like
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
            <Feed.Content>
              <Feed.Summary
                date="2 Days Ago"
                user="Jenny Hess"
                content="add you as a friend"
              />
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />8 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to
                where we'd we started, then starting all over again. Even if we
                don't run extra laps that day, we surely will come back for more
                of the same another day soon.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </a>
                <p>
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </p>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />
                  41 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </>
    );
  }
}

export default HomePageFeed;
