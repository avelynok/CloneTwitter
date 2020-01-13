import React, { Component } from "react";
import { Card, Image, DeleteMessageButton, Container } from "../components";
import "./MessageList.css";
import { withAsyncAction } from "../HOCs";
import ToggleLikeButton from "./ToggleLikeButton";


class MessageList extends Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }
  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <Card.Group>
            <Card.Content className="conversation-list-item">
              <Image
                className="conversation-photo"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />

              <Container className="conversation-info">
                <Card.Header className="conversation-title">
                  {message.username}
                </Card.Header>

                <Card.Description className="conversation-snippet">
                  {message.text}
                </Card.Description>
              </Container>
              <ToggleLikeButton />
              <DeleteMessageButton />
            </Card.Content>
          </Card.Group>
        );
      })
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
