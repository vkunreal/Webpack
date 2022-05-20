import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { getData } from "./getData.js";
import { pow } from "./calc.ts";
import image from "../images/webpack.png";
import "../styles/card.scss";

console.log(pow(5, 3));

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData().then((res) => setTodos(res));
  }, []);

  return (
    <div className="App">
      <img src={image} alt="webpack" width="200" />
      <div className="cardBox">
        <div className="cardBox-wrapper">
          {todos.map((elem) => {
            return (
              <div className="card" key={elem.id}>
                <h3>{elem.title}</h3>
                <p>{elem.completed}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
