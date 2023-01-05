import React, { useEffect, useState, useContext } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import EditEmployee from "../EditEmployee/EditEmployee";
import { AppContext } from "../../context/context";
import Image_1 from "../../profilepics/img_1.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

//Social icons import
import Favourite_Icon from "../../icons/favourites-filled-star-symbol.png";
import Phone_Icon_White from "../../icons/phone-call-white.png";
import Speech_Icon from "../../icons/speech-bubble.png";
import Delete_Icon from "../../images/delete.png";
import Email_Icon from "../../icons/email.png";
import Edit_Icon from "../../images/edit.png";
import Heart from "../../icons/heart.png";

const EmployeeList = (
  { employeeDisp }: { employeeDisp: any },
  { index }: { index: any }
) => {
  const { DispatchUserEvent } = useContext(AppContext);

  const handleDeleteOperation = (e: any) => {
    DispatchUserEvent("REMOVE_EMPLOYEE", { userId: employeeDisp?.id });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  // console.log("{employeeDisp?.id", typeof employeeDisp?.id);

  DispatchUserEvent("USER_INFO_DISPLAY_TOGGLER", { state: show });

  return (
    <div key={index} className="col-12 col-md-6 col-xl-3 p-2">
      <Card className="d-flex flex-row align-items-center p-2 my-2 position-relative">
        <div className="image">
          <div
            className="bg-image bg-image-position w-100 h-100"
            style={{ backgroundImage: `url(${Image_1})` }}
          ></div>
        </div>
        <Card.Body className="p-0 ms-2">
          <Card.Title className="d-flex">
            <p>{employeeDisp.firstName}</p>
            <p className="ps-1">{employeeDisp.lastName}</p>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {employeeDisp.jobTitle}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {employeeDisp.department}
          </Card.Subtitle>
          <div className="socials-icons d-flex">
            <div className="common-icon employee-call">
              <img
                className="w-100 theme bg-color-gray-2"
                src={Phone_Icon_White}
                alt={Phone_Icon_White}
              />
            </div>
            <div className="common-icon employee-email ms-2">
              <img className="w-100" src={Email_Icon} alt="" />
            </div>
            <div className="common-icon employee-message ms-2">
              <img className="w-100" src={Speech_Icon} alt="" />
            </div>
            <div className="common-icon employee-bookmark ms-2">
              <img className="w-100" src={Favourite_Icon} alt="" />
            </div>
            <div className="common-icon employee-like ms-2">
              <img className="w-100" src={Heart} alt="" />
            </div>
          </div>
        </Card.Body>
        <div className="operations position-absolute top right d-flex">
          <div className="edit mx-xl-2 mt-xl-1 cursor-pointer">
            <img onClick={handleShow} src={Edit_Icon} alt={Edit_Icon} />
          </div>
          <div className="delete mx-xl-2 mt-xl-1 cursor-pointer">
            <img
              onClick={handleDeleteOperation}
              src={Delete_Icon}
              alt={Delete_Icon}
            />
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-xl"
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditEmployee id={employeeDisp?.id} />
            </Modal.Body>
          </Modal>
        </div>
      </Card>
    </div>
  );
};

export default EmployeeList;
