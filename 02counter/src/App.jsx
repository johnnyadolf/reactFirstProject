import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15);
  //let counter = 25



  const addValue = () => {
    setCounter (counter => counter + 1)
    setCounter ((prevCounter) => prevCounter + 1)
    setCounter ((prevCounter) => prevCounter + 1)
    setCounter ((prevCounter) => prevCounter + 1)
  }

  const substractValue = () => {
    setCounter (counter - 1)
  }

  return (
    <>
      <h1>React course with Hitesh {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={substractValue}>Subtract value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
