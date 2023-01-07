import { useState, useContext } from "react";
import { AppContext } from "../../ConfirmarCarrito/provider";
import styled from "styled-components";
import { TextOrange } from "../../../styles/colors";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (max-width: 550px) {
    grid-template-columns: none;
    grid-row: 1fr;
  }
  p {
    color: #000;
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
  color: #000;
  @media screen and (max-width: 640px) {
    justify-content: flex-start;
  }
  .contBtn {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    width: 114px;
    border: 1px solid hsla(10, 80%, 50%, 0.2);
    border-radius: 50px;
  }
`;

const Btn = styled.button`
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  &.increase {
    color: ${TextOrange};
  }
`;

const Contador = ({ getAmount }) => {
  const [contar, setContar] = useState(1);
  let disabledBtn = contar === 1 ? true : false;
  const handleIncrease = (e) => {
    e.preventDefault();
    setContar(contar + 1);
    getAmount(contar + 1);
  };
  const handleDecrease = (e) => {
    e.preventDefault();
    if (contar > 1) setContar(contar - 1);
    getAmount(contar - 1);
  };

  return (
    <Container>
      <p>Cantidad</p>
      <ContainerBtn>
        <div className="contBtn">
          <Btn disabled={disabledBtn} onClick={handleDecrease}>
            -
          </Btn>
          <span>{contar}</span>
          <Btn className="increase" onClick={handleIncrease}>
            +
          </Btn>
        </div>
      </ContainerBtn>
    </Container>
  );
};

export default Contador;
