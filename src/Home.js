import React, { useState } from 'react';

import './App.css';

import { Link, useNavigate } from 'react-router-dom';

import logo from './logo1.jpg';

const Home = () => {

  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  // const user = JSON.parse(localStorage.getItem('user'));

  const user = JSON.parse(
    localStorage.getItem("loginUser")
  );



  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("loginUser");

    navigate("/Signin");
  };



  return (

    <>

      {/* HEADER */}
      <div className="top-header">

        <div className="logo">

          <img src={logo} alt="logo" />

          <h2>KS HOME APPLIANCES</h2>

        </div>

        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
        />

      </div>


      {/* NAVBAR */}
      <div className="navbar">

        <div className="nav-left">

          <Link to="/">Home</Link>

          <Link to="/aboutus">About</Link>

          <Link to="/samproduct">Products</Link>

          <Link to="/contact">Contact</Link>

        </div>



        <div className="nav-right">

          {/* CART */}
          <Link to="/cart" className="icon-link">

            <i className="fa-solid fa-cart-shopping"></i>

            <span>Cart</span>

          </Link>



          {/* PROFILE */}
          <div className="profile-section">

            <div
              className="icon-link"
              onClick={() => setShowDropdown(!showDropdown)}
            >

              <i className="fa-regular fa-circle-user"></i>

              <span>
                {user ? user.username : "Profile"}
              </span>

            </div>



            {showDropdown && (
              <div className="dropdown-menu">

                {!user ? (

                  <Link to="/Signin">
                    Login
                  </Link>

                ) : (

                  <>
                    <Link to="/UserProfile">
                      My Profile
                    </Link>

                    <Link to="/MyOrders">
                      My Orders
                    </Link>

                    <Link to="/UserSettings">
                      Settings
                    </Link>

                    <button onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

    </>

  );

};

export default Home;