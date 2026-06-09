import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'
import logo from './logo1.jpg';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'

const Signin = () => {

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;

  //   let users = JSON.parse(localStorage.getItem("users")) || [];

  //   let isValid = false;

  //   for (let i = 0; i < users.length; i++) {
  //     if (users[i].email === email && users[i].password === password) {

  //       localStorage.setItem("loginUsers", JSON.stringify(users[i]));

  //       isValid = true;
  //       break;
  //     }
  //   }

  //   if (isValid) {
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Login Successfully",
  //       icon: "success"
  //     });
  //   } else {
  //     Swal.fire({
  //       title: "Oops!",
  //       text: "Invalid Email or Password",
  //       icon: "error"
  //     });
  //   }
  // };
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const res = await axios.post(
      "http://localhost:5000/api/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "loginUser",
      JSON.stringify(res.data)
    );

    console.log("LOGIN USER:", res.data);

    Swal.fire({
      title: "Success!",
      text: "Login Successfully",
      icon: "success",
    });

    if (res.data.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }

  } catch (err) {
    Swal.fire({
      title: "Oops!",
      text: "Invalid Email or Password",
      icon: "error",
    });
  }
};
  return (
    <>
      <div className='top-header'>
        <div className='logo'>
          <img src={logo} alt="logo" />
          <h2>KS HOME APPLIANCES</h2>
        </div>

        {/* <input type="text" placeholder='Search...' /> */}
      </div>

      {/* <div className='navbar'>
        <Link to="/Home"><i className="fa-solid fa-house"></i> Home</Link>
        <Link to="/AboutUs"><i className="fa-solid fa-circle-info"></i> About</Link>
        <Link to="/Samproduct"><i className="fa-solid fa-box"></i> Products</Link>
        <Link to="/Contact"><i className="fa-solid fa-phone"></i> Contact</Link>
      </div> */}


      <div className='signin'>
        <h2>Login Form</h2>

        <form onSubmit={handleLogin}>

          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" required /><br />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" required /><br />

          <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    </>
  );
}

export default Signin;