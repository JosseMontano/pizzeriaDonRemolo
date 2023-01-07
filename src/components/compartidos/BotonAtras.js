import Arrow from "../../assets/imagenes/iconos/arrow-back.svg";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 999;
  position: absolute;
  top: 1rem;
  right: 1rem;
  &:hover {
    transition: all 0.1s;
  }
  &:hover {
    transform: scale(1.07);
  }
`;

export const BotonAtras = ({ hide }) => {
  return (
    <Btn onClick={hide}>
      <img src={Arrow} alt="volver" />
    </Btn>
  );
};
