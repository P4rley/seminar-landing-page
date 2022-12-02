import styled from "styled-components";
// import img from "../assets/prize-seminar.JPG";
import icon from "../assets/gold-ingots-gold-svgrepo-com.svg";
import icon2 from "../assets/money-svgrepo-com.svg";
import icon3 from "../assets/bag-svgrepo-com.svg";

const Benefit = () => {
  return (
    <Container>
      <Heading>Benefit of Attending Our Seminar</Heading>
      <Text>Kami menyediakan hadiah-hadiah menarik pada saat seminar.</Text>

      <Wrapper>
        <Left>{/* <Image src={img} alt="" /> */}</Left>
        <Right>
          <Prize>
            <Icon src={icon} alt="" />
            <PrizeName>Emas 3gr</PrizeName>
          </Prize>
          <Prize>
            <Icon src={icon2} alt="" />
            <PrizeName>Uang 500 Ribu Rupiah</PrizeName>
          </Prize>
          <Prize>
            <Icon src={icon3} alt="" />
            <PrizeName>Hampers Mentari Mulia</PrizeName>
          </Prize>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Benefit;

const Container = styled.div`
  padding: 2rem 0;
`;
const Heading = styled.h3`
  margin-top: 2rem;
  font-weight: 400;
  color: #222;
  padding: 0 2rem;
  @media screen and (min-width: 1024px) {
    padding: 0 8rem;
  }
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #7a7a7a;
  margin: 1.5rem 0;
  padding: 0 2rem;
  @media screen and (min-width: 1024px) {
    padding: 0 8rem;
    font-size: 1rem;
  }
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Left = styled.div``;
const Image = styled.img`
  max-width: 100vw;
  max-height: 400px;
  object-fit: cover;

  @media screen and (min-width: 720px) {
    max-width: 400px;
    max-height: 300px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 500px;
    max-height: 400px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 700px;
    max-height: 500px;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 2rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 8rem;
  }
`;
const Prize = styled.div`
  text-align: center;
  width: 100px;

  @media screen and (min-width: 1024px) {
    margin-right: 1.5rem;
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;

  @media screen and (min-width: 720px) {
    width: 60px;
    height: 60px;
  }
`;
const PrizeName = styled.p`
  font-size: 10px;
  color: #222;
  font-weight: 400;
  margin: 1rem 0;
  @media screen and (min-width: 720px) {
    font-size: 1rem;
  }
`;
