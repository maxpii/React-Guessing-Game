import { useState } from 'react'
import { useRef } from 'react';



function App() {
  let random = Math.round(Math.random() * 15 + 1)
  let [userInput, setUserInput] = useState(-1);
  const outputRef = useRef(null);

  function handleSubmit() {
  }

  return (
    <>

    <h1>Guess the number I'm thinking of</h1>
    <form action="">
      <input onChange= { e => setUserInput(Number(e.target.value))} type="text" placeholder='your number'/>
      <button onClick={handleSubmit}>Add</button>
    </form>

    <h1 ref={outputRef}></h1>

    </>

  );
}

export default App
