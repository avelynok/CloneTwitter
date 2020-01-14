
import React, { Component} from 'react'
import { Button, Icon, Label } from "../components"
import { addLikes} from "../../redux/actionCreators"
import {connect, withAsyncAction} from "../HOCs"

class ToggleLikeButton extends Component {
  state = {
    messageID: 0
  }

  handleClick = event => {
    this.props.addLikes(this.state.messageID)
    
  }
    render(){
        return(
          <Button as='div' labelPosition='right'
          onClick = {this.handleClick}>
        <Button color='red'>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic color='red' pointing='left'>
              {/* {this.props.likes.length} */}
              {this.props.addLikes}
        </Label>
        </Button>
    //   {/* return <Button>Add/Remove Like</Button> */}
        )
    }

}

const mapDispatchToProps = {
  addLikes
  // messageID: state.messages.getMessages.result.messages.id
}
// export default connect(null, mapDispatchToProps)(ToggleLikeButton);

export default connect(null, mapDispatchToProps)(
  withAsyncAction("auth", "logout")(ToggleLikeButton)
);
