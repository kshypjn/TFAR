import React, { useState } from 'react';
import './App.css'; // Import the CSS file


function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  
  const checkSum = () => {
    let sum = 0;
    if (isNaN(input)) {
      sum = input.length;
    } else if (input.length === 2) {
      let firstDigit = Number(input[0]);
      let secondDigit = Number(input[1]);
      let difference = Math.abs(firstDigit - secondDigit);
      sum = firstDigit + secondDigit;
      if (difference === 7 || sum === 7) {
        setResult('TFAR');
        return;
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
      }
    } 
  
    if (sum === 7) {
      setResult('TFAR');
    } else {
      setResult('Definitely Not');
    }
    
  }
  ;

  return (
    <div className="app">
      <h1 className="title">IS THALA THE REASON</h1>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button" onClick={checkSum} >Check</button>
      <p className="result">{result}</p>
    </div>
  );
}

export default App;