import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-items: center;
`;

const Btn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  width: 100%;
  max-width: 295px;
  max-height: 48px;
  color: #e63c19;
  font-weight: bold;
  border-radius: 50px;
  margin-top: 10px;
  background-color: hsla(10, 80%, 50%, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  text-align: center;
  &:hover {
    transform: scale(1.07);
  }
`;

export const ConfirmarPedido = ({ onChange }) => {
  const handleSubmit = (e) => {
    onChange(e);
  };
  return (
    <Container onClick={handleSubmit}>
      <Btn type="button">
        <span>Agregar al pedido</span>
      </Btn>
    </Container>
  );
};
