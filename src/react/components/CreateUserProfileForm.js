import React, { Component } from "react";
import { Form, Button, Segment, Checkbox } from "../components";

class CreateUserProfileForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment
          style={{
            width: "50%",
            margin: "0 auto",
            backgroundColor: "transparent"
          }}
        >
          <Form
            inverted
            id="login-form"
            style={{ width: "60%", margin: "80px auto" }}
            onSubmit={this.handleLogin}
          >
            <h2 style={{ "margin-bottom": "20px", color: "white" }}>
              Your favorite social platform!
            </h2>
            <h3 style={{ "margin-bottom": "40px", color: "white" }}>
              Register Your Account
            </h3>
            <Form.Group widths="equal">
              <Form.Input
              
                fluid
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                autoFocus
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="text"
                name="displayName"
                label="Display Name"
                placeholder="Display Name"
                autoFocus
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="password"
                label="Password"
                name="password"
                placeholder="Password"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="password"
                label="Confirm Password"
                name="password"
                placeholder="Confirm Password"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Checkbox label="I agree to the Terms and Conditions" />

            <Button type="submit" style={{ "margin-top": "30px" }}>
              Submit
            </Button>
          </Form>
        </Segment>
      </React.Fragment>
    );
  }
}
export default CreateUserProfileForm;
