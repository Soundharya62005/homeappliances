import React from 'react'
import './AdminIndex.css'
import { Link } from 'react-router-dom'
import logo from './logo1-removebg-preview.png';
import bgimg from './bgimg.jpg'

const AdminNav = () => {
  return (
    <>

    {/* // <div
    //   className='admin-container'
    //   style={{
    //     backgroundImage: `url(${bgimg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     minHeight: '100vh'
    //   }}
    // > */}

      {/* Navbar */}
      <div className='top-header'>
        <div className='logo'>
          <img src={logo} alt="logo" />
          <h2>KS HOME APPLIANCES</h2>
        </div>
      </div>

      {/* Sidebar */}
      <div className='sidebar'>
        <h3>Admin Panel</h3>

        <div className='Dashboard'>
          <button>
            <Link to="/admin">
              <i className="fa-solid fa-gauge"></i>Dashboard
            </Link>
          </button>
        </div>

        <div className='dropdown'>
          <button>
            <Link to="/AdminProducts">
              <i className="fa-solid fa-box"></i>Products
            </Link>
          </button>
        </div>

        <div className='dropdown'>
          <button>
            <Link to="/AdminCategories">
              <i className="fa-solid fa-list"></i>Categories
            </Link>
          </button>
        </div>

        <div className='dropdown'>
          <button>
            <Link to="/AdminUsers">
              <i className="fa-solid fa-users"></i>Users
            </Link>
          </button>
        </div>

        <div className='dropdown'>
          <button>
            <Link to="/AdminRole">
              <i className="fa-solid fa-users"></i>Role
            </Link>
          </button>
        </div>

        <div className='dropdown'>
          <button>
            <Link to="/AdminOrders">
              <i className="fa-solid fa-cart-shopping"></i>Orders
            </Link>
          </button>
        </div>

      </div>

  </>
  )
}

export default AdminNav