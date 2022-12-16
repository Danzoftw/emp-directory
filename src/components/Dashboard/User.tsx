import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const User = ({ user }: { user: any }) => {
  let navigate = useNavigate();

  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  const { dispatchUserEvent } = useContext(AppContext);

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
    dispatchUserEvent("REMOVE_USER", { userId: user.id });
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
    <div className="user m-2 position-relative">
      <div className="p-3 p-lg-4">
        <div className="student-data mb-3 text-center">
          <h1>{user.id}</h1>
          <h3>{user.name}</h3>
          <h4>{user.age}</h4>
          <div className="student-bio">
            <small>{user.bio}</small>
          </div>
        </div>

        <div className="student-btns text-center">
          <button
            className="me-lg-2 mb-3 mb-lg-0 common-button-style-1"
            onClick={() => navigate(`/edit/${user.id}`)}
          >
            Edit student
          </button>
          <button className="common-button-style-1" onClick={handleRemoveUser}>
            Delete student
          </button>
        </div>
      </div>
      <div
        className={`confirm-delete position-absolute ${
          popup.show === false ? "d-none" : "d-flex"
        }`}
      >
        <div className="btn-wrap">
          <button onClick={handleHide} className="me-3">
            No
          </button>
        </div>
        <div className="btn-wrap">
          <button onClick={handleDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default User;
