import React from "react";
import User from "./User";

const UserList = ({ users, deleteUser, editUser }) => {
  const userList = users.map((user) => {
    return (
      <User
        user={user}
        key={user.id}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    );
  });
  return <div>{userList}</div>;
};

export default UserList;
