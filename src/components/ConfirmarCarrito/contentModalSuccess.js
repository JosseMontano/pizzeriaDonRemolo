import React from "react";
import styled from "styled-components";

const BtnFirst = styled.button`
  width: 457px;
  height: 48px;
  left: 181px;
  top: 306px;
  background: #e74423;
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 855px) {
    margin-top: 10px;
  }
`;

const ContentModalSuccess = ({ Happy, apiWhatsapp }) => {
  return (
    <>
      <img width={"180px"} src={Happy} />
      <h2>Felicitaciones</h2>
      <p>
        El pedido será enviado a nuestro whatsapp. El pago se realiza en
        efectivo al momento de la entrega.
      </p>
      <BtnFirst onClick={apiWhatsapp}>ver pedido</BtnFirst>
    </>
  );
};

export default ContentModalSuccess;
