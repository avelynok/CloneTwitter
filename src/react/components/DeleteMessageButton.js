import React, { Component} from 'react'
import { Button } from "../components";

class DeleteMessageButton extends Component {
    render() {
        return <Button icon="x" floated="top right" size="mini" />;
      }

}
export default DeleteMessageButton;