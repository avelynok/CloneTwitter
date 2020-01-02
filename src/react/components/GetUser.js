import React, { Component } from "react";
import { Card, } from "../components";

const fakeUser = {
  pictureLocation: null,
  username: "tiffanymclean",
  displayName: "tiffanymclean",
  about: "This is my about info",
  googleId: null,
  createdAt: "2019-12-22T02:08:22.457Z",
  updatedAt: "2019-12-22T02:08:22.457Z"
};
class GetUser extends Component {
  render() {
    return (
      <Card style={{ width: "100%", margin: "0" }}>
        <Card.Content>
          <Card.Header>{fakeUser.username}</Card.Header>
          <Card.Meta>
            <span className="displayName">{fakeUser.displayName}</span>
          </Card.Meta>
          <Card.Description>{fakeUser.about}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Created: {new Date(fakeUser.createdAt).toDateString()}</p>
          <p>Last Update: {new Date(fakeUser.updatedAt).toDateString()}</p>
        </Card.Content>
      </Card>
    );
    // return (
    //     <>
    //     <h3>Username: {fakeUser.username}</h3>
    //     <h4>Display Name: {fakeUser.displayName}</h4>
    //     <p>About Me: {fakeUser.about}</p>
    //     <p>Created: {fakeUser.createdAt}</p>
    //     <p>Last Update: {fakeUser.updatedAt}</p>

    //     </>
    // )
  }
}
export default GetUser;
