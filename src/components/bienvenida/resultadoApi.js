import CartaMenu from "./carta_principal";

export default function ApiRest (props) {
    return (
      <CartaMenu
        id={props.id}
        tituloCarta={props.tituloCarta}
        descripcionCarta={props.descripcionCarta}
        imagenCarta={props.imagenCarta}
        precioCarta={props.precioCarta}
      />
    );
  };
  