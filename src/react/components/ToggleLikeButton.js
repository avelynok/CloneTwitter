
import React, { Component} from 'react'
import {Button, Icon, Label} from "../components"

class ToggleLikeButton extends Component {
    render(){
        return(
        <Button as='div' labelPosition='right'>
        <Button color='red'>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic color='red' pointing='left'>
          {this.props.likes.length}
        </Label>
        </Button>
    //   {/* return <Button>Add/Remove Like</Button> */}
        )
    }

}
export default ToggleLikeButton;