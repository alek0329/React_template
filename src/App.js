import React, { Component, useState } from "react";
import Counter from "./components/counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter count(3) />
    </div>
  );
}

export default App;
