import IconoEditar from "../icons/iconoEditar";
import FormContext from "../../context/formContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export const DetalleEnvio = ({ data }) => {
  const lengthForm = Object.entries(data).length;
  return (
    <div className="detailsSend">
      <h3>Detalle del envío</h3>
      <div className="soondetailsSend">
        <div>
          <h4>Dirección</h4>
          <p>{data.direction}</p>
          <h4>Nombre y apellido</h4>
          <p>{data.nameAndLast}</p>
          <h4>Vas a pagar con</h4>
          <p>{data.amountPay}</p>
          <h4>forma de entrega</h4>
          <p>Delivery</p>
        </div>
        <div className="grandSoondetailsSend">
          <div>
            <p className="titleDetailSend">Piso</p>
            <p className="descDetailSend">{data.floor}</p>
          </div>
          <div>
            <p className="titleDetailSend">Puerta</p>
            <p className="descDetailSend">{data.gate}</p>
          </div>
          <div className="btnEditDetail">
            {lengthForm > 0 && (
              <NavLink exact to="/formulario">
                <p>
                  Editar
                  <IconoEditar />
                </p>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};