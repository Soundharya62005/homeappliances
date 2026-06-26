import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import logo from "./logo1.jpg";

function Cart() {

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(
    localStorage.getItem("loginUser")
  );

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(

        `http://localhost:5000/api/cart/${user._id}`
      );

      setCart(res.data);

    } catch (err) {
      console.log(err);
      alert("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {     
    try {

      await axios.delete(
        `http://localhost:5000/api/cart/${id}`
      );

      setCart(cart.filter(item => item._id !== id));

      alert("Removed Successfully");

    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="top-header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>KS HOME APPLIANCES</h2>
        </div>
      </div>

      <div className="Cart">

        <h1>Your Cart</h1>

        {loading ? (
          <p>Loading...</p>
        ) : cart.length === 0 ? (
          <p>No products in cart</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item._id} className="cart-item">

                <img
                  src={`http://localhost:5000/uploads/${item.image}`}
                  width="100"
                  alt=""
                />

                <div>
                  <h3>{item.productname}</h3>
                  <p>₹ {item.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>

                <button onClick={() => removeItem(item._id)}>
                  Remove
                </button>

              </div>
            ))}

            <h2>Total: ₹{total}</h2>
          </>
        )}

      </div>
    </>
  );
}

export default Cart;