import React from "react";
const Child = React.memo(function Child({ onIncreament }) {
    console.log('Child component rendered');
  
    return (
      <div>
        <h2>Child Component</h2>
        <button onClick={onIncreament}>Increment</button>
      </div>
    );
  });

  export default Child