import React from "react";
import Titulo from "./titulo";
import Descripcion from "./descripcion";
import MostrarApi from "./mostrarApi";

const bienvenida = () => {
  const styleDiv = {
    border: "1px solid #E63C19",
    backgroundColor: "#FCE6E3",
  };
  const styleText = {
    color: "#E63C19",
    fontWeight: "bold",
  };
  const cats = [
    {
      id: 0,
      nombre: "Pizzas",
      imagenOff: "/media/Iconos/CategoriaPizzaStateOff.svg",
      imagenOn: "/media/Iconos/CategoriaPizzaStateOn.svg",
      state: false,
      stylesDiv: styleDiv,
      stylesText: styleText,
    },
    {
      id: 1,
      nombre: "Empanadas",
      imagenOff: "/media/Iconos/CategoriaEmpanadaStateOff.svg",
      imagenOn: "/media/Iconos/CategoriaEmpanadaStateOn.svg",
      state: false,
      stylesDiv: styleDiv,
      stylesText: styleText,
    },
    {
      id: 2,
      nombre: "Postres",
      imagenOff: "/media/Iconos/CategoriaPostreStateOff.svg",
      imagenOn: "/media/Iconos/CategoriaPostreStateOn.svg",
      state: false,
      stylesDiv: styleDiv,
      stylesText: styleText,
    },
    {
      id: 3,
      nombre: "Bebidas",
      imagenOff: "/media/Iconos/CategoriaBebidaStateOff.svg",
      imagenOn: "/media/Iconos/CategoriaBebidaStateOn.svg",
      state: false,
      stylesDiv: styleDiv,
      stylesText: styleText,
    },
  ];

  return (
    <>
      <Titulo />
      <Descripcion />
      <MostrarApi cats={cats} />
    </>
  );
};

export default bienvenida;
