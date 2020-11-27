import React from "react";
import styled, { keyframes } from "styled-components";
import _ from "lodash";

const animate = keyframes`
    0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
	}
	100% {
		transform: translateY(-800px) rotate(360deg);
		opacity: 0;
	}
`;
const AnimatedBackground = styled.div`
  background: linear-gradient(to left, #7785a5, #465576);
  width: 100%;
  height: 100vh;
  position: absolute;
`;
const BoxItem = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  height: 25px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${animate} 20s linear infinite;
  bottom: -150px;
`;
const BoxArea = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & ${BoxItem}:nth-child(1) {
    left: 86%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  & ${BoxItem}:nth-child(2) {
    left: 12%;
    width: 30px;
    height: 30px;
    animation-delay: 1.5s;
    animation-duration: 10s;
  }
  & ${BoxItem}:nth-child(3) {
    left: 70%;
    width: 100px;
    height: 100px;
    animation-delay: 5.5s;
  }
  & ${BoxItem}:nth-child(4) {
    left: 42%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 15s;
  }
  & ${BoxItem}:nth-child(5) {
    left: 65%;
    width: 40px;
    height: 40px;
    animation-delay: 0s;
  }
  & ${BoxItem}:nth-child(6) {
    left: 15%;
    width: 110px;
    height: 110px;
    animation-delay: 3.5s;
  }
`;

const Background = () => {
  return (
    <AnimatedBackground>
      <BoxArea>
        {_.times(5, (index) => (
          <BoxItem key={index} />
        ))}
      </BoxArea>
    </AnimatedBackground>
  );
};

export default Background;
