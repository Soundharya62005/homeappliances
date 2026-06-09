import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmOrder.css";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p className="success-message">
          Thank you for shopping with us.
          Your order has been confirmed and will be processed soon.
        </p>

        <div className="order-info">
          <h3>Order Details</h3>

          <p>
            <strong>Order Status:</strong> Confirmed
          </p>

          {/* <p>
            <strong>Payment Status:</strong> Pending / Paid
          </p> */}

          <p>
            <strong>Estimated Delivery:</strong> 3 - 5 Business Days
          </p>
        </div>

        <div className="button-group">
          <button
            className="shop-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>

          <button
            className="orders-btn"
            onClick={() => navigate("/MyOrders")}
          >
            View My Orders 
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;