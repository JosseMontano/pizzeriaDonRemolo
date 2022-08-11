import React, { useContext } from "react";
import BotonContinuarItems from "../ConfirmarCarrito/BotonContinuarItems";
import "../../styles/form/index.css";
import HeaderCarrito from "../ConfirmarCarrito/HeaderCarrito";
import FormValidate from "./formValidate";

const index = () => {
  return (
    <>
      <HeaderCarrito />
      <div className="containerFatherForm">
        <h2>Datos del envio</h2>
        <p>Ahora te vamos a pedir que nos confirmes algunos datos sobre vos.</p>
        <FormValidate />
      </div>
      <BotonContinuarItems
        sendWhatsapp={false}
        to={"/Carrito"}
        text={"Continuar con el pedido"}
      />
    </>
  );
};

export default index;
