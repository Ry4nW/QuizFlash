import logo from './thing.png';
import mascot from './flashtheduck.png';
import owl from './owl.png'
import frog from './frog.png'
import './App.css';
import "./index.css"
import React from 'react';

function App(props) {
  console.log('a')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h1>A new and fun way to learn!</h1>
          <div className="mascot_div">
            <img src={mascot} className="mascot" alt="mascot" />
            <img src={owl} className="owl" alt="owl" />
            <img src={frog} className="frog" alt="frog" />
          </div>
        </div>

      </header>

      <content>
      </content>
    </div>
  );
}

export default App;