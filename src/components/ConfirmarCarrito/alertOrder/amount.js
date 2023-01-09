import React from "react";
import styled from "styled-components";
import ContainerBtn from "./containerBtn";
import Description from "./description";

const PriceShop = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-family: "Cera Pro";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    font-family: "Cera Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

const ContainerSend = styled.div`
  margin-top: 10px;
  width: 114px;
  p {
    text-align: center;
    font-size: 24px;
  }
`;

const HeighPrice = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: bold;
  }
`;

const Amount = ({ shop, handleRest, handleSum }) => {
  return (
    <PriceShop>
      <Description aclaration={shop.aclaration} title={shop.title} />
      <ContainerSend>
        <ContainerBtn
          amount={shop.amount}
          reset={handleRest}
          handleSum={handleSum}
          id={shop.id}
        />
        <HeighPrice>
          <p>${shop.price * shop.amount}</p>
        </HeighPrice>
      </ContainerSend>
    </PriceShop>
  );
};

export default Amount;
