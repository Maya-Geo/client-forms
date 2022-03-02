import React, { Component } from "react";
import "./edit.css";
import { Button } from "react-bootstrap";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.user.username,
      email: props.user.email,
      password: props.user.password,
      confirmpassword: props.user.confirmpassword,
      id: props.user.id,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.username]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state);
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });

    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <h1 className="text-edit">Edit Account</h1>
        <form onSubmit={this.handleSubmit} className="form-header">
          <br></br>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <br></br>

          <div className="form-control">
            <label htmlFor="confirmpassword">Password</label>
            <input
              type="text"
              name="confirmpassword"
              value={this.state.confirmpassword}
              onChange={this.handleChange}
            />
          </div>
          <br></br>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default EditForm;
