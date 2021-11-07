import React, { Component } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button onClick={countIncrement}>Click me!</button>
      <h3>count: {countIncrement.count}</h3>
    </div>
  );
}

function countIncrement() {
  const count = 0;
  console.log(count);
}
export default App;
