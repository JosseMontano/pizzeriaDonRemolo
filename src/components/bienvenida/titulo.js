import "../../styles/header/titulo.css";
import "../../styles/App.css";
import { useContext } from "react";
import ModalContext from "./../../context/modalContext";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  /* height: 56px; */
  height: 72px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  p {
    color: #e74423;
    font-family: Cera-Pro-Medium;
    font-size: 26px;
    line-height: 1.75rem;
    margin: 20px 20px;
  }
`;

export default function Titulo() {
  const { modal, handleModal } = useContext(ModalContext);
  const hideHandleModal = () => {
    handleModal(modal);
  };
  return (
    <Container onClick={hideHandleModal}>
      <p>Pizzería Don Rémolo</p>
    </Container>
  );
}
