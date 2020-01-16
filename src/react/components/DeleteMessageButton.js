import React, { Component } from "react";
import { Button } from "../components";
import { withAsyncAction, connect} from "../HOCs"

class DeleteMessageButton extends Component {
  handleDeleteMessage = event => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (confirmed) {
      this.props.deleteMessage(this.props.messageId);
    }
  };

  render() {
    return <Button onClick = {this.handleDeleteMessage} icon="x" floated="right" size="mini" />;
  }
}
const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("messages", "deleteMessage")(DeleteMessageButton)
);


