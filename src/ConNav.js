import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const ConNav = () => {
    return (
        <>
        <div className='navbar'>
            <Link to="/Home">Home</Link> 
            <Link to="/About">About</Link> 
            <Link to="/Samproduct">Products</Link>
            <Link to="/Signup">Sign Up</Link>
            <Link to="/Signin">Sign In</Link>
            <Link to="/Contact">Contact Us</Link>
        </div>
        </>
    )
}

export default ConNav