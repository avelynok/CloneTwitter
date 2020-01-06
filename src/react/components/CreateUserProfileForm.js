import React, { Component } from "react";
import { Form, Button, Input, Checkbox } from "../components";
import './CreateUserProfileForm.css'


class CreateUserProfileForm extends Component {
  render() {
    return (
      <Form >
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Username"
            placeholder="Enter your username"
            className = 'username'
          />
          
          <Form.Field
            control={Input}
            label="Display Name"
            placeholder="Enter the name you want displayed"
           
          />

          <Form.Field
            control={Input}
            label="Password"
            type="password"
            placeholder="Enter your password"
            className = 'password'
          >
          </Form.Field>
          <Form.Field
            control={Input}
            label="Password"
            type="password"
            placeholder="Confirm Your Password"
            className = 'password'
          >
          </Form.Field>
        </Form.Group>

        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button} color="grey">
          Submit
        </Form.Field>
      </Form>
    );
  }
}
export default CreateUserProfileForm;
