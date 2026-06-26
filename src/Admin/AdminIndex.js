import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import "./AdminIndex.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const AdminIndex = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [usersRes, productsRes, ordersRes] = await Promise.all([
        axios.get("http://localhost:5000/api/users"),
        axios.get("http://localhost:5000/api/products"),
        axios.get("http://localhost:5000/api/orders"),
      ]);

      setUsers(usersRes.data);
      setProducts(productsRes.data);
      setOrders(ordersRes.data);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    }
  };

  // TOTAL SALES
  const totalSales = orders.reduce((sum, order) => {
    return sum + Number(order.totalAmount || 0);
  }, 0);

  // PIE CHART DATA
  const pieData = [
    { name: "Users", value: users.length },
    { name: "Products", value: products.length },
    { name: "Orders", value: orders.length },
    { name: "Sales", value: totalSales / 1000 },
  ];

  const COLORS = [
    "#6366F1",
    "#14B8A6",
    "#F59E0B",
    "#EC4899",
  ];

  // LINE CHART (MONTHLY SALES)
  const monthlySalesData = [
  { month: "Jan", sales: 0 },
  { month: "Feb", sales: 0 },
  { month: "Mar", sales: 0 },
  { month: "Apr", sales: 0 },
  { month: "May", sales: 0 },
  { month: "Jun", sales: 0 },
  { month: "Jul", sales: 0 },
  { month: "Aug", sales: 0 },
  { month: "Sep", sales: 0 },
  { month: "Oct", sales: 0 },
  { month: "Nov", sales: 0 },
  { month: "Dec", sales: 0 },
];

orders.forEach((order) => {
  if (!order.createdAt) return;

  const monthIndex = new Date(order.createdAt).getMonth();

  monthlySalesData[monthIndex].sales += Number(
    order.totalAmount || 0
  );
});

  return (
    <>
      <AdminNav />

      <div className="admin-layout">
        <div className="sidebar-space"></div>

        <div className="content">

          {/* CARDS */}
          <div className="cards">
            <div className="card-users">
              <i className="fa-solid fa-users card-icon"></i>
              <h2>Users</h2>
              <h3>{users.length}</h3>
            </div>

            <div className="card-products">
              <i className="fa-solid fa-box-open card-icon"></i>
              <h2>Products</h2>
              <h3>{products.length}</h3>
            </div>

            <div className="card-orders">
              <i className="fa-solid fa-cart-shopping card-icon"></i>
              <h2>Orders</h2>
              <h3>{orders.length}</h3>
            </div>

            <div className="card-sales">
              <i className="fa-solid fa-chart-line card-icon"></i>
              <h2>Total Sales</h2>
              <h3>₹{totalSales}</h3>
            </div>
          </div>

          {/* PIE + LINE CHART */}
          <div  n                                                                                                                                                                                                                                               camunjw 
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >

            {/* PIE CHART */}
            <div
              style={{
                flex: 1,
                minWidth: "400px",
                height: "400px",
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                Dashboard Overview
              </h2>

              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* LINE CHART */}
            <div
              style={{
                flex: 1,
                minWidth: "500px",
                height: "400px",
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                Monthly Sales Report
              </h2>

              <ResponsiveContainer width="100%" height="90%">
                <LineChart data={monthlySalesData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip
                    formatter={(value) => [`₹${value}`, "Sales"]}
                  />

                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#6366F1"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default AdminIndex;