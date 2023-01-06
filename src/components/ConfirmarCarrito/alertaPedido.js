import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletShopp, updateShopp } from "../../features/shopping/shoppingSlice";
import { useSelector } from "react-redux";
import Swal from "sweetalert";
import { UseModalOrderSuccess } from "./useModalOrderSuccess";
import ModalOrderSuccess from "./modalOrderSuccess";
import styled from "styled-components";
import { Text } from "../../styles/colors";
import { TextOrange } from "../../styles/colors";
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
  const [isOpenModal1, openModal1, closeModal1] = UseModalOrderSuccess(false);
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
    openModal1();
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
  return (
    <>
      <ModalOrderSuccess
        isOpen={isOpenModal1}
        closeModal={closeModal1}
        data={shoppings}
        shoppings={shoppings}
        urlImg={"./imagenes/iconos/warning.png"}
        msgBtn={"Continuar con el pedido"}
        msgDelete={"Si eliminar todos"}
      >
        <p>¿Querés eliminar todos los productos de tu pedido?.</p>
      </ModalOrderSuccess>
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
    </>
  );
};
