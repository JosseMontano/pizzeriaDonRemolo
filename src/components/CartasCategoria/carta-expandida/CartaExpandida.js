import { AclaracionContenedor } from "./AclaracionContenedor";
import Contador from "./Contador";
import { CartaDescripcion } from "./CartaDescripcion";
import { CartaImagen } from "./CartaImagen";
import { ConfirmarPedido } from "./ConfirmarPedido";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addShopp } from "../../../features/shopping/shoppingSlice";
import Swal from "sweetalert";
import styled from "styled-components";
import { AppContext } from "../../ConfirmarCarrito/provider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  article {
    position: relative;
  }
`;

const ContainerContent = styled.div`
  border-top: 1px solid rgba(146, 146, 146, 0.1);
  display: flex;
  justify-content: center;
  width: 100%;
  article {
    padding: 16px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 2px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    grid-template-columns: 1fr 1fr;
  }
`;

export const CartaExpandida = ({ closeModal, ...props }) => {
  const { contar, setContar } = useContext(AppContext);
  const [aclaracion, setAclaracion] = useState("");
  const dispatch = useDispatch();

  const handleText = (val) => {
    setAclaracion(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: props.id,
      title: props.tituloCarta,
      decription: props.descripcionCarta,
      price: props.precioCarta,
      amount: contar,
      aclaration: aclaracion,
    };
    dispatch(addShopp(data));
    Swal({
      title: "¡Hecho!",
      text: "Se agrego correctamente al carrito",
      icon: "success",
      button: "Aceptar",
      timer: "3000",
    });
    closeModal();
  };

  const getAmount = (amount) => {
    setContar(amount);
  };
  return (
    <Container>
      <article>
        <CartaImagen imagenCarta={props.imagenCarta} />
      </article>
      <CartaDescripcion {...props} />
      <ContainerContent>
        <article>
          <Contador getAmount={getAmount} />
          <AclaracionContenedor onChangeText={handleText} />
          <ConfirmarPedido onChange={handleSubmit} />
        </article>
      </ContainerContent>
    </Container>
  );
};
