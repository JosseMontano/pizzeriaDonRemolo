import FormContext from "../../context/formContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import BotonContinuarItems from "../ConfirmarCarrito/BotonContinuarItems";

const Footer = () => {
  const shoppings = useSelector((state) => state.shoppings);
  const { empty } = useContext(FormContext);
  let redirect = empty ? "/formulario" : "/Carrito";
  return (
    <>
      {shoppings.length > 0 && (
        <BotonContinuarItems
          sendWhatsapp={false}
          to={redirect}
          text={"Continuar con el pedido"}
        />
      )}
    </>
  );
};

export default Footer;
