import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./UserProfile.css";
import logo from "./logo1.jpg";

const UserProfile = () => {
const navigate = useNavigate();

const currentUser = JSON.parse(
localStorage.getItem("loginUser")
);

const handleLogout = () => {
localStorage.removeItem("loginUser");


Swal.fire({
  title: "Success!",
  text: "Logout Successfully",
  icon: "success"
});

navigate("/Signin");

};

if (!currentUser) {
return ( <div className="profile-container"> <h2>Please Login First</h2> <Link to="/Signin">Go To Login</Link> </div>
);
}

return (
<> <div className="top-header"> 
    <div className="logo"> 
        <img src={logo} alt="logo" /> 
        <h2>KS HOME APPLIANCES</h2> 
        </div> 
    </div>


  <div className="profile-container">

    <div className="profile-card">

      <div className="profile-icon">
        <i className="fa-solid fa-circle-user"></i>
      </div>

      <h2>{currentUser.username}</h2>

      <div className="profile-details">

        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>

        <p>
          <strong>Role:</strong> {currentUser.role}
        </p>

        <p>
          <strong>Address:</strong> {currentUser.address}
        </p>

        <p>
          <strong>Phone:</strong> {currentUser.phone}
        </p>

      </div>

      <div className="profile-buttons">

        <Link to="/">
          <button>Back Home</button>
        </Link>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>

  </div>
</>

);
};

export default UserProfile;
