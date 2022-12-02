import styled from "styled-components";
import img from "../assets/seminar-pat-2.jpg";

const Hero = () => {
  return (
    <Container>
      <Background src={img} />
      <DarkBg></DarkBg>

      <Wrapper>
        <Title>Be agresif, earn big profits</Title>
        <Text>
          Join our seminar "Strategi Sederhana Taklukkan Pasar XAUUSD"
        </Text>
        <Button href="#register">Register now</Button>
      </Wrapper>
    </Container>
  );
};
export default Hero;

const Container = styled.div`
  height: 81vh;
  position: relative;
`;
const Background = styled.img`
  width: 100%;
  height: 81vh;
  object-fit: cover;
`;
const DarkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  max-width: 450px;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 720px) {
    font-size: 3rem;
  }
`;
const Text = styled.p`
  font-weight: 300;
  margin: 1rem 0;
  font-size: 10px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;
const Button = styled.a`
  border: 1px solid #fff;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 40px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  color: #222;
  background-color: #fff;

  &:hover {
    background-color: #222;
    border-color: #222;
    color: #fff;
  }
`;
