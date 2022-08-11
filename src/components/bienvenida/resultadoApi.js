import CartaMenu from "./carta_principal";

export default function ApiRest (props) {
    return (
      <CartaMenu
        id={props.id}
        tituloCarta={props.nombre}
        descripcionCarta={props.descripcion}
        imagenCarta={props.imagen_url}
        precioCarta={props.precio}
      />
    );
  };
  