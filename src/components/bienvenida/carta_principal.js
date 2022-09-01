import { useState } from "react";
import { createPortal } from "react-dom";
import "../../styles/CartaCategoria/carta.css";
import { CartaExpandida } from "../CartasCategoria/carta-expandida/CartaExpandida";

const modalRoot = document.getElementById("modal");
export default function CartaMenu(props) {
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const handleModal = () => setMostrarCarta(!mostrarCarta);
  let data = [
    {
      container: "bold_carta",
      soon: "text-xl  fond-medium xl:text-xl",
      prop: props.tituloCarta,
    },
    {
      container: "regular_carta",
      soon: "text-xs xl:text-base",
      prop: props.descripcionCarta,
    },
    {
      container: "bold_carta",
      soon: "text-base xl:text-2xl",
      prop: "$" + props.precioCarta,
    },
  ];
  return (
    <>
      <a
        key={props.id}
        className="bg-white rounded-2xl p-[6px] gap-[12px] shadow-cartasmobile  hover:shadow-cartasmobilehover active:border-blue-800 active:border containerCartaInterna"
        onClick={handleModal}
      >
        <div className="contanedorimagen_carta">
          <img
            src={props.imagenCarta}
            alt={props.imagenCarta}
            className="object-fill border-solid rounded-xl"
          />
        </div>
        <span className=" leading-none text-justify grid grid-rows-[auto,min-content min-content] gap-0 p-1 box-content mr-3">
          {data.map((v, i) => (
            <span className={v.container}>
              <span className={v.soon}>{v.prop}</span>
            </span>
          ))}
        </span>
      </a>
      {mostrarCarta &&
        createPortal(
          <CartaExpandida handleModal={handleModal} {...props} />,
          modalRoot
        )}
    </>
  );
}
