// import React from 'react';
// import { Link } from 'react-router-dom';
import './Add.css'
import React, { useState } from "react";
import axios from "axios";
import AdminNav from './AdminNav';

// import Swal from 'sweetalert2'

function AddUsers (){

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
  // };

  // Swal.fire({
  //     title: "Success!",
  //     text: "Your Data Saved Successfully",
  //     icon: "success"
  //   });

    const [userData,setUserData] = useState({
      username: "",
      email: "",
      password: "",
      address: "",
      phone: ""
    })


    const handleChange = (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

       try {
        const res = await axios.post("http://localhost:5000/api/users",userData);   
        alert("Your Data is stored successfully")
        console.log(res.data);
       } catch (err) {
        console.error(err);
        alert("Failed to Data saved")
       }
    }; 

  return (
    <>
      <AdminNav />
       
      <div className="addproducts">

        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>

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

        {/* <p>Already have an account? <Link to="/Signin">Sign In</Link></p> */}
        {/* <p><Link to="/admin">Back to Home</Link></p> */}

      </div>
    </>
  );
}

export default AddUsers;