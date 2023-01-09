import React from "react";
import { useDispatch } from "react-redux";
import { deletShopp, updateShopp } from "../../features/shopping/shoppingSlice";
import { useSelector } from "react-redux";
import Swal from "sweetalert";
import { useModal } from "../../hooks/useModal";
import styled from "styled-components";
import Warning from "../../assets/imagenes/iconos/warning.png";
import { Modal } from "../compartidos/modal";
import { deleteAll } from "../../features/shopping/shoppingSlice";
import { useNavigate } from "react-router-dom";
import ContentModalAlert from "./contentModalAlert";
import Amount from "./alertOrder/amount";

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

  let uniqueShopp =
    shoppings.length === 1 ? handleUnique : () => handleDelete(shop.id);

  return (
    <>
      <Container key={shop.id}>
        <BtnClose onClick={uniqueShopp}>&times;</BtnClose>
        <Amount handleRest={handleRest} handleSum={handleSum} shop={shop} />
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
