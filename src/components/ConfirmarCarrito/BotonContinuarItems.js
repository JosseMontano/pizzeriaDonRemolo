import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import EmptyContext from "../../context/emptyContext";
import { useContext } from "react";
import Swal from "sweetalert";
import { deleteAll } from "../../features/shopping/shoppingSlice";
import FlechaDerecha from "../../icons/flechaDerecha";
import styled from "styled-components";

const Container = styled.div`
  height: 72px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (max-width: 455px) {
    .navShopp {
      gap: 1rem;
      height: 122px;
    }
    .itemShopp {
      margin-top: 10px;
    }
  }
`;

const ItemShop = styled.p`
  span {
    box-sizing: border-box;
    font-size: 20px;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;
    width: 25px;
    height: 31px;
    background: #e63c19;
    border: 1px solid #e63c19;
    border-radius: 100px;
    color: #fff;
    margin-left: 10px;
  }
`;

const ContainerBtnShopp = styled.div`
  span {
    font-weight: bold;
  }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;
  width: 260px;
  height: 48px;
  background: #e63c19;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  color: #fff;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.07);
  }
`;

export default function BotonContinuarItems({
  sendOrder,
  text,
  to,
  sendWhatsapp,
}) {
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
    if (sendWhatsapp) {
      dispatch(deleteAll(shoppings));
      sendOrder();
    }
  };

  return (
    <Container>
      <div>
        <ItemShop>
          Items:<span>{shoppings.length}</span>
        </ItemShop>
      </div>
      <div>
        <p>total: {shoppings.length === 0 ? <b>$0</b> : <b>${totalSta}</b>}</p>
      </div>
      <ContainerBtnShopp>
        <Btn>
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
        </Btn>
      </ContainerBtnShopp>
    </Container>
  );
}
