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
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    // your code here
    setName("");
  };

  return (
    <main>
      <input 
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Type your name' 
      />
      <Button text="Reset" reset={reset} />
      {/* renders if anything is inputted into the text field */}
      {!name == 0 && <h1>Hello {name}</h1>}
      {/* renders nothing is inputted into text field */}
      {name === "" && <h1></h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));




