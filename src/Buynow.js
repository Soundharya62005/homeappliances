import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Home from './Home';

const Buynow = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!product) {
      alert("No product selected!");
      return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const landmark = document.getElementById("landmark").value;

    const newOrder = {
      id: product.id,
      productname: product.productname,
      price:product.price, 
      name,
      email,
      address,
      phone,
      landmark
    };

    let oldOrders = JSON.parse(localStorage.getItem("orderDetails"));

    if (!Array.isArray(oldOrders)) {
      oldOrders = [];
    }

    oldOrders.push(newOrder);

    localStorage.setItem("orderDetails", JSON.stringify(oldOrders)); 
    // let oldSales = JSON.parse(localStorage.getItem("sales"));
 
    // if (!oldSales) {
    //   oldSales = 0;
    // }

    // const updatedSales = oldSales + parseInt(product.price);

    // localStorage.setItem("sales", JSON.stringify(updatedSales));

    alert("Order stored successfully!");
  };

  return (
    <>
      {/* <div className='home'>
        <h2>KS HOME APPLIANCES</h2>
        <input type="text" placeholder='search...' />
      </div>

      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Samproduct">Products</Link>
        <Link to="/Contact">Contact Us</Link>
      </div> */}

      <Home />

      <div className='signup'>
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <label>Name:</label>
          <input type="text" id="name" required /><br />

          <label>Email:</label>
          <input type="email" id="email" required /><br />

          <label>Address:</label>
          <input type="text" id="address" required /><br />

          <label>Phone:</label>
          <input type="text" id="phone" required /><br />

          <label>Landmark:</label>
          <input type="text" id="landmark" /><br />

          <button type="submit">Submit</button>

          <button>
            <Link to="/">Back</Link>
          </button>

        </form>
      </div>
    </>
  );
};

export default Buynow;