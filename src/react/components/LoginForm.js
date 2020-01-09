import React from "react";
import { Spinner, Segment, Form, Button, Link } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Segment
          inverted
          id="login"
          style={{
            width: "50%",
            margin: "150px auto",
            backgroundColor: "transparent"
          }}
        >
          <Form
            inverted
            id="login-form"
            style={{ width: "60%", margin: "80px auto" }}
            onSubmit={this.handleLogin}
          >
            <h2 style={{ "": "40px", opacity: "1" }}>
              Your favorite social platform!
            </h2>
            <Form.Group widths="equal" style={{ opacity: "1" }}>
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
                type="password"
                label="Password"
                name="password"
                placeholder="Password"
                required
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button type="submit" primary disabled={loading}>
              {" "}
              Login{" "}
            </Button>
            <h5 style={{ "": "30px" }}>
              Don't have an account? <Link to="/createuser">Join Kwitter</Link>{" "}
              today.
            </h5>
          </Form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Segment>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
