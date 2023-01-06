
import Agua from "../assets/imagenes/agua.jpg";
import Cerveza from "../assets/imagenes/cerveza.jpg";

const url="https://donremolo.site:8170/api/";

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

const jsonData = [
  {
    id: 1,
    tituloCarta: "Agua",
    descripcionCarta: "Agua deliciosa",
    imagenCarta: Agua,
    precioCarta: "12",
  },
  {
    id: 2,
    tituloCarta: "Cerveza",
    descripcionCarta: "Cerveza cola deliciosa",
    imagenCarta: Cerveza,
    precioCarta: "123",
  },
  {
    id: 3,
    tituloCarta: "Agua",
    descripcionCarta: "Agua deliciosa",
    imagenCarta: Agua,
    precioCarta: "12",
  },
  {
    id: 4,
    tituloCarta: "Cerveza",
    descripcionCarta: "Cerveza cola deliciosa",
    imagenCarta: Cerveza,
    precioCarta: "123",
  },
];

export { url, jsonData, cats };
