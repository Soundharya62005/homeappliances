import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("loginUser")
    );

    if (!user) return;

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/orders/user/${user._id}`
        );

        setOrders(res.data);
      } catch (err) {
        console.log(err); 
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2 className="orders-title">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="no-orders">
          No orders found
        </p>
      ) : (
        <div className="orders-grid">
          {orders.map((product) => (
            <div
              key={product._id}
              className="order-card"
            >
              <div className="order-image">
                <img
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.productName}
                />
              </div>

              <div className="order-details">
                <h3>{product.productName}</h3>

                <p>
                  <span>Brand:</span>{" "}
                  {product.subcategory}
                </p>

                <p>
                  <span>Price:</span> ₹
                  {product.price}
                </p>

                <p>
                  <span>Quantity:</span>{" "}
                  {product.quantity}
                </p>

                <p>
                  <span>Total:</span> ₹
                  {product.totalAmount}
                </p>

                <p>
                  <span>Payment:</span>{" "}
                  {product.paymentMethod}
                </p>

                <p>
                  <span>Address:</span>{" "}
                  {product.shippingAddress}
                </p>

                <p>
                  <span>Status:</span>{" "}
                  <strong
                    style={{
                      color:
                        product.status ===
                        "Delivered"
                          ? "green"
                          : product.status ===
                            "Processing"
                          ? "orange"
                          : "red",
                    }}
                  >
                    {product.status ||
                      "Pending"}
                  </strong>
                </p>

                <p>
                  <span>Order Date:</span>{" "}
                  {new Date(product.orderDate).toLocaleDateString()}
                </p>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;

