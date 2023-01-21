import logo from './thing.png';
import ReactDOM from 'react-dom'
import './App.css';
import React from 'react';

function App(props) {
  const s1 = "HELLO";
  const s2 = "BYE";

  function handleFCClick() {
    const flashcard = document.querySelector(".flashcard-text-1");
    const cur = flashcard.textContent;
    console.log(cur);
    if (cur === s1) flashcard.textContent = s2;
    else flashcard.textContent = s1;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>QuizFlash</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World
        </p>

      </header>

      <content>
        <button className="flashcard-text-1" onClick={() => handleFCClick()}>{s1}</button>
      </content>
    </div>
  );
}

export default App;
