import React from "react";
import styled from "styled-components";

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

const Items = ({ amount }) => {
  return (
    <div>
      <ItemShop>
        Items:<span>{amount}</span>
      </ItemShop>
    </div>
  );
};

export default Items;
