import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import UserList from "../Dashboard/UserList";
import "./stylesheet/operations.css";

const AddUser = () => {
  const { dispatchUserEvent } = useContext(AppContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const min = 1;
  const max = 100;
  const [numValue, setNumValue] = useState(0);
  const [placeHolderText] = useState("Age");
  const [focus, setFocus] = useState(false);

  const maxLengthCheck = (object: any) => {
    const value = Math.max(min, Math.min(max, Number(object.target.value)));
    setNumValue(value);
    setAge(value);
  };

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
      dispatchUserEvent("ADD_USER", { newUser: user });
      setError("");
      setName("");
      setBio("");
    }
  };

  const handleValue = (e: any) => {
    setFocus(true);
  };

  return (
    <section className="add-user">
      <div className="container p-lg-5">
        <div className="row flex-column align-items-center py-4">
          <div className="col-12 col-sm-8 col-lg-4">
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
                  type="number"
                  max={100}
                  maxLength={2}
                  placeholder="Age"
                  onClick={handleValue}
                  onInput={maxLengthCheck}
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
              <div className="p-3">
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
        <div className="display-students py-5">
          <UserList />
        </div>
      </div>
    </section>
  );
};

export default AddUser;
