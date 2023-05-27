import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import "../App.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  function registerUser(e) {
    e.preventDefault();

    const data = { email, password };
    axios
      .post("http://localhost:4000/register", data, { withCredentials: true })
      .then((response) => {
        user.setEmail(response.data.email);
        setEmail("");
        setPassword("");
      });
  }

  return (
    <div className="register">
      <h1>Create Account</h1>
      <div className="register-wrapper">
        <form
          action=""
          onSubmit={(e) => registerUser(e)}
          className="register-form"
        >
          <label>Email:</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Create Account &rarr;</button>
        </form>
      </div>
      <div className="note">
        <span>Note:</span><br />You don't have to create an account if you
        dont want. <br /> proceed to <strong>login</strong> to use the demo user.
      </div>
    </div>
  );
}

export default Register;
