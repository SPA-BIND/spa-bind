import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <div className="Home"></div>
      <Login/>
    </div>
  );
};

export default App;