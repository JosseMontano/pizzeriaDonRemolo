import { useState, useEffect, useContext } from "react";
import Titulo from "./titulo";
import Descripcion from "./descripcion";
import MostrarApi from "./mostrarApi";
import ContainerCat from "./containerCat";
import { jsonData } from "./../../services/http";

const Bienvenida = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [idCat, setIdCat] = useState(1);
  const [datosPizza, setDatosPizza] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const handleGetData = () => {
    const res = jsonData.filter((v) => v.catId === idCat);
    setDatosPizza(res);
    setLoadingData(false);
  };

  const search = (v) => {
    if (nombreProducto === "") return v;
    if (
      v.tituloCarta
        .toLocaleLowerCase()
        .includes(nombreProducto.toLocaleLowerCase())
    ) {
      return v;
    }
  };

  let dataFilter = datosPizza.filter((v) => {
    return search(v);
  });


  const filter = (searchTerm) => {
    setNombreProducto(searchTerm);
  };

  const handleChangeCat = (idCat) => {
    setIdCat(idCat);
  };

  useEffect(() => {
    handleGetData();
  }, [idCat]);

  return (
    <>
      <Titulo />
      <Descripcion />
      <ContainerCat filter={filter} handleChangeCat={handleChangeCat} />
      <MostrarApi
        nombreProducto={nombreProducto}
        idCat={idCat}
        datosPizza={nombreProducto === "" ? datosPizza : dataFilter}
        loadingData={loadingData}
      />
    </>
  );
};

export default Bienvenida;
