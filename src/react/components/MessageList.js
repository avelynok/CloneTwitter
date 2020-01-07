import React, { Component } from "react";
import {
  Card,
  Image,
  DeleteMessageButton,
  Container 
} from "../components";
import './MessageList.css';


const fakeMessages = [
  {
    id: 2127,
    text: "adgasdgasdgasdgasdgsadg",
    username: "slenderdan",
    createdAt: "2019-12-20T21:32:05.707Z",
    likes: [
      {
        id: 3156,
        username: "slenderdan",
        messageId: 2127,
        createdAt: "2019-12-20T21:32:09.184Z"
      }
    ]
  },
  {
    id: 2126,
    text: "as",
    username: "slenderdan",
    createdAt: "2019-12-20T21:31:53.665Z",
    likes: []
  },
  {
    id: 2124,
    text: "yo",
    username: "teej",
    createdAt: "2019-12-20T17:01:28.508Z",
    likes: []
  },
  {
    id: 2121,
    text: "Hello!",
    username: "auser",
    createdAt: "2019-12-20T01:31:21.566Z",
    likes: [
      {
        id: 3153,
        username: "teeej",
        messageId: 2121,
        createdAt: "2019-12-20T19:43:29.098Z"
      }
    ]
  },
  {
    id: 2120,
    text: "hello",
    username: "taylorhurt",
    createdAt: "2019-12-19T18:49:38.169Z",
    likes: []
  }
];

class MessageList extends Component {
  render() {
    return fakeMessages.map(message => {
      return (
        <Card.Group >
        
            <Card.Content className="conversation-list-item"> 
              <Image
              className="conversation-photo"
               
             
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                
              />
             
              <Container className="conversation-info">
                
              <Card.Header className="conversation-title">{message.username}
            
              </Card.Header>

              <Card.Description className="conversation-snippet">
                {message.text}
              
              </Card.Description>

           
              </Container>
              <DeleteMessageButton/>
            </Card.Content>
       
        </Card.Group>
      );
    });
  }
}

export default MessageList;
