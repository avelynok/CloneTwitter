import React from "react";
import { Menu, UpdateProfile } from "../components";
import { userIsAuthenticated } from "../HOCs";

class UpdateUser extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <UpdateProfile />
      </>
    );
  }
}

export default userIsAuthenticated(UpdateUser);
