import React, { useEffect, useState } from "react";
import BotonContinuarItems from "../ConfirmarCarrito/BotonContinuarItems";
import HeaderCarrito from "../ConfirmarCarrito/HeaderCarrito";
import FormValidate from "./formValidate";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 130px;
  padding: 0 10px 0 10px;
  h2{
    font-family: "Cera Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  
    /* Neutro/500 */
    color: #302129;
    p{
      font-family: "Cera Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.4px;
    color: #5e5c66;
    }
  }
`


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
      <Container>
        <h2>Datos del envio</h2>
        <p>Ahora te vamos a pedir que nos confirmes algunos datos sobre vos.</p>
        <FormValidate totalSta={totalSta} />
      </Container>
      <BotonContinuarItems
        sendWhatsapp={false}
        to={"/Carrito"}
        text={"Continuar con el pedido"}
      />
    </>
  );
};

export default Index;
