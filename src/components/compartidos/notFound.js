import React from "react";
import styled from "styled-components";
import Img from "../../assets/imagenes/NotFound.png";
const Container = styled.div`
  display: grid;
  justify-content: center;
  h2 {
    font-size: 30px;
    font-weight: bold;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <img src={Img} />
      <h2>No hay resultados</h2>
    </Container>
  );
};

export default NotFound;
