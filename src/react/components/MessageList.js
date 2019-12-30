import React, { Component } from "react";
import {Card, ToggleLikeButton, DeleteMessageButton} from "../components"



const fakeMessages = [
  {
    id: 2114,
    text: "ping",
    username: "And1drew",
    createdAt: "2019-12-12T20:08:39.281Z",
    likes: [
      {
        id: 3140,
        username: "Julia3434",
        messageId: 2114,
        createdAt: "2019-12-12T20:54:47.629Z"
      },
      {
        id: 3141,
        username: "And1drew",
        messageId: 2114,
        createdAt: "2019-12-12T21:33:38.977Z"
      }
    ]
  },
  {
    id: 2112,
    text: "test test",
    username: "slenderdan",
    createdAt: "2019-12-12T14:48:43.168Z",
    likes: []
  },
  {
    id: 2111,
    text: "test test",
    username: "slenderdan",
    createdAt: "2019-12-12T14:48:41.196Z",
    likes: [
      {
        id: 3130,
        username: "slenderdan",
        messageId: 2111,
        createdAt: "2019-12-12T17:46:23.681Z"
      }
    ]
  }
];
class MessageList extends Component {
  render() {
    return fakeMessages.map(message => {
      return (
       
        <Card >
          <Card.Content header={message.username} />
          <Card.Content description={message.text} />
          <Card.Content extra>
            {/* <Icon name="user" />4 Friends */}
            <p>Created: {new Date(message.createdAt).toDateString()}</p>
            <ToggleLikeButton  likes = {message.likes}/>
           <DeleteMessageButton />
          </Card.Content>
        </Card>
        
        
      );
      
    });
  }
}
export default MessageList;
