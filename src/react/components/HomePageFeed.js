import React, { Component } from "react";
import {
  Feed,
  Icon,
  Header,
  Form,
  Button,
  Card,
  Container
} from "../components";
import { connect } from "../HOCs";
import { createMessage } from "../../redux/";

class HomePageFeed extends Component {
  state = {
    messageText: ""
  };

  handleClick = event => {
    this.props.createMessage(this.state.messageText);
    this.setState({ messageText: "" });
  };

  handleChangeMessage = event => {
    this.setState({ messageText: event.target.value });
  };

  render() {
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
                  value={this.state.messageText}
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
                  type="submit"
                  onClick={this.handleClick}
                  // onKeyPress={this.handleKeyPress}
                  compact
                  floated="right"
                  style={{backgroundColor:"#95b9c7"  }}
                >
                  Kweet
                </Button>
              </Form>
            </Card>
          </Container>
        </Feed>
      </>
    );
  }
}

const mapDispatchToProps = {
  createMessage
};

export default connect(null, mapDispatchToProps)(HomePageFeed);
