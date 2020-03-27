import React from "react";
import "./App.css";
import person from "./file2";
import { males, females } from "./file2";

const { firstName, email } = person;

const { gender, lastName } = person;
const personV2 = {
  firstName,
  email,
  friends: [...males, ...females],
  gender,
  lastName,
  phone: 123456
};

console.log([...males, ...females]);
console.log([...males, firstName, "Helle", ...females, "Tina"]);
console.log(personV2);

function App2() {
  return (
    <div className="App2">
      <h1>Ex2</h1>
      <p>{firstName}</p>
      <p>{email}</p>
    </div>
  );
}

export default App2;
