import React from "react";
import { NavLink } from "react-router-dom";
import "./stylesheet/header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <header>
      <div className="container pt-5">
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <Dropdown className="as">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Perform a task?
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="position-relative overflow-hidden">
                  <NavLink
                    className="position-absolute text-decoration-none"
                    to="/"
                  >
                    Student List
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item className="position-relative overflow-hidden">
                  <NavLink
                    className="position-absolute text-decoration-none"
                    to="/userlist"
                  >
                    View Students
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-8">
            <div className="title">
              <h1>Student Management App</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
