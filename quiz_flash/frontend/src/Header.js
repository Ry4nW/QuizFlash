import React from "react";
import {a} from 'react-router-dom';
import "./Header.css"

function Header(props) {
  return (
    <nav>
      <a rel="stylesheet" href="../../style.css"/>
        <div className="title_container">
          <h1 className="title_text">QuizFlash</h1>
        </div>
        <ul className="navbar-main">
            <li className="nav-ele nav_text"><a to="App.js">Home</a></li>
            <li className="nav-ele nav_text"><a href="/">Your library</a></li>
            <li className="nav-ele nav_text"><a to="Lobby.js">Create</a></li>
        </ul>
    </nav>
  );
}

export default Header;