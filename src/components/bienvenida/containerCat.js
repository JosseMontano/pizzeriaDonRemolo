import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { cats } from "../../services/http";
import Buscador from "./buscador";
import Categoria from "./categoria";

const ContainerCatSty = styled.div`
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

const ContainerCat = (props) => {
  const [category, setCategory] = useState(cats);
  const filtrar = async (terminoBusqueda) => {
    props.filter(terminoBusqueda);
  };

  const changeCat = (sendid) => {
    setCategory(
      category.map((v) =>
        v.id === sendid ? { ...v, state: true } : { ...v, state: false }
      )
    );
    props.handleChangeCat(sendid)
  };

  return (
    <ContainerCatSty>
      <Buscador filtrar={filtrar} />
      <BarraCategoriaCss>
        {category.map((cat, i) => (
          <Categoria key={i} cat={cat} changeCat={changeCat} />
        ))}
      </BarraCategoriaCss>
    </ContainerCatSty>
  );
};

export default ContainerCat;
