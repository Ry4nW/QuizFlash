import React from "react";
import "./Header.css"

function Header(props) {
  return (
    <nav>
      <link rel="stylesheet" href="../../style.css"/>
        <div class="title_container">
          <h1 class="title_text">QuizFlash</h1>
        </div>
        <ul className="navbar-main">
            <li className="nav-ele" class="nav_text"><a href="#">Home</a></li>
            <li className="nav-ele" class="nav_text"><a href="#">Your library</a></li>
            <li className="nav-ele" class="nav_text"><a href="#">Create</a></li>
        </ul>
    </nav>
  );
}
>>>>>>> c91a9b4e3b5f5c22327b22f02a8780143a96be43

export default Header;