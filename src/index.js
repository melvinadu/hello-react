import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button onClick={props.reset}>
      {props.text}
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState("Vin");

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button text="Reset" reset={reset} />
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
