import React, { Component } from "react";
import { Card, Image, Container, Menu,  UploadProfileImage } from "../components";
import { withAsyncAction} from "../HOCs";
import { Spinner } from "../components";
import "./GetUser.css";

class GetUser extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  


  componentDidMount() {
    this.props.getUser(this.props.username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
       this.props.getUser(this.props.username);
    }
  }
  
  render() {

    const { activeItem } = this.state


    if (this.props.result === null) {
      return <Spinner name="circle" color="blue" />;
    }
    const user = this.props.result.user;
    return (
      <Card style={{ width: "100%", marginBottom: "90px" }}>
        <Container id="background" style={{ height: "200px", width: "100%" }}>
          <Card.Content>
            <Container
              textAlign="center"
              style={{ width: "100%", marginTop: "25px" }}
            >
              <Image
                style={{ maxWidth: "20em" }}
                src={
                  user.pictureLocation
                    ? "https://kwitter-api.herokuapp.com" + user.pictureLocation
                    : "http://simpleicon.com/wp-content/uploads/user1.svg"
                }
                size="tiny"
                circular
              />
            </Container>
            <Container textAlign="center">
              <Card.Header
                style={{
                  color: "white",
                  fontSize: "19px",
                  textShadow: "5px 6px 10px black"
                }}
              >
                {" "}
                {user.username}
              </Card.Header>
              <Card.Meta>
                <span
                  className="displayName"
                  style={{
                    color: "whitesmoke",
                    fontSize: "14px",
                    textShadow: "5px 6px 10px black"
                  }}
                >
                  @{user.displayName}
                </span>
              </Card.Meta>
              <Card.Description
                style={{
                  color: "white",
                  fontSize: "16px",
                  textShadow: "5px 6px 10px black"
                }}
              >
                {user.about ? (
                  <p>{user.about}</p>
                ) : (
                  <p style={{ color: "white" }}>
                    Please tell us about yourself
                  </p>
                )}
              </Card.Description>
            </Container>
          </Card.Content>
        </Container>

        <Card.Content extra>
          <p>Created: {new Date(user.createdAt).toDateString()}</p>
          <p>Last Update: {new Date(user.updatedAt).toDateString()}</p>
        </Card.Content>
        <UploadProfileImage username={this.props.username} />

        <Menu inverted  style={{ width: "100%", backgroundColor:"#95b9c7"  }} >
        <Menu.Item
        style={{ width: "33.3%", color:"black" }}
          name='Kweets'
          active={activeItem === 'Kweets'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
         style={{ width: "33.3%", color:"black" }}
          name='Likes'
          active={activeItem === 'Likes'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
         style={{ width: "33.3%", color:"black", margin: "0 auto" }}
          name='Shared'
          active={activeItem === 'Shared'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </Card>
    );
  }
}



// const mapStateToProps = state => {
//   return {
//     loggedInUser: state.auth.login.result.username
//   }
// }
//   loading
//   error
//   result

// mapDispatchToProps
//   getUser
  

export default withAsyncAction("users", "getUser")(GetUser);
