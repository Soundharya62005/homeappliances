import React, { useEffect, useState } from "react";
import axios from "axios";
import Samviewproduct from "./Samviewproduct";
import "./Samproduct.css";
import Home from "./Home";

const Samproduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");

      console.log("ALL PRODUCTS:", res.data);

      setProducts(res.data || []);
      setFilteredProducts(res.data || []);
    } catch (err) {
      console.log("Fetch Product Error", err);
    }
  };
 
  const filterByProduct = (productType) => {
    const filtered = products.filter(
      (p) => 
        p.productname &&
        p.productname.toLowerCase() === productType.toLowerCase()
    );

    setFilteredProducts(filtered);
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  return (
    <>
      <Home />

      <div className="container">

        <div className="productsidebar">

          <h2>KS Home Appliances</h2>

          <button
            className="all-products-btn"
            onClick={showAllProducts}
          >
            All Products
          </button>

          {/* Cooling Appliances */}

          <div className="category-wrapper">

            <button className="category-title">
              Cooling Appliances
            </button>

            <div className="category-items">

              <button onClick={() => filterByProduct("AC")}>
                Air Conditioners
              </button>

              <button onClick={() => filterByProduct("Air Cooler")}>
                Air Coolers 
              </button>

              <button onClick={() => filterByProduct("Fan")}>
                Fans
              </button>

            </div>

          </div>

          {/* Kitchen Appliances */}

          <div className="category-wrapper">

            <button className="category-title">
              Kitchen Appliances
            </button>

            <div className="category-items">

              <button onClick={() => filterByProduct("Refrigerator")}>
                Refrigerators
              </button>

              <button onClick={() => filterByProduct("Mixer Grinders")}>
                Mixer Grinders
              </button>

              <button onClick={() => filterByProduct("Microwaves")}>
                Microwaves 
              </button>

              <button onClick={() => filterByProduct("Induction Stove")}>
                Induction Stoves
              </button>

              <button onClick={() => filterByProduct("Dishwasher")}>
                Dishwashers
              </button>

            </div>

          </div>

          {/* Cleaning Appliances */}

          <div className="category-wrapper">

            <button className="category-title">
              Cleaning Appliances
            </button>

            <div className="category-items">

              <button onClick={() => filterByProduct("Washing Machine")}>
                Washing Machines
              </button>

              <button onClick={() => filterByProduct("Vaccum Cleaner")}>
                Vacuum Cleaners
              </button>

              <button onClick={() => filterByProduct("Steam Cleaner")}>
                Steam Cleaners
              </button>

            </div>

          </div>

          {/* Home Comfort */}

          <div className="category-wrapper">

            <button className="category-title">
              Home Comfort
            </button>

            <div className="category-items">

              <button onClick={() => filterByProduct("Water Heater")}>
                Water Heaters
              </button>

              <button onClick={() => filterByProduct("Room Heater")}>
                Room Heaters
              </button>

            </div>

          </div>

          {/* Entertainment */}

          <div className="category-wrapper">

            <button className="category-title">
              Entertainment
            </button>

            <div className="category-items">

              <button onClick={() => filterByProduct("Television")}>
                Televisions
              </button>

              <button onClick={() => filterByProduct("Speaker")}>
                Speakers
              </button>

              <button onClick={() => filterByProduct("Home Theater")}>
                Home Theaters
              </button>

            </div>

          </div>

          {/* Personal Care */}

          <div className="category-wrapper">

            <button className="category-title">
              Personal Care
            </button>

            <div className="category-items">

              <button onClick={() => filterByProduct("Hair Dryer")}>
                Hair Dryers
              </button>

              <button onClick={() => filterByProduct("Iron Box ")}>
                Irons
              </button>

            </div>

          </div>

          {/* Lighting & Electrical */}

          <div className="category-wrapper">

            <button className="category-title">
              Lighting & Electrical
            </button>

            <div className="category-items">

              <button onClick={() => filterByProduct("LED Lights")}>
                LED Lights
              </button>

              <button onClick={() => filterByProduct("Inverter")}>
                Inverters
              </button>

            </div>

          </div>

        </div>

        {/* Products */}
        <div className="product">
          <Samviewproduct productdata={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default Samproduct;