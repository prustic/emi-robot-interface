import { Grid } from "@material-ui/core";
import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../components/Background";
import HelpIcon from "@material-ui/icons/Help";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const animate = keyframes`
    0% {
		opacity: 0;
	}
    100% {
        opacity: 1;
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

const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 35px 45px 40px 45px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  background: rgba(70, 85, 118, 0.6);
  cursor: pointer;
  transition: 0.5s;
  margin: 10px;
  height: 150px;
  &:hover {
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.4);
  }
  @media only screen and (max-width: 960px) {
    padding: 15px 25px 10px 25px;
  }
`;

const BigOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18px 45px 40px 45px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  background: rgba(70, 85, 118, 0.6);
  cursor: pointer;
  transition: 0.5s;
  margin: 10px;
  &:hover {
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.4);
  }
  @media only screen and (max-width: 960px) {
    padding: 15px 25px 10px 25px;
  }
`;
const OptionTitle = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  color: #fff;
  font-family: "Montserrat";
  margin-bottom: 25px;
`;
const OptionText = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
  color: #fff;
  font-family: "Montserrat";
`;
const StyledHelpIcon = styled(HelpIcon)`
  fill: #fff !important;
  margin-bottom: 25px;
`;
const StyledHeartIcon = styled(FavoriteIcon)`
  fill: #fff !important;
  margin-bottom: 25px;
`;
const StyledPersonIcon = styled(PersonIcon)`
  fill: #fff !important;
  margin-bottom: 25px;
`;
const StyledArrow = styled(ArrowBackIcon)`
  fill: #fff !important;
  margin-right: 15px;
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
const StyledGrid = styled(Grid)`
    display: flex;
    align-items: stretch;
`
const VideoCall = () => {
  return (
    <div>
      <BackToMenu to="/">
          <StyledArrow />
          Back to Menu
      </BackToMenu>
      <Background height="100vh"/>
      <Footer bottom="0"/>
      <VideoCallWrapper>
        <Title>Who would you like to call?</Title>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Option>
              <StyledHelpIcon fontSize="large" />
              <OptionTitle>General Support</OptionTitle>
              <OptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OptionText>
            </Option>
            <Option>
              <StyledHeartIcon fontSize="large" />
              <OptionTitle>Health Support</OptionTitle>
              <OptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OptionText>
            </Option>
          </Grid>
          <StyledGrid item xs={12} md={6}>
            <BigOption>
              <StyledPersonIcon fontSize="large" />
              <OptionTitle>
                <i>Relative's Name</i>
              </OptionTitle>
              <OptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OptionText>
            </BigOption>
          </StyledGrid>
        </Grid>
      </VideoCallWrapper>
    </div>
  );
};

export default VideoCall;
