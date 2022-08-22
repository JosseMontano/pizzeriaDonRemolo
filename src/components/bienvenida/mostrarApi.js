import NombreCuerpoCategoria from "./nombreCuerpoCategoria";
import Categoria from "./categoria";
import { useEffect, useState } from "react";
import { axios, url } from "./../../services/http";
import Buscador from "./buscador";
import { useSelector } from "react-redux";
import BotonContinuarItems from "../ConfirmarCarrito/BotonContinuarItems";
import "../../styles/cuerpoCategoria/barraCategoria.css";
import FiltradoBuscador from "./filtradoBuscador";
import NotFound from "../compartidos/notFound";





export default function MostrarApi(props) {
  const [datosPizza, setDatosPizza] = useState([]);
  const [nombreProducto, setNombreProducto] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [datosPizzaFull, setDatosPizzaFull] = useState([]);
  const shoppings = useSelector((state) => state.shoppings);
  const [auxCat, setAuxCat] = useState("");
  const fetchData = async (sendid) => {
    props.cats.map((cat) =>
      cat.id === sendid ? (cat.state = true) : (cat.state = false)
    );
    const datosApi = await axios.get(
      `${url}buscarCategoria?categoriaId=${sendid + 1}`
    );
    setDatosPizza(datosApi.data.productos);
    setNombreProducto(datosApi.data.nombre);
    setAuxCat(datosApi.data.nombre);
  };

  const filtrar = async (terminoBusqueda) => {
    const datosApi = await axios.get(
      `${url}buscarProductoConNombre?consulta=${terminoBusqueda}`
    );
    setDatosPizzaFull(datosApi.data.productos);
    setBusqueda(terminoBusqueda);
    console.log(datosApi.data.productos);
    setNombreProducto(`Todos los productos con la palabra ${terminoBusqueda}`);
    if (terminoBusqueda === "") setNombreProducto(auxCat);
  };
  let nombreCategoria = nombreProducto;
  useEffect(() => {
    fetchData(0);
  }, []);
  var formUser = JSON.parse(localStorage.getItem("formUser")); //obtener el usuario
  return (
    <>
      <div className="categorias-container xl:flex xl:items-center xl:justify-center xl:ml-[110px] desktop:mx-[130px]">
        <Buscador datosPizza={datosPizza} filtrar={filtrar} />
        <div className="barra-categorias">
          {props.cats.map((cat) => (
            <Categoria cat={cat} onSubmit={fetchData} />
          ))}
        </div>
      </div>
      <NombreCuerpoCategoria nombreCategoria={nombreCategoria} />

      {datosPizzaFull.length === 0 ? (
        <NotFound />
      ) : (
        <FiltradoBuscador
          busqueda={busqueda}
          datosPizza={datosPizza}
          datosPizzaFull={datosPizzaFull}
        />
      )}
      {shoppings.length > 0 ? (
        Object.entries(formUser).length === 0 ? (
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
        )
      ) : (
        <p style={{ display: "none" }}>vacio</p>
      )}
    </>
  );
}
