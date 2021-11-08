import React, { Component, useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const initNum = 5;
  const [joke, setJoke] = useState();

  const fetchApi = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
        console.log(joke);
      });
  };
  return (
    <div>
      <Counter incrementor={initNum} />
      <button
        onClick={() => {
          return fetchApi();
        }}
      >
        Click me!
      </button>
      <h2>{joke}</h2>
    </div>
  );
};

function Counter(props) {
  const [counter, setCounter] = useState(props.incrementor);
  let storedCount = 0;
  if (storedCount < counter) {
    localStorage.setItem("count", counter);
    storedCount = localStorage.getItem("count");
  }
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });
  return (
    <div>
      <button
        className="btn-sm btn-success m-2"
        onClick={() => setCounter(counter + props.incrementor)}
      >
        +
      </button>
      <button
        className="btn-sm btn-danger m-2"
        onClick={() => setCounter(counter - props.incrementor)}
      >
        -
      </button>
      <h3>StoredCounter: {storedCount}</h3>
      <h3>Counter: {counter}</h3>
    </div>
  );
}

export default App;
