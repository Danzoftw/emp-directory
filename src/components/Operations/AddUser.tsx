import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import UserList from "../Dashboard/UserList";
import "./stylesheet/operations.css";
import { maxLengthCheck } from "../functions/maxLengthCheck";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddUser = () => {
  const { DispatchUserEvent } = useContext(AppContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const min = 1;
  const max = 100;
  const [numValue, setNumValue] = useState<number | string>(0);
  const [placeHolderText] = useState("Age");
  const [focus, setFocus] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddUser = (e: any) => {
    e.preventDefault();
    const user = {
      id: Math.floor(1000 + Math.random() * 9000),
      name,
      age,
      bio,
    };
    if (!name || !age || !bio) {
      setError("Fields cannot be empty");
    } else {
      DispatchUserEvent("ADD_USER", { newUser: user });
      setError("");
      setName("");
      setBio("");
    }
  };

  const handleValue = (e: any) => {
    setFocus(true);
    setNumValue("");
  };

  return (
    <section className="add-user">
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-8 col-lg-4 text-center">
            <Button variant="btn btn-secondary" onClick={handleShow}>
              <p className="mb-0">Add Student</p>
            </Button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container p-lg-5">
            <div className="row flex-column align-items-center py-4">
              <div className="col-12 col-sm-8 col-lg-12">
                <div className="inner-row p-5 p-sm-2">
                  <div className="p-3">
                    <input
                      className="form-control"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="name"
                    />
                  </div>
                  <div className="p-3">
                    <input
                      className="form-control"
                      min={0}
                      type="string"
                      max={100}
                      maxLength={2}
                      placeholder="Age"
                      onFocus={handleValue}
                      onInput={(e) =>
                        maxLengthCheck(e, min, max, setNumValue, setAge)
                      }
                      value={!focus ? placeHolderText : numValue}
                    />
                  </div>
                  <div className="p-3">
                    <textarea
                      className="form-control"
                      required
                      value={bio}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                      placeholder="Bio"
                    />
                  </div>
                  {error && (
                    <strong id="title-error" role="alert">
                      {error}
                    </strong>
                  )}
                  <div className="p-3 text-center">
                    {" "}
                    <button
                      className="common-button-style-1"
                      onClick={handleAddUser}
                    >
                      Add Student
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="display-students py-5">
        <UserList />
      </div>
    </section>
  );
};

export default AddUser;
