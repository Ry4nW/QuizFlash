import logo from './thing.png';
<<<<<<< HEAD
// import ReactDOM from 'react-dom'
// import './App.css';
// import React from 'react';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Create from "./Library/Create";
// import Your_library from "./Library/Your-library";
// import Home from "./Library/Home";
// import Header from "./Header.js"


// function App(props) {
//   const s1 = "HELLO";
//   const s2 = "BYE";

//   function handleFCClick() {
//     const flashcard = document.querySelector(".flashcard-text-1");
//     const cur = flashcard.textContent;
//     if (cur === s1) flashcard.textContent = s2;
//     else flashcard.textContent = s1;
//   }
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <h1>QuizFlash</h1>
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Hello, World
//     //     </p>

//     //   </header>

//     //   <content>
//     //     <button className="flashcard-text-1" onClick={() => handleFCClick()}>{s1}</button>
//     //   </content>
//     // </div>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Header />}>
//         <Route index element={<Home />} />
//         <Route path="blogs" element={<Create />} />
//         <Route path="contact" element={<Your_library />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   );
// }

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Your_library from "./pages/Your-library";
import NoPage from "./pages/NoPage";
import Room from "./pages/Room"

export default function App() {
  return (
    <>
    <div class="title_container">
      <h1>QuizFlash</h1>
=======
import mascot from './flashtheduck.png';
import owl from './owl.png'
import frog from './frog.png'
import ReactDOM from 'react-dom'
import './App.css';
import React from 'react';

function App(props) {
  return (
    <div className="App">
      <link rel="stylesheet" href="../../style.css"/>
      <link rel="stylesheet" href="index.css"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="container">
          <h1>A new and fun way to learn!</h1>
          <div class="mascot_div">
            <img src={mascot} class="mascot_img" className="mascot" alt="mascot" />
            <img src={owl} class="mascot_img" className="owl" alt="owl" />
            <img src={frog} class="mascot_img" className="frog" alt="frog" />
          </div>
        </div>

      </header>

      <content>
      </content>
>>>>>>> c91a9b4e3b5f5c22327b22f02a8780143a96be43
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="contact" element={<Your_library />} />
            <Route path="room" element={<Room />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

