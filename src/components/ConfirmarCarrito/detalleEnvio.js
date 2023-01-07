import IconoEditar from "../../icons/iconoEditar";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  margin-left: 20px;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 12px;
  margin-top: 51px;
  height: 383px;
  width: 400;
  @media screen and (max-width: 933px) {
    margin-top: 10px;
    margin-left: 0px;
  }
`;

const Title = styled.h3`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`;

const ContainerSoon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  gap: 10px;
  width: 400px;
`;

const Subtitle = styled.h4`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #6b6166;
`;

const Paragrafh = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 1px 0px 10px 0px;

  color: #53464d;
`;

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

export const DetalleEnvio = ({ data }) => {
  var lengthForm;
  useEffect(() => {
    if (Object.entries(data).length > 0) {
      lengthForm = Object.entries(data).length;
    } else {
      lengthForm = 0;
    }
  }, []);

  return (
    <>
      {lengthForm != 0 && (
        <Container>
          <Title>Detalle del envío</Title>
          <ContainerSoon>
            <div>
              <Subtitle>Dirección</Subtitle>
              <Paragrafh>{data.direction}</Paragrafh>
              <Subtitle>Nombre y apellido</Subtitle>
              <Paragrafh>{data.nameAndLast}</Paragrafh>
              <Subtitle>Vas a pagar con</Subtitle>
              <Paragrafh>{data.amountPay}</Paragrafh>
              <Subtitle>forma de entrega</Subtitle>
              <Paragrafh>Delivery</Paragrafh>
              <hr />
              <Paragrafh>
                Recuerda que el pago es solo en efectivo y el total a pagar no
                incluye el delivery
              </Paragrafh>
            </div>
            <DetailSend>
              <div>
                <TitleDetaileSend className="titleDetailSend">
                  Piso
                </TitleDetaileSend>
                <ParagrahDetail>{data.floor}</ParagrahDetail>
              </div>
              <div>
                <TitleDetaileSend className="titleDetailSend">
                  Puerta
                </TitleDetaileSend>
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
          </ContainerSoon>
        </Container>
      )}
    </>
  );
};
