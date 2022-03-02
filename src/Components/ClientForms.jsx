import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "maya",
      email: "maya@gmail.com",
      password: "21232",
      confirmpassword: "21232",
      id: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.username]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);

    alert("form submitted");
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  render() {
    return (
      <div className="forms">
        <h2 className="Account-head">Create Account</h2>
        <form onSubmit={this.handleSubmit} className="form-header">
          <br></br>
          <div className="success">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="error">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <br></br>

          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <br></br>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="text"
            name="confirmpassword"
            value={this.state.confirmpassword}
            onChange={this.handleChange}
          />

          <br></br>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Forms;
