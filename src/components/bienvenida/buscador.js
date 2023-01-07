import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 2px;
  width: 40%;
  input {
    color: #191919;
    padding: 12px 15px 12px 35px;
    width: 100%;
    border-radius: 32px;
  }
  img {
    color: #191919;
    position: absolute;
    width: 17px;
    height: 17px;
    top: 35%;
    left: -27px;
    margin-left: 42px;
    margin-top: 10px;
    transform: translateY(-50%);
    opacity: 0.5;
  }
`;

const Buscador = (props) => {
  const handleBusqueda = (e) => {
    props.filtrar(e.target.value);
  };

  return (
    <InputWrapper>
      <input
        type="text"
        placeholder="¿Qué vas a comer hoy?"
        onChange={(e) => handleBusqueda(e)}
      />
      <img src="/media/search-glass-solid.svg"></img>
    </InputWrapper>
  );
};
export default Buscador;
