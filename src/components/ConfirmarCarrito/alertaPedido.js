import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletShopp, updateShopp } from "../../features/shopping/shoppingSlice";
import { useSelector } from "react-redux";
import Swal from "sweetalert";
import { useModal } from "../../hooks/useModal";
import styled from "styled-components";
import { Text } from "../../styles/colors";
import { TextOrange } from "../../styles/colors";
import Warning from "../../assets/imagenes/iconos/warning.png";
import { Modal } from "../compartidos/modal";
import { deleteAll } from "../../features/shopping/shoppingSlice";
import { useNavigate } from "react-router-dom";
import ContentModalAlert from "./contentModalAlert";

const Container = styled.div`
  padding: 20px;
  background-color: #ffffff;
  color: #000;
  margin-bottom: 15px;
  width: 505px;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  @media screen and (max-width: 570px) {
    width: 405px;
  }
`;

const BtnClose = styled.span`
  margin-left: 15px;
  color: black;
  float: right;
  font-size: 24px;
  line-height: 1px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: blue;
    font-weight: bold;
  }
`;

const PriceShop = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-family: "Cera Pro";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    font-family: "Cera Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

const ContainerSend = styled.div`
  margin-top: 10px;
  width: 114px;
  p {
    text-align: center;
    font-size: 24px;
  }
`;

const ContainerBtn = styled.button`
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

const HeighPrice = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: bold;
  }
`;

export const AlertaPedido = ({ shop }) => {
  const shoppings = useSelector((state) => state.shoppings);
  const { isOpen, openModal, closeModal } = useModal(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletShopp(id));
    Swal({
      title: "¡Hecho!",
      text: "Se quito del carrito",
      icon: "error",
      button: "Aceptar",
      timer: "3000",
    });
  };

  const handleUnique = () => {
    openModal();
  };

  const handleRest = (id, amount) => {
    const data = {
      id: id,
      amount: parseInt(amount) - 1,
    };
    dispatch(updateShopp(data));
  };

  const handleSum = (id, amount) => {
    const data = {
      id: id,
      amount: parseInt(amount) + 1,
    };
    dispatch(updateShopp(data));
  };

  const emptyShoppCar = () => {
    dispatch(deleteAll(shoppings));
    navigate("/");
    window.location.reload(false);
  };

  return (
    <>
      <Container key={shop.id}>
        <BtnClose
          onClick={
            shoppings.length === 1 ? handleUnique : () => handleDelete(shop.id)
          }
        >
          &times;
        </BtnClose>

        <PriceShop>
          <div>
            <span>{shop.title}</span>
            <p>x1 unidad</p>
            <span>Aclaracion</span>
            {shop.aclaration ? <p>{shop.aclaration}</p> : <p>Ninguna</p>}
          </div>

          <ContainerSend>
            <ContainerBtn>
              <BtnDecrease
                disabled={shop.amount === 1 ? true : false}
                onClick={() => handleRest(shop.id, shop.amount)}
              >
                -
              </BtnDecrease>
              <Text>{shop.amount}</Text>
              <BtnIncrement onClick={() => handleSum(shop.id, shop.amount)}>
                +
              </BtnIncrement>
            </ContainerBtn>
            <HeighPrice>
              <p>${shop.price * shop.amount}</p>
            </HeighPrice>
          </ContainerSend>
        </PriceShop>
      </Container>

      <Modal
        hide={closeModal}
        isShown={isOpen}
        modalContent={
          <ContentModalAlert
            Warning={Warning}
            closeModal={closeModal}
            emptyShoppCar={emptyShoppCar}
          />
        }
      />
    </>
  );
};
