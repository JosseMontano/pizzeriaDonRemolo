import "../../styles/ConfirmarCarrito/ModalPedido.css";
import { useState, useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";
import Decrement from "../icons/decrement";
import Increment from "../icons/increment";

export default function ModalPedido({
  tituloCarta,
  descripcionCarta,
  precioCarta,
  contador,
}) {
  const [closeModal1] = useModal(false);
  let contar = parseInt(contador);
  let precioC = parseInt(precioCarta);
  const [contado, setContado] = useState(contar);
  const [precio, setPrecio] = useState(0);
  useEffect(() => {
    PrecioFinal();
  }, [contado, precio]);
  const ItemIncremento = () => setContado(contado + 1);
  const ItemDecremento = () => setContado(contado - 1);
  const PrecioFinal = () => setPrecio(precioC * contado);
  return (
    <>
      <p className="hidden xl:block xl:mt-[120px]">
        <span className="titulo_resumen">Resumen del pedido</span>{" "}
      </p>
      <Modal closeModal={closeModal1}>
        <div className="grid grid-cols-[auto auto] gap-8">
          <div className="absolute left-[16px] top-[16px]">
            <span className="grid grid-cols-[auto]">
              <span className="titulo-pedido">{tituloCarta}</span>
              <span className="descripcion-pedido">{descripcionCarta}</span>
            </span>

            <div className="w-[114px] h-[36px] rounded-3xl border border-gray-200 mt-2">
              {/* RESTA */}
              <button
                className="relative left-[19px] top-[5px] bg-transparent "
                onClick={ItemDecremento}
                disabled={contado === 1 ? true : false}
              >
                <Decrement />
              </button>

              {/* FIN RESTA */}

              <p className="relative left-[53px] -top-[20px] xl:relative xl:-top-[20px]">
                {" "}
                {contado}{" "}
              </p>

              {/* SUMA */}
              <button
                className="relative left-[85px] -top-[42px] bg-transparent xl:absolute xl:top-[58px]"
                onClick={ItemIncremento}
              >
                <Increment />
              </button>

              {/* FIN SUMA */}
            </div>
          </div>
          <div className="absolute left-[255px] top-[73px] xl:absolute xl:left-[520px]">
            <p className="precio">
              <span>$</span>
              {precio}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
