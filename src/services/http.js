import Agua from "../assets/imagenes/agua.jpg";
import Cerveza from "../assets/imagenes/cerveza.jpg";
import Almedrado from "../assets/imagenes/almendrado.jpg";
import Bombones from "../assets/imagenes/bombones.jpg";
import Empanadas from "../assets/imagenes/empanada_atun.jpg";
import Empanadas2 from "../assets/imagenes/empanada_carne.jpg";
import Pizza1 from "../assets/imagenes/Pizza_4_quesos.jpg";
import Pizza2 from "../assets/imagenes/Pizza_provolone.jpg";
import Pizza3 from "../assets/imagenes/Pizza_napolitana.jpg";
import Pizza4 from "../assets/imagenes/Pizza_jamon.jpg";
import Pizza5 from "../assets/imagenes/Pizza_Fugazzeta.jpeg";

const jsonData = [
  {
    id: 1,
    tituloCarta: "Agua",
    descripcionCarta: "Botella de agua de 1 litro",
    imagenCarta: Agua,
    precioCarta: "12",
    catId: 4,
  },
  {
    id: 2,
    tituloCarta: "Cerveza",
    descripcionCarta: "Cerveza maltin en lata",
    imagenCarta: Cerveza,
    precioCarta: "123",
    catId: 4,
  },
  {
    id: 3,
    tituloCarta: "Almedrado",
    descripcionCarta: "Pastel de almedrado con crema pastelera",
    imagenCarta: Almedrado,
    precioCarta: "12",
    catId: 3,
  },
  {
    id: 4,
    tituloCarta: "Empanada",
    descripcionCarta: "Empanada rellena de queso y carne",
    imagenCarta: Empanadas,
    precioCarta: "123",
    catId: 2,
  },
  {
    id: 5,
    tituloCarta: "Pizza de queso",
    descripcionCarta: "Pizza de queso",
    imagenCarta: Pizza1,
    precioCarta: "1234",
    catId: 1,
  },
  {
    id: 6,
    tituloCarta: "Pizza con aceitunas",
    descripcionCarta: "Pizza de queso cubierta de aceitunas",
    imagenCarta: Pizza2,
    precioCarta: "1234",
    catId: 1,
  },
  {
    id: 7,
    tituloCarta: "Pizza de verduras",
    descripcionCarta: "Pizza de queso cubierta de tomates y lechuga",
    imagenCarta: Pizza3,
    precioCarta: "1234",
    catId: 1,
  },
  {
    id: 8,
    tituloCarta: "Pizza de jamon y queso",
    descripcionCarta: "Pizza cubierta de jamon, queso y oregano",
    imagenCarta: Pizza4,
    precioCarta: "1234",
    catId: 1,
  },
  {
    id: 9,
    tituloCarta: "Pizza de jalapeño",
    descripcionCarta: "Pizza de Jalapeño con poco queso",
    imagenCarta: Pizza5,
    precioCarta: "1234",
    catId: 1,
  },
  {
    id: 9,
    tituloCarta: "Empanadas res",
    descripcionCarta: "Empanadas cubiertas de carne de res",
    imagenCarta: Empanadas2,
    precioCarta: "1234",
    catId: 2,
  },
  {
    id: 9,
    tituloCarta: "Bombones",
    descripcionCarta: "Bombones cubiertos de dulce de chocolate",
    imagenCarta: Bombones,
    precioCarta: "5",
    catId: 3,
  },
];

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
    id: 1,
    nombre: "Pizzas",
    imagenOff: "/media/Iconos/CategoriaPizzaStateOff.svg",
    imagenOn: "/media/Iconos/CategoriaPizzaStateOn.svg",
    state: true,
    stylesDiv: styleDiv,
    stylesText: styleText,
  },
  {
    id: 2,
    nombre: "Empanadas",
    imagenOff: "/media/Iconos/CategoriaEmpanadaStateOff.svg",
    imagenOn: "/media/Iconos/CategoriaEmpanadaStateOn.svg",
    state: false,
    stylesDiv: styleDiv,
    stylesText: styleText,
  },
  {
    id: 3,
    nombre: "Postres",
    imagenOff: "/media/Iconos/CategoriaPostreStateOff.svg",
    imagenOn: "/media/Iconos/CategoriaPostreStateOn.svg",
    state: false,
    stylesDiv: styleDiv,
    stylesText: styleText,
  },
  {
    id: 4,
    nombre: "Bebidas",
    imagenOff: "/media/Iconos/CategoriaBebidaStateOff.svg",
    imagenOn: "/media/Iconos/CategoriaBebidaStateOn.svg",
    state: false,
    stylesDiv: styleDiv,
    stylesText: styleText,
  },
];

export { jsonData, cats };
