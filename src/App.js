import React from "react";
import "./App.css";
import Header from "./components/Header";

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <div className="Home"></div>
    </div>
  );
};

export default App;