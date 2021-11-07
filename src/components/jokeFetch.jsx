import React, { Component } from "react";

const Button = (props) => {
  return <button onClick={props.callapi}>Fetch a Joke</button>;
};

export default Button;
//https://api.chucknorris.io/jokes/random
