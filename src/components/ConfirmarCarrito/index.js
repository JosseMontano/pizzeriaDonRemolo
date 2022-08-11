import BotonContinuarItems from "./BotonContinuarItems";
import HeaderCarrito from "./HeaderCarrito";
import { useSelector } from "react-redux";
import "../../styles/shoppingCar/index.css";
import { DetalleEnvio } from "./detalleEnvio";
import { AlertaPedido } from "./alertaPedido";
import { Link } from "react-router-dom";
import ModalOrderSuccess from "./modalOrderSuccess";
import { UseModalOrderSuccess } from "./useModalOrderSuccess";
import { useEffect, useState } from "react";
import FormContext from '../../context/formContext'
import EmptyContext from "../../context/emptyContext";
import { useContext } from "react";
export default function ConfirmarCarrito() {
  const shoppings = useSelector((state) => state.shoppings);
  const { empty, handleEmpty, handleFull } = useContext(EmptyContext);
  const sendOrder = () => {
    openModal1();
  };
  const [isOpenModal1, openModal1, closeModal1] = UseModalOrderSuccess(false);
  const {formContext, handleForm} = useContext(FormContext);
  useEffect(() => {
    if (shoppings.length < 1) handleEmpty();
    else handleFull();
  }, [shoppings]);

  var data = JSON.parse(localStorage.getItem('formUser')) //obtener el usuario
//var data=formContext;
  return (
    <>
      <ModalOrderSuccess
        isOpen={isOpenModal1}
        closeModal={closeModal1}
        data={data}
        shoppings={shoppings}
        urlImg={"./imagenes/iconos/congratulations.png"}
        msgBtn="ver pedido"
      >

        <h2>Felicitaciones</h2>
        <p>
          El pedido será enviado a nuestro whatsapp. El pago se realiza en
          efectivo al momento de la entrega.
        </p>
      </ModalOrderSuccess>
      <HeaderCarrito />
      <div className="ContainerFaShopp">
        <div className="relative">
          <h1>
            <Link to="/">
              <span className="static botonatrascarrito:absolute top-3 -left-32">
                <strong>🡠 Volver atras </strong>
              </span>
            </Link>
          </h1>
          <h1> Resumen del pedido </h1>
          {shoppings.map((shop) => (
            <>
              <AlertaPedido shop={shop} />
            </>
          ))}
        </div>
        <DetalleEnvio data={data} />
      </div>
      <BotonContinuarItems
        data={data}
        sendOrder={sendOrder}
        text={"Finalizar mi pedido"}
        to={'/Carrito'}
        sendWhatsapp={true}
      />
    </>
  );
}
