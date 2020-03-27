import React, { useState } from "react";
import "./App.css";

export default function FirstAssignment() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Exc 1</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}> exc a) + 1 </button>
      <button onClick={() => setCount(count - 1)}> exc b)- 1 </button>
    </div>
  );
}
