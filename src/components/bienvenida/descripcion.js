import styled from "styled-components";
import Icon from "../../assets/svg/ImagenHome.svg";

const Container = styled.div`
  @font-face {
    font-family: Cera-Pro-Regular;
    src: url("/public/font/Cera\ Pro\ Regular.otf");
  }
  @font-face {
    font-family: Cera-Pro-Bold;
    src: url("/public/font/Cera\ Pro\ Bold.otf");
  }
  @font-face {
    font-family: Cera-Pro-Medium;
    src: url("/public/font/Cera\ Pro\ Medium.otf");
  }
  display: flex;
  gap: 10px;
  margin: 0;
  margin: 112px 112px 0px 112px;
  div img {
    width: 150px;
    height: 150px;
  }
  .span {
    padding: 0.875rem;
  }
  div h3 {
    font-family: Cera-Pro-Bold;
    color: #282636;
    font-size: 1.9rem;
    line-height: 2.25rem;
    margin-bottom: 10px;
  }
  div p {
    font-size: 1.6rem;
    line-height: 1.5rem;
    font-weight: 400;
    text-align: justify;
    color: #706766;
    margin-bottom: 10px;
    width: 80%;
  }
  div span {
    margin-top: 10px;
    text-align: justify;
    font-size: 1.3rem;
    text-align: justify;
    font-size: 1.25rem;
    color: #706766;
  }
`;

export default function Descripcion() {
  return (
    <Container>
      <div>
        <img src={Icon} />
      </div>
      <div className="span">
        <h3>Pedidos online</h3>
        <p>
          Realizá tu pedido sin necesidad del registro. Al finalizar tu orden se
          nos enviará por Whatsapp.
        </p>
        <span>
          <b>Horarios</b> Mar a Dom de: 19 P.M. a 01 A.M.
        </span>
      </div>
    </Container>
  );
}
