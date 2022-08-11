import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletShopp, updateShopp } from "../../features/shopping/shoppingSlice";
import { useSelector } from "react-redux";
import Swal from "sweetalert";
import { UseModalOrderSuccess } from "./useModalOrderSuccess";
import ModalOrderSuccess from "./modalOrderSuccess";

export const AlertaPedido = ({ shop }) => {
  const shoppings = useSelector((state) => state.shoppings);
  const [isOpenModal1, openModal1, closeModal1] = UseModalOrderSuccess(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletShopp(id));
    Swal({
      title: "¡Hecho!",
      text: "Se quito del carrito",
      icon: "error",
      button: "Aceptar",
      timer: "3000",
    });
  };

  const handleUnique = () => {
    openModal1();
  };

  const handleRest = (id, amount) => {
    const data = {
      id: id,
      amount: parseInt(amount) - 1,
    };
    dispatch(updateShopp(data));
  };

  const handleSum = (id, amount) => {
    const data = {
      id: id,
      amount: parseInt(amount) + 1,
    };
    dispatch(updateShopp(data));
  };
  return (
    <>
      <ModalOrderSuccess
        isOpen={isOpenModal1}
        closeModal={closeModal1}
        data={shoppings}
        shoppings={shoppings}
        urlImg={"./imagenes/iconos/warning.png"}
        msgBtn={"Continuar con el pedido"}
        msgDelete={"Si eliminar todos"}
      >
        <p>
          ¿Querés eliminar todos los productos de tu pedido?.
        </p>
      </ModalOrderSuccess>
      <div className="alert" key={shop.id}>
        <span
          className="closebtn"
          onClick={
            shoppings.length === 1 ? handleUnique : () => handleDelete(shop.id)
          }
        >
          &times;
        </span>

        <div className="priceShopp">
          <div>
            <span>{shop.title}</span>
            <p>x1 unidad</p>
            <span>Aclaracion</span>
            {shop.aclaration ? <p>{shop.aclaration}</p> : <p>Ninguna</p>}
          </div>

          <div className="containerTwo">
            <div className="grid grid-cols-3 justify-items-center items-center w-full max-w-[114px] h-full max-h-[40px] border border-primary_transparent rounded-[50px]">
              <button
                className="text-[20px] font-bold bg-transparent"
                disabled={shop.amount === 1 ? true : false}
                onClick={() => handleRest(shop.id, shop.amount)}
              >
                -
              </button>
              <span className="text-text_clr">{shop.amount}</span>
              <button
                className="text-orange text-[20px] font-bold bg-transparent"
                onClick={() => handleSum(shop.id, shop.amount)}
              >
                +
              </button>
            </div>
            <div className="heightPrice">
              <p className="font-bold">${shop.price * shop.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
