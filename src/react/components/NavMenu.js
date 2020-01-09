import React from "react";
import { Link } from ".";
import { Sidebar, Segment, Menu, Icon } from ".";
import "./NavMenu.css";
import { withAsyncAction } from "../HOCs";

class NavMenu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        {this.props.isAuthenticated && (
          <div id="NavMenu-links">
            <Sidebar.Pushable as={Segment} id="nav_segment">
              <Sidebar
                style={{ width: "100%", backgroundColor: "#e0e1e2" }}
                as={Menu}
                icon="labeled"
                vertical
                visible
                width="wide"
              >
                <div id="menu">
                  <h1>Kwitter</h1>
                </div>
                <Link to="/homepage">
                  <Menu.Item as="a">
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/profile/:username">
                  {" "}
                  <Menu.Item as="a">
                    <Icon name="user" />
                    Profile
                  </Menu.Item>
                </Link>
                <Link to="/messagefeed">
                  {" "}
                  <Menu.Item as="a">
                    <Icon name="envelope" />
                    Message
                  </Menu.Item>
                </Link>
                <Link to="/" onClick={this.handleLogout}>
                  {" "}
                  <Menu.Item as="a">
                    <Icon name="sign-out" />
                    Logout
                  </Menu.Item>
                </Link>
              </Sidebar>
            </Sidebar.Pushable>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(NavMenu);
