import { Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import PerfumeDetail from "../src/Componentes/PerfumeDetail/PerfumeDetail.jsx";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
         <Route path="/perfume/:id" element={<PerfumeDetail />} />
      </Routes>
    </>
  );
}

export default App;