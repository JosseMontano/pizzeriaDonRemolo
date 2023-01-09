import React from "react";
import styled from "styled-components";

const ContainerBtnModal = styled.div`
  display: flex;
  margin-top: 30px;
  button {
    width: 230px;
    height: 48px;
    margin: 0px 5px;
    background: #e74423;
    border-radius: 20px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
const BtnSure = styled.button`
  background: #fce6e3;
  color: #e63c19;
`;

const ContentModalAlert = ({ Warning, closeModal, emptyShoppCar }) => {
  return (
    <>
      <img width={"180px"} src={Warning} />
      <p>¿Querés eliminar todos los productos de tu pedido?.</p>
      <ContainerBtnModal>
        <button onClick={closeModal}>Continuar con el pedido</button>
        <BtnSure onClick={emptyShoppCar}>Si eliminar todos</BtnSure>
      </ContainerBtnModal>
    </>
  );
};

export default ContentModalAlert;
