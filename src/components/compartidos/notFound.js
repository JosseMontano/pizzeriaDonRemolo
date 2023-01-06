import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-content: center;
  margin-top: -20px;
  h2 {
    font-size: 30px;
    font-weight: bold;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <img src="../imagenes/NotFound.png" />
      <h2>No hay resultados</h2>
    </Container>
  );
};

export default NotFound;
