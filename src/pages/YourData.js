import { Grid } from "@material-ui/core";
import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../components/Background";
import bp_logo from "../assets/bp.svg";
import heart_logo from "../assets/heart.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PieGraph from "../components/PieGraph";
import LineGraph from "../components/LineGraph";
import HistoGraph from "../components/HistoGraph";

const animate = keyframes`
    0% {
		opacity: 0;
	}
    100% {
        opacity: 1;
    }
`;

const heartbeat = keyframes`
    0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;
const VideoCallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  width: 80%;
  margin: auto;
  padding-top: 50px;
  animation: 1s ${animate} ease-in;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 500;
  line-height: 66px;
  color: #fff;
  font-family: "Montserrat";
  display: inline;
  margin-bottom: 35px;
  text-align: center;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: column;
  padding: 25px 35px 25px 35px;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-right: ${(props) => props.borderRight};
  background: rgba(70, 85, 118, 0.6);
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  z-index: 4;
  @media only screen and (max-width: 960px) {
    padding: 15px 25px 10px 25px;
  }
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  color: #fff;
  font-family: "Montserrat";
  transform: ${(props) => props.transform};
`;
const BoxTitle = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  color: #fff;
  font-family: "Montserrat";
  margin-bottom: 25px;
  padding-left: 10px;
`;
const BoxLargeText = styled.div`
  font-size: 46px;
  font-weight: 500;
  line-height: 38px;
  color: #fff;
  font-family: "Montserrat";
  padding-left: 10px;
`;
const IconGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
`;
const StyledHeartIcon = styled.img`
  width: 65px;
  animation: 3s ${heartbeat} infinite;
`;
const StyledIcon = styled.img`
  width: 65px;
`;
const StyledArrow = styled(ArrowBackIcon)`
  fill: #fff !important;
  margin-left: 10px;
`;
const BackToMenu = styled(Link)`
  position: absolute;
  z-index: 3;
  top: 15px;
  left: 15px;
  font-size: 18px;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
  color: #fff;
  font-family: "Montserrat";
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HealthTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: column;
  padding: 10px 10px 10px 10px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 0 5px 5px 5px;
  background: rgba(70, 85, 118, 0.6);
  transition: 0.5s;
  @media only screen and (max-width: 960px) {
    padding: 15px 25px 10px 25px;
  }
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  color: #fff;
  font-family: "Montserrat";
  position: relative;
  z-index: 3;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px 35px 25px 35px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  background: rgba(70, 85, 118, 0.6);
  transition: 0.5s;
  margin: 10px;
  @media only screen and (max-width: 960px) {
    padding: 15px 25px 10px 25px;
  }
`;
const YourData = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <BackToMenu to="/">
        <StyledArrow />
        Back to Menu
      </BackToMenu>
      <Background height="200vh" />
      <Footer bottom="-100vh" />
      <VideoCallWrapper>
        <Title>Your Data</Title>
        <Grid container>
          <Grid item xs={12} md={4} alignItems="flex-start">
            <Tab
              border={
                active === 0
                  ? "2px solid rgba(255, 255, 255, 0.7)"
                  : "1px solid rgba(255, 255, 255, 0.2)"
              }
              borderRadius={"5px 0px 0px 5px"}
              borderRight={
                active === 0
                  ? "2px solid rgba(70,85,118, 1) !important"
                  : "1px !important"
              }
              transform={active === 0 ? "translateX(2px)" : "translateX(0px)"}
              onClick={() => setActive(0)}
            >
              Health
            </Tab>
            <Tab
              border={
                active === 1
                  ? "2px solid rgba(255, 255, 255, 0.7)"
                  : "1px solid rgba(255, 255, 255, 0.2)"
              }
              borderRadius={"5px 0px 0px 5px"}
              borderRight={active === 1 ? "0px !important" : "1px !important"}
              transform={active === 1 ? "translateX(2px)" : "translateX(0px)"}
              onClick={() => setActive(1)}
            >
              Habits
            </Tab>
            <Tab
              border={
                active === 2
                  ? "2px solid rgba(255, 255, 255, 0.7)"
                  : "1px solid rgba(255, 255, 255, 0.2)"
              }
              borderRadius={"5px 0px 0px 5px"}
              borderRight={active === 2 ? "0px !important" : "1px !important"}
              transform={active === 2 ? "translateX(2px)" : "translateX(0px)"}
              onClick={() => setActive(2)}
            >
              Diet
            </Tab>
            <Tab
              border={
                active === 3
                  ? "2px solid rgba(255, 255, 255, 0.7)"
                  : "1px solid rgba(255, 255, 255, 0.2)"
              }
              borderRadius={"5px 0px 0px 5px"}
              borderRight={active === 3 ? "0px !important" : "1px !important"}
              transform={active === 3 ? "translateX(2px)" : "translateX(0px)"}
              onClick={() => setActive(3)}
            >
              More
            </Tab>
          </Grid>
          <Grid item xs={12} md={8}>
            {active === 0 && (
              <HealthTab>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Grid container>
                        <IconGrid item xs={12} md={4}>
                          <StyledHeartIcon src={heart_logo} />
                        </IconGrid>
                        <Grid item xs={12} md={8}>
                          <BoxTitle>HR:</BoxTitle>
                          <BoxLargeText>70</BoxLargeText>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Grid container>
                        <IconGrid item xs={12} md={4}>
                          <StyledIcon src={bp_logo} />
                        </IconGrid>
                        <Grid item xs={12} md={8}>
                          <BoxTitle>BP:</BoxTitle>
                          <BoxLargeText>125 / 75</BoxLargeText>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  <BoxTitle>Some Plotted Data</BoxTitle>
                  <LineGraph />
                </Box>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <BoxTitle>Some Plotted Data</BoxTitle>
                      <PieGraph />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <BoxTitle>Some Plotted Data</BoxTitle>
                      <HistoGraph />
                    </Box>
                  </Grid>
                </Grid>
              </HealthTab>
            )}
            {active === 1 && (
              <HealthTab>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <StyledHeartIcon fontSize="large" />{" "}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <StyledHeartIcon fontSize="large" />{" "}
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Box>
              </HealthTab>
            )}
            {active === 2 && (
              <HealthTab>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <StyledHeartIcon fontSize="large" /> Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <StyledHeartIcon fontSize="large" />{" "}
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Box>
              </HealthTab>
            )}
            {active === 3 && (
              <HealthTab>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <StyledHeartIcon fontSize="large" />{" "}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <StyledHeartIcon fontSize="large" /> Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Box>
              </HealthTab>
            )}
          </Grid>
        </Grid>
      </VideoCallWrapper>
    </div>
  );
};

export default YourData;
