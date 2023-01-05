import axios from "axios";
import Agua from "../assets/imagenes/agua.jpg";
import Cerveza from "../assets/imagenes/cerveza.jpg";
//const url="https://donremolo.site:8170/api/";

const url = "https://donremolo-julio2022.herokuapp.com/api/";

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
];

export { axios, url, jsonData };
