import { useState, useContext } from "react";
import { AppContext } from "../../ConfirmarCarrito/provider";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 640px) {
    justify-content: flex-start;
  }
`;

const Btn = styled.button`
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
`;

const Contador = () => {
  const [contador, setContador] = useState(1);
  const handleIncrease = (e) => {
    e.preventDefault();
    setContador(contador + 1);
  };
  const handleDecrease = (e) => {
    e.preventDefault();
    if (contador >= 2) setContador(contador - 1);
  };
  const { setContar } = useContext(AppContext);
  setContar(contador);

  return (
    <Container>
      <div className="grid grid-cols-3 justify-items-center items-center w-full max-w-[114px] h-full max-h-[40px] border border-primary_transparent rounded-[50px]">
        <Btn disabled={contador === 1 ? true : false} onClick={handleDecrease}>
          -
        </Btn>
        <span>{contador}</span>
        <Btn onClick={handleIncrease}>+</Btn>
      </div>
    </Container>
  );
};

export default Contador;
