import React from "react";
import { withAsyncAction, connect } from "../HOCs";

class UploadProfileImage extends React.Component {
  handleUploadUserPicture = event => {
    console.log("upload activated");
    // event.target equal to <form>
    event.preventDefault();
    this.props.uploadProfileImage(event.target);
  };

  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <form onSubmit={this.handleUploadUserPicture}>
          <input type="file" name="picture" />
          <input type="submit" value="Upload Picture" />
        </form>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "uploadProfileImage")(UploadProfileImage)
);
