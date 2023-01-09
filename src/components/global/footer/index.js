import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert";
import { deleteAll } from "../../../features/shopping/shoppingSlice";

import styled from "styled-components";
import Items from "./items";
import Amount from "./amount";
import BtnRequested from "./btnRequested";

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

export default function BotonContinuarItems({
  sendOrder,
  text,
  to,
  sendWhatsapp,
}) {
  const shoppings = useSelector((state) => state.shoppings);
  const [totalSta, setTotalSta] = useState(0);
  const dispatch = useDispatch();
  
  const getTotal = () => {
    var total = 0;
    for (let x of shoppings) {
      total = x.price * x.amount + total;
      setTotalSta(total);
    }
    return total;
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
      <Items amount={shoppings.length} />
      <Amount amount={shoppings.length} totalSta={totalSta} />

      <BtnRequested
        Amount={shoppings.length}
        sendOrderSoon={sendOrderSoon}
        to={to}
        text={text}
      />
    </Container>
  );
}
