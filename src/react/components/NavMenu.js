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
                as={Menu}
                animation="push"
                icon="labeled"
                inverted
                vertical
                visible
                width="thin"
              >
                <Link to="/homepage">
                  Home
                  <Menu.Item as="a">
                    <Icon name="" />
                  </Menu.Item>
                </Link>
                <Link to="/profile/:username">
                  {" "}
                  Profile{" "}
                  <Menu.Item as="a">
                    <Icon name="user" />
                  </Menu.Item>
                </Link>
                <Link to="/messagefeed">
                  {" "}
                  Message
                  <Menu.Item as="a">
                    <Icon name="envelope" />
                  </Menu.Item>
                </Link>
                <Link to="/" onClick={this.handleLogout}>
                  Logout{" "}
                  <Menu.Item as="a">
                    <Icon name="" />
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
