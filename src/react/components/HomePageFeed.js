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
import { connect } from "../HOCs"
import {createMessage} from "../../redux/"

class HomePageFeed extends Component {
  state = {
    messageText: ""
  };

  handleClick = event => {
    this.props.createMessage(this.state.messageText);
    this.setState({ messageText: "" }); 
  };

  // handleKeyPress = e => {
  //   if (e.charCode === 32 || e.charCode === 13) {
  //     // Prevent the default action to stop scrolling when space is pressed
  //     e.preventDefault();
  //     this.updateLog();
  //   }
  // };

  handleChangeMessage = event => {
    this.setState({ messageText: event.target.value });
  };

  // updateLog = message =>
  //   this.setState(prevState => ({ log: [message, ...prevState.log] }));

  render() {
    // const { log } = this.state;
    
    return (
      <>
        <Header as="h2" style={{ margin: "10px 0 20px 0" }}>
          Home
        </Header>
        <Feed>
          <Container
            style={{ height: "150px", width: "100%", marginBottom: "100px" }}
          >
            <Card
              style={{
                height: "180px",
                width: "100%",
                padding: "20px",
                backgroundColor: ""
              }}
            >
              <Form reply>
                <Form.TextArea
                  placeholder="What is going on?"
                  style={{ fontSize: "19px" }}
                  onChange={this.handleChangeMessage}
                  value = {this.state.messageText}
                />
                <Button.Group basic compact floated="left">
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
                  type = "submit"
                  onClick={this.handleClick}
                  // onKeyPress={this.handleKeyPress}
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
              <img
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                alt=""
              />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User>
                {/* {log.map((e, i) => (
                  <p key={i}>{e}</p>
                ))} */}
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
              <img
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                alt=""
              />
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
            <Feed.Label
              image="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
              alt=""
            />
            <Feed.Content>
              <Feed.Summary>
                <a href="#!">Helen Troy</a> added{" "}
                <Link to="#">2 new illustrations</Link>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a href="#!">
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
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
                <a href="#!">Joe Henderson</a> posted on his page
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
                <a href="#!">Justen Kitsune</a> added{" "}
                <a href="#!">2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a href="#!">
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
                <p>
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
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
              <img
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                alt=""
              />
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
                <a href="#!">Helen Troy</a> added{" "}
                <Link to="#">2 new illustrations</Link>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a href="#!">
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
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
                <a href="#!">Joe Henderson</a> posted on his page
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
                <a href="#!">Justen Kitsune</a> added{" "}
                <a href="#!">2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a href="#!">
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
                </a>
                <p>
                  <img
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    alt=""
                  />
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
  
const mapDispatchToProps = {
    createMessage
  }
  
  
export default connect(null, mapDispatchToProps)(HomePageFeed);