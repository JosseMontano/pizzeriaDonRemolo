import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FlechaDerecha from "../../../icons/flechaDerecha";

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;
  width: 260px;
  height: 48px;
  background: #e63c19;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  color: #fff;
  transition: all 0.1s;
  span {
    display: flex;
    justify-content: center;
  }
  &:hover {
    transform: scale(1.07);
  }
`;

const BtnRequested = (props) => {
  const { amount, sendOrderSoon, to, text } = props;
  return (
    <Btn>
      <NavLink to={to} onClick={amount != 0 && (() => sendOrderSoon())}>
        {text}
        <FlechaDerecha />
      </NavLink>
    </Btn>
  );
};

export default BtnRequested;
