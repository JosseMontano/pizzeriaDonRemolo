import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/ConfirmarCarrito/modalOrderSuccess.css";
import { deleteAll } from "../../features/shopping/shoppingSlice";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  &.is-open {
    display: flex;
  }
`;
const ContainerSoon = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  color: #000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 817px;
  height: 400px;
  @media screen and (max-width: 855px) {
    width: auto;
  }
`;
const ContainerBtn = styled.div`
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
const BtnFirst = styled.button`
  width: 457px;
  height: 48px;
  left: 181px;
  top: 306px;
  background: #e74423;
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 855px) {
    margin-top: 10px;
  }
`;
const ModalOrderSuccess = ({
  children,
  isOpen,
  closeModal,
  data,
  shoppings,
  urlImg,
  msgBtn,
  msgDelete,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const messageWhatsapp = (data, shoppings) => {
    var message = `Hola, mi nombre es ${data.nameAndLast}. Quisiera pedir `;
    var messageNew;

    for (let shopp of shoppings) {
      message += `${shopp.decription}, `;
    }
    messageNew = message.substring(0, message.length - 2);
    messageNew += ` lo antes posible, Mi dirección es: ${data.direction} voy a pagar con ${data.amountPay}. ¡Gracias! `;
    let url = `https://api.whatsapp.com/send?phone=5491173616685`;
    url += `&text=${encodeURI(messageNew)}&app_absent=0`;
    window.open(url, "_blank");
  };

  const apiWhatsapp = () => {
    messageWhatsapp(data, shoppings);
    navigate("/");
    window.location.reload(false); //refresh a page using Js
  };
  const emptyShoppCar = () => {
    dispatch(deleteAll(data));
    navigate("/");
    window.location.reload(false);
  };
  return (
    <Container className={`Modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <ContainerSoon onClick={handleModalContainerClick}>
        <img width={"180px"} src={urlImg} />
        {children}
        {msgDelete.length > 0 ? (
          <ContainerBtn>
            <button onClick={closeModal}>{msgBtn}</button>
            <BtnSure onClick={emptyShoppCar}>{msgDelete}</BtnSure>
          </ContainerBtn>
        ) : (
          <BtnFirst onClick={apiWhatsapp}>
            {msgBtn}
          </BtnFirst>
        )}
      </ContainerSoon>
    </Container>
  );
};

ModalOrderSuccess.defaultProps = {
  msgDelete: "",
};

export default ModalOrderSuccess;
