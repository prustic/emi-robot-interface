import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/EMI-logo.png";

const animate = keyframes`
    0% {
		opacity: 0;
	}
	75% {
		opacity: 1;
	}
    100% {
        opacity: 0;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  animation: 5s ${animate} cubic-bezier(0.17, 1.02, 0.7, 0.9);
`;
const Logo = styled.img`
  width: 225px;
  height: auto;
  display: block;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 46px;
  color: #fff;
  font-family: "Montserrat";
  text-transform: uppercase;
  display: inline;
  @media only screen and (max-width: 960px) {
      text-align: center;
  }
`;
const SmallerText = styled.h1`
  font-size: 28px !important;
  font-weight: 300 !important;
  line-height: 46px;
  color: #fff;
  font-family: "Montserrat";
  text-transform: uppercase;
  display: inline;
  letter-spacing: 2px;
  @media only screen and (max-width: 960px) {
      text-align: center;
  }
`;
const IntroScreen = () => {
  return (
    <Container>
      <Logo src={logo} alt="EMI Logo" />
      <Title>
        E<SmallerText>asy</SmallerText> M<SmallerText>onitoring </SmallerText>
        <SmallerText>&</SmallerText> I<SmallerText>nteraction</SmallerText>
      </Title>
    </Container>
  );
};

export default IntroScreen;
