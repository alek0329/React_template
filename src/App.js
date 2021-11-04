import "./App.css";
import React from "react";
import upper, { text1, text2, text3 } from "./file1";
import obj, { males, females } from "./file2";

var person = obj;
const male = males;
const female = females;
const people = male.concat(female);

const { email, firstName, gender, lastName } = person;

const personV2 = {
  Email: email,
  Name: firstName,
  LastName: lastName,
  Friends: people,
  Gender: gender,
  phone: "123456",
};

function App() {
  console.log(...male, "kurt", "Helle", ...female, "tina");
  console.log(personV2);
  return (
    <React.Fragment>
      <h2>Ex1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>
      <h2>Ex2</h2>
      <p>{email}</p>
      <p>{firstName}</p>
    </React.Fragment>
  );
}

export default App;
