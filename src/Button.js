import React from 'react'

const Button = ({btnClick , user }) => {
  return (
    <div>
         <button onClick={btnClick}>Click Me </button>  

         <h1>Name:{user.name}</h1>
         <h2>Age:{user.age}</h2>
         <h3>City:{user.city}</h3>
    </div>   
  )
}

export default Button
