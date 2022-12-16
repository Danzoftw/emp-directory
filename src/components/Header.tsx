import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Student Management App</h1>
      <div className="links d-flex justify-content-center py-4">
        <div className="student-list py-3 m-2 position-relative">
          <NavLink to="/" className="link">
            Student List
          </NavLink>
        </div>
        <div className="student-list add-student p-2 m-2 position-relative">
          <NavLink to="/userlist" className="link">
            View Students
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
