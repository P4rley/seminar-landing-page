import styled from "styled-components";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoTime, IoLocation } from "react-icons/io5";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.fullName === "" ||
      input.email === "" ||
      input.phoneNumber === ""
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in the form",
      });
    }

    setInput({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
    Toast.fire({
      icon: "success",
      title: "Successfully registered for the seminar",
    });
  };
  return (
    <Container id="register">
      <Heading>Register</Heading>
      <Description>Instrested in attending our seminar?</Description>

      <Wrapper>
        <Left>
          <Box>
            <Title>Strategi Sederhana Taklukkan Pasar XAUUSD</Title>

            <Detail>
              <BsCalendar2DateFill style={{ fontSize: 18 }} />
              <Text>13 Desember 2022</Text>
            </Detail>
            <Detail>
              <IoTime style={{ fontSize: 18 }} />
              <Text>Pukul 14:00 - selesai</Text>
            </Detail>
            <Detail>
              <IoLocation style={{ fontSize: 18 }} />
              <Text>District 8 Property Tower L20</Text>
            </Detail>
          </Box>
        </Left>
        <Right>
          <Form action="" onSubmit={handleSubmit}>
            <Label htmlFor="">
              Full name <span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="text"
              value={input.fullName}
              onChange={handleChange}
              name="fullName"
            />
            <Label htmlFor="">
              Email <span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="email"
              id=""
              value={input.email}
              onChange={handleChange}
              name="email"
            />
            <Label htmlFor="">
              Phone number <span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="number"
              name="phoneNumber"
              id=""
              value={input.phoneNumber}
              onChange={handleChange}
            />
            <Button type="submit">Register</Button>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Register;

const Container = styled.div`
  padding: 0 2rem;

  @media screen and (min-width: 1024px) {
    padding: 0 8rem;
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
  justify-content: center;
  flex-direction: column;
  margin: 5rem 0;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
const Box = styled.div`
  width: 250px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
const Title = styled.h2``;
const Left = styled.div``;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0;
`;
const Text = styled.p`
  margin-left: 1rem;
`;
const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #7a7a7a;
  margin-top: 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Label = styled.label``;
const Input = styled.input`
  width: 250px;
  margin: 1rem 0;
  padding: 0.5rem 1.5rem;
  border-radius: 40px;
  border: 1px solid #222;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
const Button = styled.button`
  width: 250px;
  padding: 0.5rem 1.5rem;
  border-color: #222;
  background-color: #222;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 40px;

  &:hover {
    background-color: #fff;
    color: #222;
  }

  @media screen and (min-width: 720px) {
    width: 300px;
  }
`;
