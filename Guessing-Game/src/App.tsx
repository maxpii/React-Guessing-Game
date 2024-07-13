import { useMemo, useState } from 'react'
import { useRef } from 'react';



function App() {
  let random = useMemo(() => Math.round(Math.random() * 15 + 1),[]);
  let [userInput, setUserInput] = useState(-1);
  let [message, setMessage] = useState("");
  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (userInput == random) {
        setMessage("You got it right, try guessing another one!");
        random = useMemo(() => Math.round(Math.random() * 15 + 1),[])
    }
    else {
      setMessage("Wrong, try again")
    }
  } 

  return (
    <>

    <h1>Guess the number I'm thinking of</h1>
    <form action="">
      <input onChange= { e => setUserInput(Number(e.target.value))} type="text" placeholder='your number'/>
      <button onClick={handleSubmit}>Add</button>
    </form>

    <h1 className='message'>{message}</h1>

    </>

  );
}

export default App
