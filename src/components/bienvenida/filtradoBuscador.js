import React from "react";
import ApiRest from "./resultadoApi";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 1rem;
  margin: 0px 110px;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(400px, 350px));
  margin-bottom: 80px;
  .contanedorimagen_carta {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .containerCartaInterna img {
    max-width: 380px;
    width: 100%;
    height: 210px;
  }
  @media screen and (max-width: 1279px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    margin: 0px 15px;
    margin-bottom: 80px;

    .inputSearch {
      margin-top: 17px;
    }
  }
  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (max-width: 525px) {
    margin: 0px 20px;
    margin-bottom: 130px;

    .containerCartaInterna {
      display: grid;
      grid-template-columns: 110px 1fr;
    }
    .containerCartaInterna img {
      height: 110px;
      width: 110px;
    }
  }
`;

const FiltradoBuscador = ({ busqueda, datosPizza, datosPizzaFull }) => {
  return (
    <Container>
      {busqueda === ""
        ? datosPizza
            .filter((data) => {
              return data;
            })
            .map((data, i) => {
              return <ApiRest {...data} key={i} />;
            })
        : datosPizzaFull
            .filter((data) => {
              if (data.nombre.toLowerCase().includes(busqueda.toLowerCase()))
                return data;
            })
            .map((data, i) => {
              return <ApiRest {...data} key={i} />;
            })}
    </Container>
  );
};

export default FiltradoBuscador;
