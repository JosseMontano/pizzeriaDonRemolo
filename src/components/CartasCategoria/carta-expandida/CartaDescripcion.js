import React from "react";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;
  p {
    font-size: 15px;
    color: #000;
  }
`;
const H3 = styled.h3`
  font-size: 21px;
  font-weight: bold;
  color: #000;
`;
const P = styled.p`
  font-size: 25px;
  color: #000;
`;
export const CartaDescripcion = ({
  tituloCarta,
  descripcionCarta,
  precioCarta,
}) => {
  return (
    <Container>
      <div>
        <H3>{tituloCarta}</H3>
        <p>{descripcionCarta}</p>
      </div>
      <P>${precioCarta}xUnidad</P>
    </Container>
  );
};
