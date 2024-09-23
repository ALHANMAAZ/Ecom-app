import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import State from "./Context/State";
import Login from "./Pages/registration/Login";
import Signup from "./Pages/registration/Sigup";
import ProductInfo from "./Pages/ProductInfo";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/admin/Dashboard";
import NoPage from "./Pages/nopage/NoPage";
import Order from "./Pages/Order";
import AddProduct from "./Pages/admin/AddProduct";
import UpdateProduct from "./Pages/admin/UpdataProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allproducts from "./Pages/AllProducts";
function App() {
  return (
    <State>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />

          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </State>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

//admin
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "admin@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
