import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import './UserSettings.css';
import logo from "./logo1.jpg";
import { useNavigate } from "react-router-dom";

const Settings = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loginUser"));

  const [activeTab, setActiveTab] = useState("security");

  // SECURITY
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // NOTIFICATIONS
  const [notifications, setNotifications] = useState({
    orders: true,
    offers: false,
    sms: true
  });

  // DARK MODE
  const [darkMode, setDarkMode] = useState(false);

  // HANDLE PASSWORD CHANGE
  const handlePasswordChange = async () => {
    // Validation checks
    if (!passwords.currentPassword || !passwords.newPassword || !passwords.confirmPassword) {
      return Swal.fire("Error", "All fields are required", "error");
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      return Swal.fire("Error", "New passwords do not match", "error");
    }

    if (passwords.newPassword.length < 6) {
      return Swal.fire("Error", "Password must be at least 6 characters", "error");
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/password/${user._id}`, 
        {
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword,
          confirmPassword: passwords.confirmPassword
        }
      );

      Swal.fire("Success", response.data.message || "Password updated successfully", "success"); 

      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });

    } catch (err) {
      const errorMessage = err.response?.data?.message || "Password update failed. Please check your current password and try again.";
      Swal.fire("Error", errorMessage, "error");
      console.error("Password update error:", err); 
    }
  };

  // LOGOUT       
  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    navigate("/Signin");
  };

  // DELETE ACCOUNT
  const handleDelete = async () => {
    const confirm = window.confirm("Delete account permanently?");

    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${user._id}`);

      localStorage.removeItem("loginUser");
  
      Swal.fire("Deleted", "Account removed", "success");

      navigate("/Signin");

    } catch (err) {
      Swal.fire("Error", "Delete failed", "error");
    }
  };
 
  return (

    <>
    <div className="top-header"> 
    <div className="logo"> 
        <img src={logo} alt="logo" /> 
        <h2>KS HOME APPLIANCES</h2> 
        </div> 
    </div>

    <div className={`settings-container ${darkMode ? "dark" : ""}`}>

      <h2>Settings</h2>

      {/* TABS */}
      <div className="tabs">
        <button onClick={() => setActiveTab("security")}>Security</button>
        <button onClick={() => setActiveTab("notifications")}>Notifications</button>
        <button onClick={() => setActiveTab("appearance")}>Appearance</button>
        <button onClick={() => setActiveTab("orders")}>Orders</button>
        <button onClick={() => setActiveTab("account")}>Account</button>
      </div>

      {/* SECURITY */}
      {activeTab === "security" && (
        <div className="tab-box"> 

          <h3>Change Password</h3>

          <input
            type="password"
            placeholder="Current Password"
            value={passwords.currentPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, currentPassword: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, newPassword: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={passwords.confirmPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, confirmPassword: e.target.value })
            }
          />

          <button onClick={handlePasswordChange}>
            Update Password
          </button>

        </div>
      )}

      {/* NOTIFICATIONS */}
      {activeTab === "notifications" && (
        <div className="tab-box">

          <h3>Notification Settings</h3>

          <label>
            <input
              type="checkbox"
              checked={notifications.orders}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  orders: !notifications.orders
                })
              }
            />
            Order Updates
          </label>

          <label>
            <input
              type="checkbox"
              checked={notifications.offers}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  offers: !notifications.offers
                })
              }
            />
            Offers
          </label>

          <label>
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  sms: !notifications.sms
                })
              }
            />
            SMS Alerts
          </label>

        </div>
      )}

      {/* APPEARANCE */}
      {activeTab === "appearance" && (
        <div className="tab-box">

          <h3>Appearance</h3>

          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            Dark Mode
          </label>
 
        </div>
      )}

      {/* ORDERS */}
      {activeTab === "orders" && (
        <div className="tab-box">

          <h3>Order Preferences</h3>

          <p>Default Quantity: 1</p>
          <p>Auto reorder: OFF</p>
          <p>Show only in-stock products: ON</p>

        </div>
      )}

      {/* ACCOUNT */}
      {activeTab === "account" && (
        <div className="tab-box">

          <h3>Account Actions</h3>

          <button onClick={handleLogout}>
            Logout
          </button>

          <button
            style={{ background: "red", color: "white" }}
            onClick={handleDelete}>
            Delete Account
          </button>

        </div>
      )}

    </div>

    </>
  );
};

export default Settings;