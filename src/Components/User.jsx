import React, { useState } from "react";
import EditForm from "./EditForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const User = ({ user, deleteUser, editUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    deleteUser(user.id);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="user col-md-3">
        <h3>Username: {user.username}</h3>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>confirmpassword: {user.confirmpassword}</p>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>{" "}
        <br></br>
        <Button variant="secondary" onClick={handleDelete}>
          Delete
        </Button>{" "}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm user={user} editUser={editUser} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default User;
