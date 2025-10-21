import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    if(!(counter > 19)) {
      counter = counter + 1;
      setCounter(counter);
      console.log("clicked", counter);
    }
  }
  
  const removeValue = () => {
    if (!(counter < 1)) {
      // counter = counter - 1;
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Use of React useState Hook</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App