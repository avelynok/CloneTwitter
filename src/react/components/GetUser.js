import React, { Component } from "react";
import { Card, Image, Container } from "../components";
import './GetUser.css'

const fakeUser = {
  pictureLocation: null,
  username: "Tiffany Mclean",
  displayName: "tiffanymclean",
  about: "This is where i tell you all about my story and where i come from",
  googleId: null,
  createdAt: "2019-12-22T02:08:22.457Z",
  updatedAt: "2019-12-22T02:08:22.457Z"
};
class GetUser extends Component {
  render() {
    return (
      <Card style={{ width: "100%", margin: "0",}}>
         <Container id='background' style={{ height:"200px", width: "100%",  }}>
        <Card.Content>
        <Container textAlign='center' style={{ width: "100%", marginTop: "25px",}}><Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='tiny' circular /></Container>
        <Container textAlign='center' >
    
          <Card.Header style={{color:"white", fontSize:'19px', textShadow: '5px 6px 10px black'}}>     {fakeUser.username }</Card.Header>
          <Card.Meta>
            <span className="displayName" style={{color:"whitesmoke", fontSize:'14px', textShadow: '5px 6px 10px black'}}>@{fakeUser.displayName}</span>
          </Card.Meta>
          <Card.Description style={{color:"white", fontSize:'16px', textShadow: '5px 6px 10px black'}}>{fakeUser.about}</Card.Description>
          </Container>
        </Card.Content>
        </Container>
        
        <Card.Content extra>
          <p>Created: {new Date(fakeUser.createdAt).toDateString()}</p>
          <p>Last Update: {new Date(fakeUser.updatedAt).toDateString()}</p>
        </Card.Content>
        
      </Card>
    );
   
  }
}
export default GetUser;
