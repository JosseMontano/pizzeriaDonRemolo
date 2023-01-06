import Contador from "./Contador";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (max-width: 550px) {
	grid-template-columns: none;
	grid-row: 1fr;
  }
  p{
	color:#000;
  }
`;

export const CantidadContenedor = () => {
  return (
    <Container>
      <p>Cantidad</p>
      <Contador />
    </Container>
  );
};
