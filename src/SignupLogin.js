import React, { useState } from 'react'

const SignupLogin = () => {
    const [text, setText] = useState("");

    function signupstate(){
        setText("Signup Page")
    }

    function loginstate(){
        setText("Login Page")
    }

    function register(){
        setText("Registered Successfully")
    }

    function login(){
        setText("Login Successful")
    }

  return (
    <>
    <h1>{text}</h1>

    {/* Signup Form */}
    <div>
        <h2>Registration Form</h2>
        <label>Username</label>
        <input type="text" placeholder="Enter your Username" /><br />
        
        <label>Password</label>
        <input type="password" placeholder="Enter your Password" /><br />
        
        <label>Email Id</label>
        <input type="text" placeholder="Enter your Email Id" /><br />
        
        <label>Address</label>
        <input type="text" placeholder="Enter your Address" /><br />
        
        <label>Phone Number</label>
        <input type="text" placeholder="Enter your Phone Number" /><br />
        
        <button onClick={register}>Register</button>
    </div>

    {/* Login Form */}
    <div>
        <h2>Login Form</h2>
        <label>Username</label>
        <input type="text" placeholder="Enter your Username" /><br />
        
        <label>Password</label>
        <input type="password" placeholder="Enter your Password" /><br />
        
        <button onClick={login}>Login</button>
    </div>

    <div>
      <button onClick={signupstate}>Signup</button>
      <button onClick={loginstate}>Login</button>
    </div>
    </>
  )
}

export default SignupLogin