import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Nav from './Nav';
import Samproduct from './Samproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import UserProfile from './UserProfile';
import AboutUs from './AboutUs';
import Contact from './Contact';
import AdminIndex from './Admin/AdminIndex';
import AdminProducts from './Admin/AdminProducts';
import EditProduct from './Admin/EditProduct';
import EditCategory from './Admin/EditCategory';
import EditUser from './Admin/EditUser';
import EditRole from './Admin/EditRole';
import EditSubcategory from './Admin/EditSubcategory';
import AdminBanner from './Admin/AdminBanner';
import AdminCategories from './Admin/AdminCategories';
import AdminRole from './Admin/AdminRole';
import AdminSubcategory from './Admin/AdminSubcategory';
import AdminOrders from './Admin/AdminOrders';
import AdminUsers from './Admin/AdminUsers';
import AddUsers from './Admin/AddUsers'; 
import AddRole from './Admin/AddRole';
import AddProducts from './Admin/AddProducts';
import AddBanner from './Admin/AddBanner';
import AddCategories from './Admin/AddCategories';
import AddSubcategory from './Admin/AddSubcategory';
import Buynow from './Buynow';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import CheckoutPage from './CheckoutPage';
import ConfirmOrder from './ConfirmOrder';
import MyOrders from './MyOrders';
import UserSettings from './UserSettings';


// import Hookusestate from './Hookusestate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home />  */}
    {/* <Eg/> */}
    {/* <Example/> */}
    {/* <ConNav/> */}
    {/* <Nav/> */}
    {/* <Product/> */}
    {/* <Samproduct/> */}
    {/* <StateHandling/> */}
    {/* <Conditional/> */}
    {/* <Hookusestate/> */}
    {/* <Conditionalmap/> */}
    {/* <SignupLogin/> j
    
    {/* <Usestate/> */}

    <BrowserRouter>
      {/* <ConNav /> */}
      <Routes>
        
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Nav />} />
        <Route path="/admin" element={<AdminIndex />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/editCategory/:id" element={<EditCategory />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="editRole/:id" element={<EditRole />} />
        <Route path="/editsubcategory" element={<EditSubcategory />} />
        <Route path="/adminBanner" element={<AdminBanner />} />
        <Route path="/adminCategories" element={<AdminCategories />} />
        <Route path="/adminSubcategory" element={<AdminSubcategory />} />
        <Route path="adminOrders" element={<AdminOrders />} />
        <Route path="adminUsers" element={<AdminUsers />} />
        <Route path="adminRole" element={<AdminRole />} />
        <Route path="addProducts" element={<AddProducts />} />
        <Route path="addBanner" element={<AddBanner />} />
        <Route path="addCategories" element={<AddCategories />} />
        <Route path="addSubcategory" element={<AddSubcategory />} />
        <Route path="addUsers" element={<AddUsers />} />
        <Route path="addRole" element={<AddRole />} />
        {/* <Route path="/ConNav" element={<ConNav />} /> */}
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/ShowRegistors" element={<ShowRegistors/>} /> */}
        <Route path="/Samproduct" element={<Samproduct />} /> 
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/Buynow" element={<Buynow />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} /> 
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
        <Route path="/MyOrders" element={<MyOrders />} />
        <Route path="/UserSettings" element={<UserSettings />} />
      </Routes>
    </BrowserRouter>
    {/* <SampleForm/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
