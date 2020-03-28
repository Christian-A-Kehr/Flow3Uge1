import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

/*
export default function FirstAssignment() {
  let defaultvalue = 0;
  const [count, setCount] = useState(defaultvalue);

useEffect(() => {

});
  return (
    <div>
      <h1>Exc 1</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}> exc a) + 1 </button>
      <button onClick={() => setCount(count - 1)}> exc b)- 1 </button>
      <h1>d</h1>
    
    </div>
  );
}
*/
function App() {
  const [userInput, setUserInput] = useState();
  var incrementDecrementValue = 1;
  const [valuedecrement, setvaluedecrement] = useState(incrementDecrementValue);
  let defaultvalue = 0;
  const [count, setCount] = useState(defaultvalue);

  const update = event => {
    const inp = event.target.value;
    setCount(inp);
  };
  const updateIncremt = event => {
    const inp = event.target.value;
    setvaluedecrement(inp);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Ex1 </h1>
        <p>You clicked the button {count} times</p>
        <button onClick={() => setCount(count - valuedecrement)}>
          {" "}
          exc b)- 1{" "}
        </button>
        <button onClick={() => setCount(count + valuedecrement)}>
          {" "}
          exc a) + 1{" "}
        </button>

        <InnputComp update={update}></InnputComp>
        <CountWith update={updateIncremt}></CountWith>
        <ShowComp prop_inp={userInput}></ShowComp>
      </header>
    </div>
  );
}

const InnputComp = props => {
  return (
    <div>
      <input
        type="Number"
        onChange={props.update}
        placeholder="Set click counter"
      />
    </div>
  );
};
const CountWith = props => {
  return (
    <div>
      <input
        type="Number"
        onChange={props.updateIncremt}
        placeholder="in/-decrement Value "
      />
    </div>
  );
};

const ShowComp = props => {
  let newCount = props.prop_inp;
  return (
    <div>
      personal count is:
      {newCount}
    </div>
  );
};
export default App;
