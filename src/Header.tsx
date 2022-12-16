import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1>Student Management App</h1>
        <div className="links">
          <NavLink to="/" className="link">
            Student List
          </NavLink>
          <NavLink to="/userlist" className="link" >
            Add Students
          </NavLink>
        </div>
      </header>
    );
  };

  export default Header;
  