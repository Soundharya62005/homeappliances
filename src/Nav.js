import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Samviewproduct from './Samviewproduct'
import Home from './Home'
import axios from 'axios'

import banner2 from './banner2.jpg'
import tv from './tele.jpg'
import fridge from './refridge.jpg'
import ac from './ac.jpg'
import wash from './wash.jpg'
import mixer from './mixer.jpg'
import oven from './oven.jpg'

const Nav = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/products"
            );

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

            {/* HERO BANNER */}

            <div className="hero-banner">

                <img src={banner2} alt="main banner" />

                <div className="hero-content">

                    <span>NEW ARRIVALS 2026</span>

                    <h1>
                        Smart Home <br />
                        Appliances
                    </h1>

                    <p>
                        Discover modern electronics and premium
                        appliances for your dream home.
                    </p>

                    <Link
                        to="/Samproduct"
                        className="shop-btn"
                    >
                        Shop Now
                    </Link>

                </div>

            </div>

            {/* MOVING APPLIANCE SLIDER */}

            <div className="appliance-slider">

                <div className="slider-track">

                    <div className="appliance-item">
                        <img src={tv} alt="tv" />
                        <p>Smart TV</p>
                    </div>

                    <div className="appliance-item">
                        <img src={fridge} alt="fridge" />
                        <p>Refrigerator</p>
                    </div>

                    <div className="appliance-item">
                        <img src={ac} alt="ac" />
                        <p>Air Conditioner</p>
                    </div>

                    <div className="appliance-item">
                        <img src={wash} alt="wash" />
                        <p>Washing Machine</p>
                    </div>

                    <div className="appliance-item">
                        <img src={mixer} alt="mixer" />
                        <p>Mixer Grinder</p>
                    </div>

                    <div className="appliance-item">
                        <img src={oven} alt="oven" />
                        <p>Microwave Oven</p>
                    </div>

                    {/* Duplicate for infinite slider */}

                    <div className="appliance-item">
                        <img src={tv} alt="tv" />
                        <p>Smart TV</p>
                    </div>

                    <div className="appliance-item">
                        <img src={fridge} alt="fridge" />
                        <p>Refrigerator</p>
                    </div>

                    <div className="appliance-item">
                        <img src={ac} alt="ac" />
                        <p>Air Conditioner</p>
                    </div>

                    <div className="appliance-item">
                        <img src={wash} alt="wash" />
                        <p>Washing Machine</p>
                    </div>

                    <div className="appliance-item">
                        <img src={mixer} alt="mixer" />
                        <p>Mixer Grinder</p>
                    </div>

                    <div className="appliance-item">
                        <img src={oven} alt="oven" />
                        <p>Microwave Oven</p>
                    </div>

                </div>

            </div>

            {/* FEATURED PRODUCTS */}

            <section className="featured-products">

                <div className="featured-heading">

                    <h2>Featured Products</h2>

                    <p>
                        Explore our latest and most popular
                        home appliances
                    </p>

                </div>

                <div className="featured-grid">

                    {products.length === 0 ? (

                        <h3>No Products Available</h3>

                    ) : (

                        products.slice(0, 8).map((product) => (

                            <div
                                className="featured-card"
                                key={product._id}
                            >

                                <img
                                    src={`http://localhost:5000/uploads/${product.image}`}
                                    alt={product.productname}
                                />

                                <div className="featured-info">

                                    <h3>
                                        {product.productname}
                                    </h3>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </section>

        </>
    );
}

export default Nav;