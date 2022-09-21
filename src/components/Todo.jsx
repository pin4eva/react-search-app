import React, { useState } from "react";
import "./styles/custom.scss";
import "./styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TodoComp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="app">
      <div className="container">
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              className="form-control"
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" style={{ minWidth: "150px" }}>
              Add Todo
            </button>
          </div>
        </form>

        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoComp;
