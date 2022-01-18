import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button>{props.text}</button>
  );
};

const Application = () => {

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button text="Reset" />
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
