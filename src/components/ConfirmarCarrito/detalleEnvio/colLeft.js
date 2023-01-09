import React from "react";
import styled from "styled-components";

const Subtitle = styled.h4`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #6b6166;
`;

const Paragrafh = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 1px 0px 10px 0px;

  color: #53464d;
`;

const ColLeft = ({ data }) => {
  return (
    <div>
      <Subtitle>Dirección</Subtitle>
      <Paragrafh>{data.direction}</Paragrafh>
      <Subtitle>Nombre y apellido</Subtitle>
      <Paragrafh>{data.nameAndLast}</Paragrafh>
      <Subtitle>Vas a pagar con</Subtitle>
      <Paragrafh>{data.amountPay}</Paragrafh>
      <Subtitle>forma de entrega</Subtitle>
      <Paragrafh>Delivery</Paragrafh>
      <hr />
      <Paragrafh>
        Recuerda que el pago es solo en efectivo y el total a pagar no incluye
        el delivery
      </Paragrafh>
    </div>
  );
};

export default ColLeft;
