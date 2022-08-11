import "./styles/App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./pages/bienvenida";
import ConfirmarCarrito from "./components/ConfirmarCarrito";
import Form from './components/form'
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Bienvenida />} />
        <Route exact path="carrito" element={<ConfirmarCarrito />} />
        <Route exact path="formulario" element={<Form />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
