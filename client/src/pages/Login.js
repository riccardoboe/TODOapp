import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const user = useContext(UserContext);

  function loginUser(e) {
    e.preventDefault();

    const data = { email, password };
    axios
      .post("https://todo-app-kidg.onrender.com/login", data, { withCredentials: true })
      .then((response) => {
        user.setEmail(response.data.email);
        setEmail("");
        setPassword("");
        setLoginError(false);
      })
      .catch(() => {
        setLoginError(true);
      });
  }

  return (
    <div className="register">
      <h1>Login</h1>
      <div className="register-wrapper">
        <form
          className="register-form"
          action=""
          onSubmit={(e) => loginUser(e)}
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
          <button type="submit">Log in &rarr;</button>
          {loginError && <div className="error">wrong email or password!</div>}
        </form>
      </div>
      <div className="note">
        Demo user: <br/>
        <span>Email:</span> riccardo@mail.com <br/>
        <span>Password:</span> secret123
      </div>
    </div>
  );
}

export default Login;
