import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { BotonAtras } from "./BotonAtras";

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  animation-name: transitionBackground;
  animation-duration: 1s;
  @keyframes transitionBackground {
    0% {
      background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const ContainerSoon = styled.div`
  background: #fff; /* fallback for old browsers */
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: move 1s;
  transform: translateY(50px);
  margin-bottom: 100px;
  @keyframes move {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }
    100% {
      transform: translateY(50px);
      opacity: 1;
    }
  }
`;

export const Modal = ({ isShown, hide, modalContent }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  const modal = (
    <Container open={isShown} onClick={hide}>
      <ContainerSoon onClick={(e) => handleModalContainerClick(e)}>
        <BotonAtras hide={hide} />
        {modalContent}
      </ContainerSoon>
    </Container>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
