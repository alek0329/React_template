import React, { Component, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const initNum = 5;
  return (
    <div>
      <button onClick={() => initNum == 5}>Start</button>
      <Counter incrementor={initNum} />
    </div>
  );
}

function Counter(props) {
  const [counter, setCounter] = useState(props.incrementor);
  localStorage.setItem("count", counter);
  let storedCount = localStorage.getItem("count");
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

// function Storager(props) {
//   localStorage.setItem("count", props.counter);
//   const storedCount = localStorage.getItem("count");
//   useEffect(() => {
//     document.title = `You clicked ${props.counter} times`;
//   });
//   return (
//     <React.Fragment>
//       <h3>counter: {storedCount}</h3>
//     </React.Fragment>
//   );
// }

export default App;
