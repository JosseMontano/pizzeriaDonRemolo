import React from "react";
import Titulo from "./titulo";
import Descripcion from "./descripcion";
import MostrarApi from "./mostrarApi";
import { cats } from "../../services/http";
const bienvenida = () => {
  return (
    <>
      <Titulo />
      <Descripcion />
      <MostrarApi cats={cats} />
    </>
  );
};

export default bienvenida;
