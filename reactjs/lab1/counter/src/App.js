import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
    </div>
  );
}

export default App;
