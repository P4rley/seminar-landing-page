import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Top = () => {
  return (
    <Container href="#home">
      <AiOutlineArrowUp style={{ fontSize: 20, color: "#fff" }} />
    </Container>
  );
};
export default Top;

const Container = styled.a`
  position: fixed;
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  bottom: 6%;
  right: 5%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 720px) {
    right: 5%;
  }
`;
