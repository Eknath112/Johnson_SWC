import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [temp, setTemp] = useState(0)
  let x=10;
  const handleClick = () => {
    const newTemp = temp + 1;
    if(newTemp === 3){
      setCount(count + 1);
      setTemp(0);
    } else {
      setTemp(newTemp);
    }
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>
        press
      </button>
    </>
  )
}

export default App
