import React from "react";
import ApiRest from "./resultadoApi";
const FiltradoBuscador = ({ busqueda, datosPizza, datosPizzaFull }) => {
  return (
    <div className="containerCartaPrincipal">
      {busqueda === ""
        ? datosPizza
            .filter((data) => {
              return data;
            })
            .map((data) => {
              return <ApiRest {...data} />;
            })
        : (datosPizzaFull
          .filter((data) => {
            if (data.nombre.toLowerCase().includes(busqueda.toLowerCase()))
              return data;
          })
          .map((data) => {
            return <ApiRest {...data} />;
          }))}
    </div>
  );
};

export default FiltradoBuscador;
