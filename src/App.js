import React, { Component } from "react";
import "./App.css";
import UserList from "./Components/UserList";
import ClientForms from "./Components/ClientForms";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  handleAddUser = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  handleDeleteUser = (userId) => {
    const newArr = this.state.users.filter((user) => {
      return user.id !== userId;
    });
    this.setState({ users: newArr });
  };
  handleEditUser = (updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ClientForms addUser={this.handleAddUser} />

              <div className="details col-md-3">
                <UserList
                  users={this.state.users}
                  deleteUser={this.handleDeleteUser}
                  editUser={this.handleEditUser}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
