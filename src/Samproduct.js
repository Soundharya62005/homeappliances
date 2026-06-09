import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Samviewproduct from './Samviewproduct'
import Home from './Home'
import axios from 'axios'

const Samproduct = () => {

  // State
  const [products, setProducts] = useState([]);

  // Fetch Products 
  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      console.log(res.data);

      setProducts(res.data);

    } catch (err) {

      console.log(
        "Fetch Product Error",
        err
      );
    }
  };

  return (
    <>
      <Home />

      <div className="container">

        <div className="productsidebar">

          <h2>KS Home Appliances</h2>

          {/* Cooling Appliances */}
          <div className="sidebar-group">
            <select className="sidebar-select">
              <option>Cooling Appliances</option>
            </select>

            <div className="submenu">
              <a href="#" data-category="ac">Air Conditioners</a>
              <a href="#" data-category="aircooler">Air Coolers</a>
              <a href="#" data-category="fan">Fans</a>
              <a href="#" data-category="airpurifier">Air Purifiers</a>
            </div>
          </div>

          {/* Kitchen Appliances */}
          <div className="sidebar-group">
            <select className="sidebar-select">
              <option>Kitchen Appliances</option>
            </select>

            <div className="submenu">
              <a href="#" data-category="refrigerator">Refrigerators</a>
              <a href="#" data-category="mixer">Mixer Grinders</a>
              <a href="#" data-category="microwave">Microwaves</a>
              <a href="#" data-category="induction">Induction Stoves</a>
              <a href="#" data-category="chimney">Kitchen Chimneys</a>
              <a href="#" data-category="dishwasher">Dishwashers</a>
            </div>
          </div>

          {/* Cleaning Appliances */}
          <div className="sidebar-group">
            <select className="sidebar-select">
              <option>Cleaning Appliances</option>
            </select>

            <div className="submenu">
              <a href="#" data-category="washingmachine">Washing Machines</a>
              <a href="#" data-category="vacuum">Vacuum Cleaners</a>
              <a href="#" data-category="steamcleaner">Steam Cleaners</a>
            </div>
          </div>

          {/* Home Comfort */}
          <div className="sidebar-group">
            <select className="sidebar-select">
              <option>Home Comfort</option>
            </select>

            <div className="submenu">
              <a href="#" data-category="waterheater">Water Heaters</a>
              <a href="#" data-category="roomheater">Room Heaters</a>
              <a href="#" data-category="humidifier">Humidifiers</a>
            </div>
          </div>

          {/* Entertainment */}
          <div className="sidebar-group">
            <select className="sidebar-select">
              <option>Entertainment</option>
            </select>

            <div className="submenu">
              <a href="#" data-category="tv">Televisions</a>
              <a href="#" data-category="speaker">Speakers</a>
              <a href="#" data-category="hometheater">Home Theaters</a>
            </div>
          </div>

          {/* Personal Care */}
          <div className="sidebar-group">
            <select className="sidebar-select">
              <option>Personal Care</option>
            </select>

            <div className="submenu">
              <a href="#" data-category="hairdryer">Hair Dryers</a>
              <a href="#" data-category="trimmer">Trimmers</a>
              <a href="#" data-category="ironbox">Irons</a>
            </div>
          </div>

          {/* Lighting & Electrical */}
          <div className="sidebar-group">
            <select className="sidebar-select">
              <option>Lighting & Electrical</option>
            </select>

            <div className="submenu">
              <a href="#" data-category="led">LED Lights</a>
              <a href="#" data-category="inverter">Inverters</a>
              <a href="#" data-category="battery">Batteries</a>
            </div>
          </div>

        </div>

        {/* PRODUCTS */}
        <div className='product'>

          <Samviewproduct
            productdata={products}
          />

        </div>

      </div>
    </>
  )
}

export default Samproduct;