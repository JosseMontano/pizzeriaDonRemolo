import { BotonAtras } from "../../compartidos/BotonAtras";
import { AclaracionContenedor } from "./AclaracionContenedor";
import { CantidadContenedor } from "./CantidadContenedor";
import { CartaDescripcion } from "./CartaDescripcion";
import { CartaImagen } from "./CartaImagen";
import { AppContext } from "../../ConfirmarCarrito/provider";
import { ConfirmarPedido } from "./ConfirmarPedido";
import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShopp } from "../../../features/shopping/shoppingSlice";
import Swal from "sweetalert";
import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 72px;
  background-color: rgba(28, 28, 28, 0.6);
`;

const CardBig = styled.form`
  height: fit-content;
  margin-top: 40px;
`;

const ContainerSoon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 820px;
  height: auto;
  max-height: 800px;
  background-color: #d8d7da;
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

export const CartaExpandida = ({ handleModal, ...props }) => {
  const { contar } = useContext(AppContext);
  const shoppings = useSelector((state) => state.shoppings);
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
    handleModal();
  };
  return (
    <Container>
      <CardBig>
        <ContainerSoon>
          <article>
            <CartaImagen imagenCarta={props.imagenCarta} />
            <BotonAtras fn={handleModal} />
          </article>
          <CartaDescripcion {...props} />
          <ContainerContent>
            <article>
              <CantidadContenedor />
              <AclaracionContenedor onChangeText={handleText} />
              <ConfirmarPedido onChange={handleSubmit} />
            </article>
          </ContainerContent>
        </ContainerSoon>
      </CardBig>
    </Container>
  );
};
