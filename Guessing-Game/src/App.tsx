import { useState } from 'react'




function App() {
  const random = Math.round(Math.random() * 15 + 1)
  return (
    <>

    <h1>Guess the number I'm thinking of</h1>
    <form action="">
      <input type="text" placeholder='your number'/>
      <input type="button" value="submit"/>
    </form>


    </>

  );
}

export default App
