import React from "react";
import styled, { keyframes } from "styled-components";
import MicIcon from "@material-ui/icons/Mic";
import { Grid } from "@material-ui/core";
import MenuOptions from "./MenuOptions";
import Clock from "react-live-clock";
import { useWindowSize } from "react-use";
import "moment-timezone";
import Header from "./Header";
import Footer from "./Footer";

const animate = keyframes`
    0% {
		opacity: 0;
	}
    100% {
        opacity: 1;
    }
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 3;
  animation: 1s ${animate} ease-in;
`;
const MenuTitle = styled.h1`
  font-size: 56px;
  font-weight: 500;
  line-height: 66px;
  color: #fff;
  font-family: "Montserrat";
  display: inline;
  margin-bottom: 15px;
  text-align: center;
`;
const MenuSubtitle = styled.h1`
  font-size: 26px;
  font-weight: 400;
  line-height: 36px;
  color: #fff;
  font-family: "Montserrat";
  display: inline;
  margin-bottom: 45px;
  text-align: center;
`;
const MenuWelcomer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 960px) {
      padding: 55px 0 55px 0;
  }
`;
const GridContainer = styled(Grid)`
  width: 60%;
  margin: auto;
`;
const GridItem = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};

  @media only screen and (max-width: 960px) {
    padding-bottom: 15px;
  }
`;
const StyledMic = styled(MicIcon)`
  fill: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  padding: 5px;
  margin-right: 75px;
  cursor: pointer;
  transition: 0.5s !important;
  &:hover {
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.2);
  }
  @media only screen and (max-width: 960px) {
    margin-right: 0px;
  }
`;
const Button = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #fff;
  font-family: "Montserrat";
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.2);
  }
`;

const MainMenu = () => {
  const [welcome, setWelcome] = React.useState(true);
  const { width } = useWindowSize();
  const WelcomePhrases = [
    "Good morning",
    "Good afternoon",
    "Good evening",
    "Welcome back",
    "Hello",
    "A mi arunk",
  ];
  const WelcomeSubtitles = [
    "How can I help you today?",
    "Can I help you in any way?",
    "What is your plan for today?",
    "What are we doing today?",
    "Is there any way I can help you?",
  ];
  return (
    <MenuContainer>
      {welcome ? (
        <MenuWelcomer>
          <MenuTitle>
            {WelcomePhrases[Math.floor(Math.random() * WelcomePhrases.length)] +
              ", Emi."}
          </MenuTitle>
          <MenuSubtitle>
            {
              WelcomeSubtitles[
                Math.floor(Math.random() * WelcomePhrases.length)
              ]
            }
          </MenuSubtitle>
          <GridContainer container>
            <GridItem
              justify={width > 960 ? "flex-end" : "center"}
              item
              xs={12}
              md={6}
            >
              <StyledMic fontSize="large" />
            </GridItem>
            <GridItem
              justify={width > 960 ? "flex-start" : "center"}
              item
              xs={12}
              md={6}
            >
              <Button onClick={() => setWelcome(false)}>Go to Menu</Button>
            </GridItem>
          </GridContainer>
        </MenuWelcomer>
      ) : (
        <>
            <Header />
            <MenuWelcomer>
              <MenuTitle>
                <Clock
                  format={"HH:MM:ss"}
                  ticking={true}
                  timezone={"Europe/Zagreb"}
                />
              </MenuTitle>
              <MenuOptions />
            </MenuWelcomer>
            <Footer />
        </>
      )}
    </MenuContainer>
  );
};

export default MainMenu;
