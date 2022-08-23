import React, { useContext, useEffect, useState } from "react";
import BotonContinuarItems from "../ConfirmarCarrito/BotonContinuarItems";
import "../../styles/form/index.css";
import HeaderCarrito from "../ConfirmarCarrito/HeaderCarrito";
import FormValidate from "./formValidate";
import { useSelector } from "react-redux";
const Index = () => {

  const shoppings = useSelector((state) => state.shoppings);
  const [totalSta, setTotalSta] = useState(0);
  const getTotal = () => {
    var total = 0;
    for (let x of shoppings) {
      total = x.price * x.amount + total;
      setTotalSta(total);
    }
    return total;
  };

  useEffect(() => {
    getTotal();
  }, [shoppings]);

  return (
    <>
      <HeaderCarrito />
      <div className="containerFatherForm">
        <h2>Datos del envio</h2>
        <p>Ahora te vamos a pedir que nos confirmes algunos datos sobre vos.</p>
        <FormValidate totalSta={totalSta} />
      </div>
      <BotonContinuarItems
        sendWhatsapp={false}
        to={"/Carrito"}
        text={"Continuar con el pedido"}
      />
    </>
  );
};

export default Index;
