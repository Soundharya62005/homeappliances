import { Link } from 'react-router-dom';
import './Signup.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from './logo1.jpg';


// import Swal from 'sweetalert2'

function Signup() {

  // const handleRegister = (e) => {
  //   e.preventDefault();

  //   const username = document.getElementById("username").value;
  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;
  //   const address = document.getElementById("address").value;
  //   const phone = document.getElementById("phone").value;

  //   let users = JSON.parse(localStorage.getItem("users")) || [];

  //   const newUser = {
  //     username: username,
  //     email: email,
  //     password: password,
  //     address: address,
  //     phone: phone,
  //   };

  //   users.push(newUser);

  //   localStorage.setItem("users", JSON.stringify(users));

  //   console.log(users);
  //   // alert("Registration Successfull");

  //   Swal.fire({
  //     title: "Success!",
  //     text: "Your Data Saved Successfully",
  //     icon: "success"
  //   });
  // };
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
  username: "",
  email: "",
  password: "",
  role: "user",
  address: "",
  phone: ""
});




  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users", userData);
      alert("Registered Successfully");
      navigate("/Signin");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to Data saved")
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


      <div className='signup'>
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <label>Username:</label>
          <input type="text" name="username" placeholder="Enter your Username" onChange={handleChange} /><br />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your Email" onChange={handleChange} /><br />

          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange} /><br />

          <label>Address:</label>
          <input type="text" name="address" placeholder="Enter your Address" onChange={handleChange} /><br />

          <label>Phone Number:</label>
          <input type="text" name="phone" placeholder="Enter your Phone Number" onChange={handleChange} /><br />

          <button type="submit">Register</button>
        </form>

        <p>Already have an account? <Link to="/Signin">Sign In</Link></p>
        <p><Link to="/">Back to Home</Link></p>

      </div>
    </>
  );
}

export default Signup;