import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="app-navbar">
      <NavLink to="/" className="navbar-logo">
        <img 
        //black src="https://i.ibb.co/hYSMVgy/logo2blcktransparent.png"
          src="https://i.ibb.co/P5L4N4N/logo2transparent.png"
          alt="logo"
        />
      </NavLink>
    </div>
  );
};

export default Navbar;
