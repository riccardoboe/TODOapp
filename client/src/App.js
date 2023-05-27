import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Welcome from "./pages/Welcome";
import UserContext from "./UserContext";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((response) => {
        setEmail(response.data.email);
      });
  }, []);

  function logout() {
    axios
      .post("http://localhost:4000/logout", {}, { withCredentials: true })
      .then(() => setEmail(""));
  }

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <BrowserRouter>
        {email ? <Navbar2 /> : <Navbar />}
        <div className="user-status">
          {!!email && (
            <div className="check-user">
              Hello {email} &nbsp;
              <button onClick={() => logout()}>Log out</button>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={!email ? <Welcome /> : <Home />} />
          <Route path="/welcome" element={email ? <Home /> : <Welcome />} />
          <Route
            path="/register"
            element={email ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/Login"
            element={email ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
