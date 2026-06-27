import { Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <>
    <Toaster />

      <Routes>
         
         <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about/us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       <Route path="/perfume/:id" element={<PerfumeDetail />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/dashboard/manage/users" element={<ManageUsers />} /> 
        <Route path="/admin/dashboard/manage/menu" element={<ManageMenu />} /> 
        <Route path="/massege" element={<Massege />} />
      </Routes>
    </>
  );
}

export default App;