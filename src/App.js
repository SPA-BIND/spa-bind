import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import LookBook1 from './components/LookBook1';
import {BrowserRouter,Route} from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <div className="Home"></div>
      <Login/>
      <BrowserRouter>
        <Route path= "/lookbook" component ={LookBook1}/>
      </BrowserRouter>
    </div>
  );
};

export default App;