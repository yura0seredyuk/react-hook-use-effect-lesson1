import React, { useState } from "react";
import "./style.css";
import { Child } from './Child';
// import { ChildClass } from './ChildClass';

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>++</button>

      {(count % 5 > 0) && (
        <Child />
      )}
    </div>
  );
}
