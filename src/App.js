import React, { useCallback, useState, useEffect } from "react";
import "./App.css";
import Child from "./child";

function App() {
  console.log('parent component called...')
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  useEffect(() => {
    setCount(0);
  }, []);

  const onIncreament = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  return (
    <div className="App">
      <h1> Parent Harshal Akshada</h1>
      <p>Count: {count}</p>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
      <Child onIncreament={onIncreament} />
    </div>
  );
}

export default App;
