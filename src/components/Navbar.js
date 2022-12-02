import styled from "styled-components";
// import img from "../assets/logo.png";

const Navbar = () => {
  return (
    <Container id="home">
      {/* <Wrapper><Logo src={img} /></Wrapper> */}
      <Links>
        <Link>
          <a href="#home">Home</a>
        </Link>
        <Link>
          <a href="#about">About</a>
        </Link>
        <Link>
          <a href="#register"> Register</a>
        </Link>
      </Links>
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 8rem;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 100%;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 100%;
  }

  @media screen and (min-width: 1280px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`;
const Links = styled.ul`
  padding: 1rem 0;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`;
const Link = styled.li`
  margin: 0 1rem;
  a {
    color: #fff;
  }
`;
