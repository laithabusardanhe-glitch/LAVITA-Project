import React, { useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Fab, Avatar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "./Componentes/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import PerfumeDetail from "../src/Componentes/PerfumeDetail/PerfumeDetail.jsx";
import Register from "./Componentes/Auth/Register.jsx";
import { Toaster } from "react-hot-toast";
import Login from "./Componentes/Auth/Login.jsx";
import AdminDashboard from "../Pages/Admin/AdminDashboard.jsx";
import AdminProfile from "../Pages/Admin/AdminProfile.jsx";
import ManageUsers from "../Pages/Admin/ManageUsers.jsx";
import ManageMenu from "../Pages/Admin/ManageMenu.jsx";
import AboutUs from "../Pages/AboutUs/AboutUs.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Massege from "../Pages/Admin/Massege.jsx";
import CartPage from "./Componentes/CartPage/CartPage.jsx";
import { UserContext } from "./Context/UserContext.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const lastItem = cart[cart.length - 1];

  return (
    <>
      <Toaster />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route
          path="/perfume/:id"
          element={<PerfumeDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              totalPrice={totalPrice}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/about/us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route
          path="/admin/dashboard/manage/users"
          element={<ManageUsers />}
        />
        <Route
          path="/admin/dashboard/manage/menu"
          element={<ManageMenu />}
        />
        <Route path="/massege" element={<Massege />} />
      </Routes>

      {currentUser?.role === "user" && (
        <Fab
          color="primary"
          aria-label="cart"
          onClick={() => navigate("/cart")}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
          }}
        >
          {lastItem ? (
            <Avatar src={lastItem.image} alt={lastItem.name} />
          ) : (
            <ShoppingCartIcon />
          )}
        </Fab>
      )}
    </>
  );
}

export default App;