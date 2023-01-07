import React, { useState, useEffect } from "react";
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
  const [formUserState, setFormUserState] = useState({});

  const handleGetData = () => {
    const res = jsonData.filter((v) => v.catId === idCat);
    setDatosPizza(res);
    setLoadingData(false);
  };

  var formUser = {
    direction: "No definido",
    floor: "No definido",
    gate: "No definido",
    aditional: "No definido",
    nameAndLast: "No definido",
    amountPay: "No definido",
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

  console.log(dataFilter);

  const filter = (searchTerm) => {
    setNombreProducto(searchTerm);
  };

  const handleChangeCat = (idCat) => {
    setIdCat(idCat);
  };

  useEffect(() => {
    handleGetData();
    if (window.localStorage) {
      window.addEventListener(
        "storage",
        (event) => {
          if (event.storageArea === localStorage) {
            if (
              window.localStorage.getItem("Sidebar") !== undefined &&
              window.localStorage.getItem("Sidebar")
            ) {
              if (formUser) {
                formUser = JSON.parse(localStorage.getItem("formUser"));
                setFormUserState(formUser);
              }
            }
          }
        },
        false
      );
    }
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
        formUser={formUserState}
      />
    </>
  );
};

export default Bienvenida;
