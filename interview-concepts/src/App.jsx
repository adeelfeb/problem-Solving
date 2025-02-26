import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);
  const newValue = count * 9

  const multiply = () => {
    
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={multiply}>Click to Multiply by 9</button>
        <h2>Multiplied Value: {newValue}</h2> 
      </div>
    </>
  );
}

export default App
