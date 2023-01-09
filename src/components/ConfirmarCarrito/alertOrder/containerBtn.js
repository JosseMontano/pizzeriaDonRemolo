import React from "react";
import styled from "styled-components";
import { Text } from "../../../styles/colors";
import { TextOrange } from "../../../styles/colors";

const ContainerBtnCss = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 114px;
  height: 100%;
  max-height: 40px;
  border-radius: 50px;
  border: 1px solid hsla(10, 80%, 50%, 0.2);
`;

const BtnDecrease = styled.button`
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
`;

const BtnIncrement = styled.button`
  color: ${TextOrange};
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
`;

const ContainerBtn = ({ amount, id, reset, handleSum }) => {
  let disabledBtn = amount === 1 ? true : false;
  const handleReset = () => {
    reset(id, amount);
  };
  return (
    <ContainerBtnCss>
      <BtnDecrease disabled={disabledBtn} onClick={handleReset}>
        -
      </BtnDecrease>
      <Text>{amount}</Text>
      <BtnIncrement onClick={() => handleSum(id, amount)}>+</BtnIncrement>
    </ContainerBtnCss>
  );
};

export default ContainerBtn;
