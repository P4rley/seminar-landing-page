import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img from "../assets/seminar.JPG";
import img2 from "../assets/seminar-pat-2.jpg";
import img3 from "../assets/seminar-pat.jpg";

const About = () => {
  return (
    <Container id="about">
      <Heading>About Our Seminar</Heading>

      <Wrapper>
        <Description>
          Seminar ini akan membahas tentang teknik yang tepat untuk investasi
          dengan XAUUSD, pemahaman menghadapi resesi dan dampaknya terhadap
          perekonomian, solusi menghadapi ancaman resesi, mempelajari strategi
          investasi paling mudah, dan mempersenjatai diri dari ancaman resesi
          dengan teknik rahasia kami yang bernama “MAGIC LINE”.
        </Description>
      </Wrapper>
      <SliderWrapper hasTrack={true}>
        <SliderContent>
          <img src={img} alt="" />
        </SliderContent>
        <SliderContent>
          <img src={img2} alt="" />
        </SliderContent>
        <SliderContent>
          <img src={img3} alt="" />
        </SliderContent>
      </SliderWrapper>
    </Container>
  );
};
export default About;

const Container = styled.div`
  height: 100%;
  padding: 2rem 0;
`;

const Heading = styled.h3`
  margin-top: 2rem;
  font-weight: 400;
  color: #222;
  padding: 0 1rem;

  @media screen and (min-width: 720px) {
    padding: 0 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 8rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
`;
const Description = styled.p`
  max-width: 800px;
  margin: 5rem 0;
  font-size: 14px;
  color: #707070;
  text-align: left;

  @media screen and (min-width: 720px) {
    text-align: center;
    padding: 0 4rem;
  }

  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`;

const SliderWrapper = styled(Splide)``;
const SliderContent = styled(SplideSlide)`
  img {
    width: 100vw;
    height: 450px;
    object-fit: cover;
  }
`;
