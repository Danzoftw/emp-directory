import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const User = ({ user }: { user: any }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  const { DispatchUserEvent } = useContext(AppContext);

  const handleRemoveUser = (e: any) => {
    e.preventDefault();
    setPopup({
      show: true,
      id: user.id,
    });
    if (popup.show && popup.id) {
      setPopup({
        show: false,
        id: null,
      });
    }
  };
  const handleDelete = () => {
    DispatchUserEvent("REMOVE_USER", { userId: user.id });
  };

  const handleHide = () => {
    if (popup.show && popup.id) {
      setPopup({
        show: false,
        id: null,
      });
    }
  };

  return (
    <div className="user m-2 position-relative py-4">
      <div className="p-3 p-lg-4">
        <div className="student-data mb-3 d-lg-flex flex-lg-column ">
          <div className="common-div name d-flex">
            <div className="name">{"Name"}</div>
            <h5 className="ps-3">{user.name}</h5>
          </div>
          <div className="common-div age d-flex">
            <div className="age">{"Age"}</div>
            <h5 className="ps-3">{user.age}</h5>
          </div>
          <div className="common-div student-bio d-flex">
            <div className="bio">{"Bio"}</div>
            <small className="ps-3">{user.bio}</small>
          </div>
        </div>

        <div className="student-btns text-lg-center d-flex flex-column align-items-lg-center">
          <button
            className="me-lg-2 mx-2 mb-3 common-button-style-1"
            onClick={() => navigate(`/edit/${user.id}`)}
          >
            Edit student
          </button>
          <Button className="mx-2" variant="primary" onClick={handleShow}>
            Delete student
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Student</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">Confirm delete?</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="me-3">
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default User;
