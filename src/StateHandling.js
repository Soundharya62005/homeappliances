import React, { useState } from 'react'

const StateHandling = () => {
    const [Login,SetLogin] = useState("");

    function handlestate(){
        SetLogin("Welcome to our page")
    }
    function handling(){
        SetLogin("Hello...")
    }

  return (
    <div>
      <h1>{Login}</h1>
        <button onClick={handlestate} style={{width:"70px",height:"30px"}}>Click</button>
        <button onClick={handling} style={{width:"70px",height:"30px"}}>button</button>
    </div>
  )
}

export default StateHandling
