import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AppContext } from "../../context/context";
import "./stylesheet/keysearch.css";
import AddEmployee from "../AddEmployee/AddEmployee";

const KeySearch = () => {
  const { DispatchUserEvent } = useContext(AppContext);
  const { filterInput } = useContext(AppContext);

  const [prefValue, setPrefValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (e: any) => {
    setPrefValue(e);
    DispatchUserEvent("USER_DROP_SELECT", { state: e });
  };

  const handleClear = (e: any) => {
    e.preventDefault();
    DispatchUserEvent("ADD_FILTER_KEY", { state: "" });
    DispatchUserEvent("EMPLOYEE_ALPHABET", { state: "" });
    if (inputValue) {
      setInputValue("");
    } else {
    }
  };

  useEffect(() => {
    DispatchUserEvent("ADD_FILTER_KEY", { state: inputValue });
  }, [inputValue]);

  return (
    <div className="search-container">
      <div className="container-fluid">
        <div className="row pt-xl-3">
          <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center flex-column flex-md-row justify-content-center justify-content-md-start mt-3 mt-md-0">
            <div className="search-input-box d-inline-flex h-100">
              <form
                className="d-flex align-items-center flex-column flex-md-row justify-content-center"
                onSubmit={handleClear}
              >
                <div className="search-title">
                  <label className="theme color-text-gray-1 p-2 p-md-0 font-weight-500">
                    Search
                  </label>
                </div>
                <input
                  className="ms-md-2 outline-none"
                  type="text"
                  name="search"
                  value={filterInput ? filterInput : ""}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={inputValue ? "" : "Enter any word"}
                  id=""
                />
                <div className="clear d-flex md-0 ps-lg-1 ps-xl-3 ps-xxl-4 p-2 p-md-0 h-100">
                  <Button
                    type="submit"
                    className="border-radius-0px theme bg-green-color-1 border-none"
                  >
                    Clear
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center flex-column flex-md-row justify-content-start justify-content-md-end justify-content-xl-center  center mt-3 mt-md-0">
            <div className="filter-by-title">
              <h6 className="theme color-text-gray-1 p-2 p-md-0">Filter by</h6>
            </div>
            <div className="filter-dropdown ps-md-2">
              <DropdownButton
                onSelect={handleSelect}
                className=""
                align="end"
                title={prefValue ? prefValue : "Select Option"}
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item eventKey="Preferred Name">
                  Preferred Name
                </Dropdown.Item>
                <Dropdown.Item eventKey="Preferred Department">
                  Preferred Department
                </Dropdown.Item>
                <Dropdown.Item eventKey="Preferred Office">
                  Preferred Office
                </Dropdown.Item>
                <Dropdown.Item eventKey="Job Title">
                  Perferred Job Title
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-2 mt-4 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end justify-content-lg-end h-100 pt-md-3 pt-lg-0">
              <Button
                variant="primary"
                onClick={handleShow}
                className="add-btn theme bg-text-blue-1 add-btn px-lg-2 px-xl-4 border-radius-0px"
              >
                Add Employee
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton className="px-5 mx-5">
                  <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddEmployee />
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeySearch;
