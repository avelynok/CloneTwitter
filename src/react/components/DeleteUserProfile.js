import React, { Component } from 'react'
import { Button } from "../components"
import {withAsyncAction, connect} from "../HOCs"


class DeleteUserProfile extends Component {
    handleDeleteUser = event => {
        const confirms = window.confirm("Are you sure want to delete your profile?")
        if (confirms) {
            this.props.deleteUser()
        }
    }
    render(){
        return (
            <Button onClick={this.handleDeleteUser}>Delete Profile</Button>)
    }

}

const mapStateToProps = state => {
    return {
        loggedInUsername: state.auth.login.result.username
    }
}
export default connect(mapStateToProps) (withAsyncAction ("users", "deleteUser")(DeleteUserProfile));