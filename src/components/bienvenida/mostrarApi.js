import NombreCuerpoCategoria from "./nombreCuerpoCategoria";
import Categoria from "./categoria";
import { useEffect, useState } from "react";
import { jsonData } from "./../../services/http";
import Buscador from "./buscador";
import { useSelector } from "react-redux";
import BotonContinuarItems from "../ConfirmarCarrito/BotonContinuarItems";
import FiltradoBuscador from "./filtradoBuscador";
import NotFound from "../compartidos/notFound";
import styled from "styled-components";

const ContainerCat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BarraCategoriaCss = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  padding: 0 20px;
  @media screen and (min-width: 1920px) {
    .categorias-container {
      margin: auto;
    }
  }
`;

export default function MostrarApi(props) {
  const [datosPizza, setDatosPizza] = useState([]);
  const [nombreProducto, setNombreProducto] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [datosPizzaFull, setDatosPizzaFull] = useState([]);
  const shoppings = useSelector((state) => state.shoppings);
  const [auxCat, setAuxCat] = useState("");
  const [flag, setFlag] = useState(false);
  const datosApi = jsonData;

  const fetchData = async (sendid) => {
    props.cats.map((cat) =>
      cat.id === sendid ? (cat.state = true) : (cat.state = false)
    );

    setDatosPizza(datosApi);
    setNombreProducto(datosApi.nombre);
    setAuxCat(datosApi.nombre);
  };

  const filtrar = async (terminoBusqueda) => {
    const datosApi = jsonData;
    console.log(jsonData);
    setDatosPizzaFull(datosApi);
    setBusqueda(terminoBusqueda);
    setFlag(true);
    setNombreProducto(`Todos los productos con la palabra ${terminoBusqueda}`);
    if (terminoBusqueda === "") setNombreProducto(auxCat);
  };

  let nombreCategoria = nombreProducto;
  var formUser = {
    direction: "No definido",
    floor: "No definido",
    gate: "No definido",
    aditional: "No definido",
    nameAndLast: "No definido",
    amountPay: "No definido",
  };
  useEffect(() => {
    fetchData(0);
    if (window.localStorage) {
      window.addEventListener(
        "storage",
        (event) => {
          if (event.storageArea === localStorage) {
            if (
              window.localStorage.getItem("Sidebar") !== undefined &&
              window.localStorage.getItem("Sidebar")
            ) {
              formUser = JSON.parse(localStorage.getItem("formUser"));
            }
          }
        },
        false
      );
    }
  }, []);
  return (
    <>
      <ContainerCat>
        <Buscador datosPizza={datosPizza} filtrar={filtrar} />
        <BarraCategoriaCss>
          {props.cats.map((cat, i) => (
            <Categoria key={i} cat={cat} onSubmit={fetchData} />
          ))}
        </BarraCategoriaCss>
      </ContainerCat>

      <NombreCuerpoCategoria nombreCategoria={nombreCategoria} />

      {datosPizzaFull.length === 0 && flag ? (
        <NotFound />
      ) : (
        <FiltradoBuscador
          busqueda={busqueda}
          datosPizza={datosPizza}
          datosPizzaFull={datosPizzaFull}
        />
      )}

      {shoppings.length > 0 &&
        (Object.entries(formUser).length === 0 ? (
          <BotonContinuarItems
            sendWhatsapp={false}
            to={"/formulario"}
            text={"Continuar con el pedido"}
          />
        ) : (
          <BotonContinuarItems
            sendWhatsapp={false}
            to={"/Carrito"}
            text={"Continuar con el pedido"}
          />
        ))}
    </>
  );
}
