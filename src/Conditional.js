import React from 'react'
import Login from './Login';
import Signup from './Signup';

const Conditional = () => {
    var num = 30;
    var content = "Login";
  return (
    <div>
    {num > 20 ? "lessthan 20" : "greaterthan 20"}
    {content == "Login" ? <Login/> : <Signup/>}
    </div>
  )
}  

export default Conditional
