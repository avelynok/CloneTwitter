import React, { Component } from "react";
import { Button, Container, Icon, Spinner } from "../components";
import { withAsyncAction } from "../HOCs";

import "./CreateMessageForm.css";

class CreateMessageForm extends Component {
  state = {
    messageText: ""
  };

  handleClick = event => {
    event.preventDefault();
    this.props.createMessage(this.state.messageText);
    this.setState({ messageText: "" });
  };
  
  handleChangeMessage = event => {
    this.setState({ messageText: event.target.value });
  };
  render() {
    // const { log } = this.state;
  const { loading, error } = this.props;
    return (
      <>
        {/*Might need to be wrapped in a form tag so we can press enter to submit as well as click */}
        <Container style={{ width: "1000px" }}>
          <h3 style={{ margin: "30px 0 55px 0", textAlign: "center" }}>
            Thread
            <Button.Group
              style={{ border: "none", padding: "0 20px" }}
              basic
              color="white"
              floated="right"
            >
              <Button icon style={{ border: "none", padding: "0 20px" }}>
                <Icon name="phone" />
              </Button>
              <Button icon style={{ border: "none", padding: "0 20px" }}>
                <Icon name="video" />
              </Button>
              <Button icon style={{ border: "none", padding: "0 20px" }}>
                <Icon name="info circle" />
              </Button>
            </Button.Group>
          </h3>
{/* 
          <Comment.Group style={{ width: "100%", padding: "20px" }}> */}
           
            <div className="compose">
              <input
                type="text"
                className="compose-input"
                placeholder="Type a message"
                onChange={this.handleChangeMessage}
                value={this.state.messageText}
              />
            </div>
          {/* </Comment.Group> */}

          <Button
            type="submit"
            onClick={this.handleClick}
            disabled={this.props.loading}
            content="Send"
            labelPosition="left"
            icon="send"
            primary
            style={{ backgroundColor:"#95b9c7"}}
          />
          {loading && <Spinner name="circle" color="white" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
          
        </Container>
      </>
    );
  }
}
export default withAsyncAction("messages","createMessage" ) (CreateMessageForm)