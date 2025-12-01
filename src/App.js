import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import logo from './assets/alesoft.png';

function App() {

  const [input, setInput] = useState('');

  const addInput = (val) => setInput(input + val);
  const calculate = () => input && setInput(evaluate(input));
  const clearInput = () => setInput('');

  const Button = ({ children, onClick }) => (
    <div className="btn" onClick={() => onClick(children)}>
      {children}
    </div>
  );

  const Screen = ({ value }) => (
    <div className="screen">{value}</div>
  );

  const ClearButton = ({ onClear }) => (
    <div className="btn-clear" onClick={onClear}>Clear</div>
  );

  return (
    <div className="App">
      <div className="calc-wrapper">

        <div className="logo-box">
          <img src={logo} alt="logo" className="app-logo" />
        </div>

        <Screen value={input} />

        <div className="grid">
          <Button onClick={addInput}>7</Button>
          <Button onClick={addInput}>8</Button>
          <Button onClick={addInput}>9</Button>
          <Button onClick={addInput}>/</Button>

          <Button onClick={addInput}>4</Button>
          <Button onClick={addInput}>5</Button>
          <Button onClick={addInput}>6</Button>
          <Button onClick={addInput}>*</Button>

          <Button onClick={addInput}>1</Button>
          <Button onClick={addInput}>2</Button>
          <Button onClick={addInput}>3</Button>
          <Button onClick={addInput}>-</Button>

          <Button onClick={addInput}>0</Button>
          <Button onClick={addInput}>.</Button>
          <Button onClick={calculate}>=</Button>
          <Button onClick={addInput}>+</Button>
        </div>

        <ClearButton onClear={clearInput} />

      </div>
    </div>
  );
}

export default App;
