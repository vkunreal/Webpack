import React from "react";
import webpackImg from "../images/webpack.png";
import { pow } from "../utils/calc";
import "../styles/heading.scss";

const App = () => {
  console.log(pow(5, 3));

  return (
    <div>
      <h1 className="heading">Hello world</h1>
      <img src={webpackImg} alt="webpack" />
    </div>
  );
};

export default App;
