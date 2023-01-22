import logo from './thing.png';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Your_library from "./pages/Your-library";
import NoPage from "./pages/NoPage";
import Room from "./pages/Room"
import mascot from './flashtheduck.png';
import owl from './owl.png'
import frog from './frog.png'
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
    </div>
  );
}

