import BotonContinuarItems from "../global/footer";
import HeaderCarrito from "../compartidos/HeaderCarrito";
import { useSelector } from "react-redux";
import { DetalleEnvio } from "./detalleEnvio";
import { AlertaPedido } from "./alertaPedido";
import ModalOrderSuccess from "./modalOrderSuccess";
import { useModal } from "../../hooks/useModal";
import { useContext } from "react";
import Happy from "../../assets/imagenes/iconos/congratulations.png";
import FormContext from "../../context/formContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 70px 0px;
  justify-content: center;
  flex-wrap: wrap;
  h1 {
    font-size: 24px;
    margin: 10px 0px;
  }
`;

export default function ConfirmarCarrito() {
  const shoppings = useSelector((state) => state.shoppings);
  const { formContext } = useContext(FormContext);
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <>
      <HeaderCarrito />
      <Container className="ContainerFaShopp">
        <div className="">
          <h1> Resumen del pedido </h1>
          {shoppings.map((shop) => (
            <AlertaPedido shop={shop} />
          ))}
        </div>
        <DetalleEnvio data={formContext} />
      </Container>

      <BotonContinuarItems
        data={formContext}
        sendOrder={openModal}
        text={"Finalizar mi pedido"}
        to={"/Carrito"}
        sendWhatsapp={true}
      />
      
      <ModalOrderSuccess  
        isOpen={isOpen}
        closeModal={closeModal}
        data={formContext}
        shoppings={shoppings}
        urlImg={Happy}
        msgBtn="ver pedido"
      >
        <h2>Felicitaciones</h2>
        <p>
          El pedido será enviado a nuestro whatsapp. El pago se realiza en
          efectivo al momento de la entrega.
        </p>
      </ModalOrderSuccess>
    </>
  );
}
