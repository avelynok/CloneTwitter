import React, { Component} from 'react'


class CreateUserProfileForm extends Component {
    render(){
        return (
            <form>
             <label htmlFor="username">Username</label>
            <input type = "text"/>
            <label htmlFor="displayName">Display Name</label>
            <input type = "text"/>
            
            <label htmlFor="password">Password</label>
            <input type = "password"/>
            <button type="submit">
            Register Your Account
          </button>
            </form>
        )
    }

}
export default CreateUserProfileForm ;