import styled from "styled-components";

const Container = styled.div`
  @font-face {
    font-family: Cera-Pro-Bold;
    src: url("/public/font/Cera\ Pro\ Bold.otf");
  }
  .nombreCategoria {
    font-family: Cera-Pro-Bold;
  }
  width: 95%;
  max-width: 1200px;
  padding: 0 10px;
  border-bottom: 2px solid #d6d6d6;
  margin: 30px auto;
  p {
    font-size: 20px;
  }
`;

export default function NombreCuerpoCategoria(props) {
  return (
    <Container>
      <p> {props.nombreCategoria} </p>
    </Container>
  );
}
