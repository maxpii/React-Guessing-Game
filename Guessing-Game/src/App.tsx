import { useState } from 'react'


function getRandom (n:number) {
  return Math.floor(Math.random() * n) + 1;
}


export default function App() {
  let [userInput, setUserInput] = useState(-1);
  let [message, setMessage] = useState("");
  let [random, setRandom] = useState(getRandom(15));
  

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(random);
    console.log(userInput);
    if (userInput == random) {
        setMessage("You got it right, try guessing another one!");
        setRandom(getRandom(15));
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
      <button onClick={handleSubmit}>Submit</button>
    </form>

    <h1 className='message'>{message}</h1>

    </>

  );
}

