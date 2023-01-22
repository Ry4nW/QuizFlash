import logo from './thing.png';
import mascot from './flashtheduck.png';
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
        </div>
        </div>

      </header>

      <content>
      </content>
    </div>
  );
}

export default App;
