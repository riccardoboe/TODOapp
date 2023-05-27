import React, { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import "../App.css";
import axios from "axios";

function Home() {
  const userInfo = useContext(UserContext);
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos", { withCredentials: true })
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  // ADD TODO
  function addTodo(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:4000/todos",
        { text: inputVal },
        { withCredentials: true }
      )
      .then((response) => {
        setTodos([...todos, response.data]);
        setInputVal("");
      });
  }

  // UPDATE CHECKBOX TODO
  function updateTodo(todo) {
    const data = { id: todo._id, done: !todo.done };
    axios
      .post("http://localhost:4000/todos", data, { withCredentials: true })
      .then(() => {
        const newTodos = todos.map((t) => {
          if (t._id === todo._id) {
            t.done = !t.done;
          }
          return t;
        });
        setTodos([...newTodos]);
      });
  }

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <form onSubmit={(e) => addTodo(e)}>
          <div className="addtodo-input">
            <input
              placeholder={"Add a to do here..."}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
        </form>
        <hr />
        <ul>
          {todos.map((todo) => (
            <li>
              <input
                type={"checkbox"}
                defaultChecked={todo.done}
                onClick={() => updateTodo(todo)}
              />
              {todo.done ? <del>{todo.text}</del> : todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
