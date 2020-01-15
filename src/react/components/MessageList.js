import React, { Component } from "react";
import { Card, Image, DeleteMessageButton, Container } from "../components";
import "./MessageList.css";
import { withAsyncAction, connect } from "../HOCs";
import ToggleLikeButton from "./ToggleLikeButton";


class MessageList extends Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getMessages(this.props.username);
    }
  }
  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <Card.Group key={message.id} >
            <Card.Content className="conversation-list-item">
              <Image
             
                className="conversation-photo"
                // src={
                //  this.props.user.user.pictureLocation
                //     ? "https://kwitter-api.herokuapp.com" + this.props.user.user.pictureLocation
                //     : "http://simpleicon.com/wp-content/uploads/user1.svg"
                // }
              />
              <Container className="conversation-info">
                <Card.Header className="conversation-title">
                  {message.username}
                </Card.Header>
                <Card.Description className="conversation-snippet">
                  {message.text}
                </Card.Description>
                <ToggleLikeButton />
              </Container>
              <DeleteMessageButton />
            </Card.Content>
          </Card.Group>
        );
      })
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.getUser.result
  }
}
export default connect(mapStateToProps)(withAsyncAction("messages", "getMessages")(MessageList));



