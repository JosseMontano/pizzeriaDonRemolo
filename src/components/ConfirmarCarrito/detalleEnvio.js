import styled from "styled-components";
import ColLeft from "./detalleEnvio/colLeft";
import ColRight from "./detalleEnvio/colRight";

const Container = styled.div`
  background-color: #ffffff;
  margin-left: 20px;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 12px;
  margin-top: 55px;
  height: 383px;
  width: 400;
  @media screen and (max-width: 933px) {
    margin-top: 10px;
    margin-left: 0px;
  }
`;

const Title = styled.h3`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`;

const ContainerSoon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  gap: 10px;
  width: 400px;
`;

export const DetalleEnvio = ({ data }) => {
  return (
    <>
      {data != 0 && (
        <Container>
          <Title>Detalle del envío</Title>
          <ContainerSoon>
            <ColLeft data={data} />
            <ColRight data={data} />
          </ContainerSoon>
        </Container>
      )}
    </>
  );
};
