import React, { Component } from "react";

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = { counter: this.props.count };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ counter: this.state.count + 1 })}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.count - 1 })}
        >
          Decrement
        </button>
        <h3>count:{this.state.count}</h3>
      </div>
    );
  }
}

export default Counter;
