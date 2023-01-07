import "./styles/App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./components/bienvenida";
import ConfirmarCarrito from "./components/ConfirmarCarrito";
import Form from "./components/form";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="carrito" element={<ConfirmarCarrito />} />
        <Route path="formulario" element={<Form />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
