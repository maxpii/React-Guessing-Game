import { useMemo, useState,useCallback } from 'react'
//import { useRef } from 'react';


function getRandom () {
  return Math.floor(Math.random() * 15) + 1;
}


function App() {
  let [userInput, setUserInput] = useState(-1);
  let [message, setMessage] = useState("");

  
  

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    let random = useCallback(getRandom,[]);
    let x = random();
    console.log(random);
    console.log(userInput);
    if (userInput == x) {
        setMessage("You got it right, try guessing another one!");
    }
    else {
      setMessage("Wrong, try again")
      x = random();
    }
  } 

  return (
    <>

    <h1>Guess the number I'm thinking of</h1>
    <form action="">
      <input onChange= { e => setUserInput(Number(e.target.value))} type="text" placeholder='your number'/>
      <button onClick={
        useCallback(handleSubmit,[])
        }>Submit</button>
    </form>

    <h1 className='message'>{message}</h1>

    </>

  );
}

export default App
