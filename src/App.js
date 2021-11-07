import React, { Component, useState } from "react";
import Counter from "./Components";
import "./App.css";

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
