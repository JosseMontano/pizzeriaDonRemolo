import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import IconoEditar from "../../../icons/iconoEditar";

const DetailSend = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 0px 20px;
  p {
    display: flex;
    color: #e63c19;
    svg {
      margin-left: 10px;
      margin-top: 4px;
    }
  }
`;

const EditBtnDetail = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  justify-self: center;
  align-self: flex-end;
`;

const TitleDetaileSend = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #6b6166;
`;

const ParagrahDetail = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 1px 0px 10px 0px;
  color: #53464d;
`;

const ColRight = ({ data }) => {
  return (
    <DetailSend>
      <div>
        <TitleDetaileSend className="titleDetailSend">Piso</TitleDetaileSend>
        <ParagrahDetail>{data.floor}</ParagrahDetail>
      </div>
      <div>
        <TitleDetaileSend className="titleDetailSend">Puerta</TitleDetaileSend>
        <ParagrahDetail>{data.gate}</ParagrahDetail>
      </div>
      <EditBtnDetail>
        <NavLink to="/formulario">
          <p>
            Editar
            <IconoEditar />
          </p>
        </NavLink>
      </EditBtnDetail>
    </DetailSend>
  );
};

export default ColRight;
