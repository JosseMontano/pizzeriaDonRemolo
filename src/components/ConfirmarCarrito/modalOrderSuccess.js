import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/ConfirmarCarrito/modalOrderSuccess.css";
import { deleteAll } from "../../features/shopping/shoppingSlice";
const ModalOrderSuccess = ({
  children,
  isOpen,
  closeModal,
  data,
  shoppings,
  urlImg,
  msgBtn,
  msgDelete,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const messageWhatsapp = (data, shoppings) => {
    var message = `Hola, mi nombre es ${data.nameAndLast}. Quisiera pedir `;
    var messageNew;

    for (let shopp of shoppings) {
      message += `${shopp.decription}, `;
    }
    messageNew = message.substring(0, message.length - 2);
    messageNew += ` lo antes posible, Mi dirección es: ${data.direction} voy a pagar con ${data.amountPay}. ¡Gracias! `;
    let url = `https://api.whatsapp.com/send?phone=5491173616685`;
    url += `&text=${encodeURI(messageNew)}&app_absent=0`;
    window.open(url, "_blank");
  };

  const apiWhatsapp = () => {
    messageWhatsapp(data, shoppings);
    navigate("/");
    window.location.reload(false); //refresh a page using Js
  };
  const emptyShoppCar = () => {
    dispatch(deleteAll(data));
    navigate("/");
    window.location.reload(false);
  };
  return (
    <div
      className={`containerSendOrder ${isOpen && "is-open"}`}
      onClick={closeModal}
    >
      <div
        className="containerSoonSendOrder"
        onClick={handleModalContainerClick}
      >
        <img width={"180px"} src={urlImg} />
        {children}
        {msgDelete.length > 0 ? (
          <div className="containerTwoBtn">
            <button onClick={closeModal}>{msgBtn}</button>
            <button className="btnSure" onClick={emptyShoppCar}>
              {msgDelete}
            </button>
          </div>
        ) : (
          <button className="btnFirst" onClick={apiWhatsapp}>
            {msgBtn}
          </button>
        )}
      </div>
    </div>
  );
};

ModalOrderSuccess.defaultProps = {
  msgDelete: "",
};

export default ModalOrderSuccess;
