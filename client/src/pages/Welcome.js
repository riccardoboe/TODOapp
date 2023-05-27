import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-wrapper">
        <div className="welcome-left">
          <img src="https://i.ibb.co/YjTh28v/todoapp.png" alt="fulllogo" />
        </div>

        <div className="welcome-right">
          <h1>Welcome!</h1>
          <p className="p">
            This simple webiste app provides you the ability create, manage and
            safely store your to dos online.
          </p>
          <br />
          <p className="p2">
            <span>Before you start creating to dos, you must create an account.</span>
            <br />
            <small>Demo account available</small>
          </p>
          <NavLink to="/register" className="button">
            create account
          </NavLink>
          <NavLink to="/login" className="button">
            login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
