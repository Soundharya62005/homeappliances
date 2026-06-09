
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import "./Checkout.css";

function Order() {
  const location = useLocation();
  const navigate = useNavigate();

  const { product, quantity } = location.state || {};

  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  if (!product) {
    return <h2>No Product Selected</h2>;
  }

  const totalAmount = product.price * quantity;

  const handlePlaceOrder = async () => {
    if (!shippingAddress.trim()) {
      alert("Please enter your shipping address");
      return;
    }

    try {
      const user = JSON.parse(
        localStorage.getItem("loginUser")
      );

      console.log("LOGIN USER:", user);

      const orderData = {
        userId: user?._id,
        username: user?.username,
        email: user?.email,
        phone: user?.phone,

        category: product.category,
        subcategory: product.subcategory,

        productName: product.productname,
        productBrand: product.subcategory,

        image: product.image,

        shippingAddress,

        price: product.price,
        quantity: quantity,
        totalAmount: totalAmount,

        paymentMethod: paymentMethod,

        status: "Pending",
      };

      console.log("ORDER DATA:", orderData);

      const response = await axios.post(
        "http://localhost:5000/api/orders",
        orderData
      );

      console.log("ORDER SAVED:", response.data);

      alert(
        `Order Placed Successfully!\nPayment Method: ${paymentMethod.toUpperCase()}`
      );

      navigate("/ConfirmOrder", {
        state: {
          order: response.data,
        },
      });

    } catch (error) {
      console.error("Order Error:", error);
      alert("Failed to place order");
    }
  };

  return (
    <>
      <Home />

      <div className="checkout-container">
        <div className="checkout-card">
          <h2>Checkout</h2>

          {/* Product Image */}
          <img
            src={`http://localhost:5000/uploads/${product.image}`}
            alt={product.productname}
            className="checkout-product-image"
          />

          {/* Product Name */}
          <h3 className="product-title">{product.productname}</h3>

          {/* Shipping Address */}
          <div className="shipping-section">
            <h3>Shipping Address</h3>

            <textarea
              placeholder="Enter complete shipping address"
              value={shippingAddress}
              onChange={(e) =>
                setShippingAddress(e.target.value)
              }
              rows="4"
            />
          </div>

          {/* Payment Method */}
          <div className="payment-section">
            <h3>Payment Method</h3>

            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Cash on Delivery (COD)
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="netbanking"
                checked={paymentMethod === "netbanking"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Net Banking
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="credit/debit card"
                checked={paymentMethod === "credit/debit card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              Credit/Debit Card
            </label>
          </div>

          {/* Order Summary */}
          <div className="summary-section">
            <h3>Order Summary</h3>

            <div className="order-summary">
              <div className="summary-row">
                <span>Product</span>
                <span>
                  <strong>{product.productname}</strong>
                </span>
              </div>

              <div className="summary-row">
                <span>Category</span>
                <span>
                  <strong>{product.category}</strong>
                </span>
              </div>

              <div className="summary-row">
                <span>Sub Category</span>
                <span>
                  <strong>{product.subcategory}</strong>
                </span>
              </div>

              <div className="summary-row">
                <span>Price</span>
                <span>₹ {product.price}</span>
              </div>

              <div className="summary-row">
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>

              <div className="summary-row">
                <span>Payment</span>
                <span>{paymentMethod.toUpperCase()}</span>
              </div>

              <hr />

              <div className="total-amount">
                <span>Total Amount</span>
                <span>₹ {totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Order;

