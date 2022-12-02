import styled from "styled-components";
import img from "../assets/Patrick Cheung.png";

const Speaker = () => {
  return (
    <Container>
      <Heading>Our Speaker</Heading>

      <Wrapper>
        <Left>
          <Name>Mr. Patrick Cheung</Name>
          <Description>
            Beliau Lulus dari Universitas Cina Anggota Chartered Hong Kong
            Institut Analis Keuangan (CFA). Beliau menjadi Peran kunci dalam
            keuangan internasional institusi selama 19 tahun terakhir Layanan
            untuk wilayah China yang lebih besar - Bank Cina Hong Kong (2001).
          </Description>
        </Left>
        <Right>
          <Image src={img} alt="Mr. Patrick Cheung" />
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Speaker;

const Container = styled.div`
  height: 100%;
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 8rem;
  }
`;
const Heading = styled.h3`
  margin-top: 2rem;
  font-weight: 400;
  color: #222;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;
const Left = styled.div``;
const Name = styled.h1`
  color: #222;
  font-size: 2rem;
  font-weight: 600;
`;
const Description = styled.p`
  max-width: 500px;
  margin: 1rem 0;
  color: #7a7a7a;
  font-weight: 300;
  font-size: 12px;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
const Right = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: 720px) {
    margin-top: 0;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: contain;
  @media screen and (min-width: 1024px) {
    width: 400px;
    height: 500px;
  }
`;
