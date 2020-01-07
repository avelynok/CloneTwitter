import React, { Component} from 'react'
import { Button, Comment, Container, Icon } from "../components";
import "./CreateMessageForm.css";
class CreateMessageForm extends Component {
    state = { log: [] };

    handleClick = () =>
      this.updateLog(
        "Need To set it up to display message typed in input box + user profile pic + date"
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
      const { log } = this.state;
  
      return (
        <>
          <Container style={{ width: "1000px" }}>
            <h3 style={{ margin: "30px 0 55px 0", textAlign: "center" }}>
              Thread
              <Button.Group
               style={{ border: 'none', padding: '0 20px'}}
                basic
                color="white"
                floated="right"
              >
                <Button icon  style={{ border: 'none', padding: '0 20px'}}>
                  <Icon name="phone" />
                </Button>
                <Button icon  style={{ border: 'none', padding: '0 20px'}}>
                  <Icon name="video" />
                </Button>
                <Button icon  style={{ border: 'none', padding: '0 20px'}}>
                  <Icon name="info circle" />
                </Button>
              </Button.Group>
            </h3>
  
            <Comment.Group style={{ width: "100%", padding:'20px' }}>
              <div>
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Matt</Comment.Author>
                    <Comment.Metadata>
                      <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action></Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
  
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                      <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>
                        This has been very useful for my research. Thanks as well!
                      </p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action></Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
  
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                      <div>Just now</div>
                    </Comment.Metadata>
                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action></Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
  
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Joe Henderson</Comment.Author>
                    <Comment.Metadata>
                      <div>5 days ago</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      Dude, this is awesome. Thanks so much
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action></Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
  
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                      <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>
                        This has been very useful for my research. Thanks as well!
                      </p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action></Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
  
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                      <div>Just now</div>
                    </Comment.Metadata>
                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action></Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
                {log.map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </div>
              <div className="compose">
                <input
                  type="text"
                  className="compose-input"
                  placeholder="Type a message"
                />
              </div>
            </Comment.Group>
  
            <Button
              onClick={this.handleClick}
              onKeyPress={this.handleKeyPress}
              content="Send"
              labelPosition="left"
              icon="send"
              primary
              style={{ "background-color": "#111" }}
            />
          </Container>
        </>
      );
    }
  }
  
  
export default CreateMessageForm;