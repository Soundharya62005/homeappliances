
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminProducts.css";
import AdminNav from "./AdminNav";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${id}`,
        { status } 
      );

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id
            ? { ...order, status }
            : order
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      <AdminNav />

      <div className="products">
        <div className="product-header">
          <div className="totalProducts">
            <p>Total Orders</p>
            <h2>{orders.length}</h2>
          </div>
        </div>

        <div className="ProductsTable">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Shipping Address</th>
                <th>Phone Number</th>
                {/* <th>Category</th> */}
                <th>Product Name</th>
                {/* <th>Sub Category</th> */}
                <th>Price</th>
                <th>Qty</th>
                <th>Total Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="12">
                    No Orders Found
                  </td>
                </tr>
              ) : (
                orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>

                    <td>{order.username}</td>

                    <td>{order.shippingAddress}</td>

                    <td>{order.phone}</td>

                    {/* <td>{order.category}</td> */}

                    <td>{order.productName}</td>

                    {/* <td>{order.subcategory}</td> */}

                    <td>₹ {order.price}</td>

                    <td>{order.quantity}</td>

                    <td>₹ {order.totalAmount}</td>

                    <td>
                      {order.paymentMethod?.toUpperCase()}
                    </td>

                    <td>
                      <select
                        value={
                          order.status || "Pending"
                        }
                        onChange={(e) =>
                          handleStatusChange(
                            order._id,
                            e.target.value
                          )
                        }
                      >
                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Processing">
                          Processing
                        </option>

                        <option value="Delivered">
                          Delivered
                        </option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;

