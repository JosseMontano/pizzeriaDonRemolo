import React from "react";
import { useState } from "react";

const Buscador = (props) => {
  const handleBusqueda = (e) => {
    props.filtrar(e.target.value);
  };

  const inputWrapper = {
    display: "flex",
    position: "relative",
    padding: "2px",
    marginLeft: "10px",
    width: "60%",
    minWidth: "350px",
  };

  const input = {
    boxSizing: "border-box",
    color: "#191919",
    padding: "12px 15px 12px 35px",
    width: "100%",
    borderRadius: "32px",
  };

  const inputIcon = {
    color: "#191919",
    position: "absolute",
    width: "17px",
    height: "17px",
    top: "25%",
    left: "-30px",
    marginLeft: "42px",
    marginTop: "10px",
    transform: "translateY(-50%)",
    opacity: "0.5",
  };
  return (
    <>
      <div
        style={inputWrapper}
        className="max-w-xl w-[336px] h-[44px] pl-10 p-4 xl:p-2 xl:pl-11 xl:w-[400px] xl:-top-[8px] desktop:w-[370px] desktop:h-[44px] search"
      >
        <input
          type="text"
          style={input}
          placeholder="¿Qué vas a comer hoy?"
          className=""
          onChange={(e) => handleBusqueda(e)}
        />
        <img style={inputIcon} src="/media/search-glass-solid.svg"></img>
      </div>
    </>
  );
};
export default Buscador;
