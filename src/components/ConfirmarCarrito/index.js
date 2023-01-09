import BotonContinuarItems from "../global/footer";
import HeaderCarrito from "../compartidos/HeaderCarrito";
import { useSelector } from "react-redux";
import { DetalleEnvio } from "./detalleEnvio";
import { useModal } from "../../hooks/useModal";
import { useContext } from "react";
import Happy from "../../assets/imagenes/iconos/congratulations.png";
import FormContext from "../../context/formContext";
import styled from "styled-components";
import { Modal } from "../compartidos/modal";
import { useNavigate } from "react-router-dom";
import ContentModalSuccess from "./contentModalSuccess";
import ContainerAlertaPedido from "./containerAlertaPedido";

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
  const navigate = useNavigate();

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
    messageWhatsapp(formContext, shoppings);
    navigate("/");
    window.location.reload(false); //refresh a page using Js
  };

  return (
    <>
      <HeaderCarrito />
      <Container className="ContainerFaShopp">
        <ContainerAlertaPedido shoppings={shoppings} />
        <DetalleEnvio data={formContext} />
      </Container>

      <Modal
        hide={closeModal}
        isShown={isOpen}
        modalContent={
          <ContentModalSuccess Happy={Happy} apiWhatsapp={apiWhatsapp} />
        }
      />

      <BotonContinuarItems
        data={formContext}
        sendOrder={openModal}
        text={"Finalizar mi pedido"}
        to={"/Carrito"}
        sendWhatsapp={true}
      />
    </>
  );
}
