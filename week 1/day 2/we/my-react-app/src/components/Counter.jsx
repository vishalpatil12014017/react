import React from 'react';
import { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="blankD">
        <h1>Counter:{count}</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}
        >Add 1</button>
        <button onClick={() => {
          setCount(count - 1)
        }}
        >Sub 1</button>
        <button onClick={() => {
          setCount(count*2)
        }}
        >Double</button>
      </div>
    </>

  );
}

export default Counter;
