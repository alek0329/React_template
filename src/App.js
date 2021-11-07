import React, { Component, useState } from "react";
import "./App.css";

function App() {
  const initNum = 5;
  return (
    <div>
      <Counter {initNum} />
    </div>
  );
}

function Counter(props) {
  console.log(props);
  const [counter, setCounter] = useState(props.initNum);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>
      <h3>counter: {counter}</h3>;
    </div>
  );
}

export default App;
