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
import { useNavigate } from "react-router-dom";

import "../../../styles/CartaCategoria/cartaexpandida.css";
import Swal from "sweetalert";


export const CartaExpandida = ({ handleModal, ...props }) => {
  const { contar } = useContext(AppContext);
  const shoppings = useSelector((state) => state.shoppings);
  const [aclaracion, setAclaracion] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <>
      <section className="carta-expandida fixed top-0 left-0 bg-modal_bg">
        <form className="carta-grande">
          <div className="flex flex-col w-full max-w-[820px] h-auto max-h-[800px] bg-modal_bg">
            <article className="img-contenedor relative">
              <CartaImagen imagenCarta={props.imagenCarta} />
              <BotonAtras
                estilos="carta-boton-atras absolute top-2 right-2"
                fn={handleModal}
              />
            </article>
            <CartaDescripcion {...props} />
            <div className="aclaracion flex justify-center w-full">
              <article className="aclaracion-container grid grid-rows-3 gap-2 w-full h-full bg-white sm:grid-rows-2 sm:grid-cols-2">
                <CantidadContenedor />
                <AclaracionContenedor onChangeText={handleText} />
                <ConfirmarPedido onChange={handleSubmit} />
              </article>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
