import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./stylesheet/header.css";
import SaketaImage from "../../images/saketa-logo.svg";
import Image_1 from "../../profilepics/img_2.jpg";

const Header = () => {
  const auth: any = JSON.parse(localStorage.getItem("loggedin") || "{}");

  return (
    <header>
      <section className="header px-2 px-lg-5">
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
          <div className="container-fluid pt-4">
            <Navbar.Brand>
              <img className="w-100" src={SaketaImage} alt="SaketaImage" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ps-3">
                <div className="employee-directory">
                  <div className="name position-relative pb-3">
                    <p className="theme color-text-blue-1">
                      Employee Directory
                    </p>
                    <div className="cite position-absolute">
                      <p className="theme color-text-gray-1">
                        The Ultimate People Directory Experience
                      </p>
                    </div>
                  </div>
                </div>
              </Nav>
              <Nav>
                <div className="welcome d-flex mt-4 pt-2 justify-content-end align-items-end">
                  <div className="welcome-msg">
                    <span className="theme color-text-blue-1">Welcome,</span>
                  </div>
                  <div className="name ps-2">
                    <span>Andrew Philips</span>
                  </div>
                  <div className="profile-pic ms-2">
                    <img className="w-100 h-100" src={Image_1} alt="" />
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </section>
    </header>
  );
};

export default Header;
