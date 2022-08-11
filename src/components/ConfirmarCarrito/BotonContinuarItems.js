import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import EmptyContext from "../../context/emptyContext";
import { useContext } from "react";
import Swal from "sweetalert";
import { deleteAll } from "../../features/shopping/shoppingSlice";
import FlechaDerecha from "../compartidos/flechaDerecha";
export default function BotonContinuarItems({ sendOrder, text, to, sendWhatsapp }) {
  const shoppings = useSelector((state) => state.shoppings);
  const [totalSta, setTotalSta] = useState(0);
  const { empty } = useContext(EmptyContext);
  const dispatch = useDispatch();
  const getTotal = () => {
    var total = 0;
    for (let x of shoppings) {
      total = x.price * x.amount + total;
      setTotalSta(total);
    }
    return total;
  };
  const emptyCar = () => {
    Swal({
      title: "¡Error!",
      text: "Por favor agregue un producto al carrito",
      icon: "error",
      button: "Aceptar",
      timer: "3000",
    });
  };

  useEffect(() => {
    getTotal();
  }, [shoppings]);

  //send to the whatsapp

  const sendOrderSoon = () => {
    if(sendWhatsapp) {
      dispatch(deleteAll(shoppings));
      sendOrder();
    }
   
  };


  return (
    <>
      <div className="navShopp">
        <div>
          <p className="itemShopp">
            Items:<span>{shoppings.length}</span>
          </p>
        </div>
        <div>
          <p>
            total: {shoppings.length === 0 ? <b>$0</b> : <b>${totalSta}</b>}
          </p>
        </div>
        <div className="containerBtnShopp">
          <NavLink
            className="btnContinue"
            exact
            to={to}
            onClick={
              shoppings.length === 0 ? () => emptyCar() : () => sendOrderSoon()
            }
          >
            {text}
            <FlechaDerecha />
          </NavLink>
        </div>
      </div>
    </>
  );
}
