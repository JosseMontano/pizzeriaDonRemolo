import CartaMenu from "./carta_principal";

export default function ApiRest({ v }) {
  return (
    <CartaMenu
      id={v.id}
      tituloCarta={v.tituloCarta}
      descripcionCarta={v.descripcionCarta}
      imagenCarta={v.imagenCarta}
      precioCarta={v.precioCarta}
    />
  );
}
