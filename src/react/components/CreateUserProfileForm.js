import React, { Component } from "react";
import { Form, Button } from "../components";

class CreateUserProfileForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Enter your username" />
        </Form.Field>
        <Form.Field>
          <label>Display Name</label>
          <input placeholder= "Enter the name that you want displayed"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter your password" />
        </Form.Field>
        <Button type="submit">Register Your Account</Button>
      </Form>
    );
  }
}
export default CreateUserProfileForm;
