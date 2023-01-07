import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CartaExpandida } from "../CartasCategoria/carta-expandida/CartaExpandida";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../compartidos/modal";
const Container = styled.a`
  background: #fff;
  border-radius: 15px;
  padding: 6px;
  gap: 12px;
  &:hover {
    box-shadow: 1px solid rgba(255, 255, 255, 0.1);
  }
  &:active {
    border: 1px solid red;
  }
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 15px;
  height: 200px;
  width: 100%;
`;

const ContainerText = styled.span`
  display: grid;
  padding: 1px;
`;

export default function CartaMenu(props) {
  const { isOpen, openModal, closeModal } = useModal();

  let data = [
    {
      container: "bold_carta",
      soon: "text-xl  fond-medium xl:text-xl",
      prop: props.tituloCarta,
    },
    {
      container: "regular_carta",
      soon: "text-xs xl:text-base",
      prop: props.descripcionCarta,
    },
    {
      container: "bold_carta",
      soon: "text-base xl:text-2xl",
      prop: "$" + props.precioCarta,
    },
  ];
  return (
    <>
      <Container key={props.id} onClick={() => openModal()}>
        <div>
          <Img src={props.imagenCarta} alt={props.imagenCarta} />
        </div>
        <ContainerText>
          {data.map((v, i) => (
            <span className={v.container} key={i}>
              <span className={v.soon}>{v.prop}</span>
            </span>
          ))}
        </ContainerText>
      </Container>
      <Modal
        modalContent={<CartaExpandida closeModal={closeModal} {...props} />}
        hide={closeModal}
        isShown={isOpen}
      />
    </>
  );
}
