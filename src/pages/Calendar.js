import React, { useState } from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Grid } from "@material-ui/core";

const animate = keyframes`
    0% {
		opacity: 0;
	}
    100% {
        opacity: 1;
    }
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
  margin: 10px 10px 0 0;
  @media only screen and (max-width: 960px) {
    padding: 15px 25px 10px 25px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
  color: #fff;
  font-family: "Montserrat";
  padding: 30px 10px 30px 10px;
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
  width: 225px;
  margin: 10px 0 0 10px;
  float: right;
  &:hover {
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.2);
  }
`;
const NotificationColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
const NotificationRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  width: 100%;
`;

function CalendarComponent() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div>
        <BackToMenu to="/">
          <StyledArrow />
          Back to Menu
        </BackToMenu>
        <Background height="135vh" />
        <Footer bottom="-35vh" />
        <VideoCallWrapper>
          <Title>Your Calendar</Title>
          <Calendar onChange={onChange} value={value} />
          <Grid container>
            <Grid item xs={12} md={8}>
              <Box>
                <BoxTitle>Upcoming Events</BoxTitle>
                <NotificationColumn>
                  <NotificationRow>
                    <Text>
                      <b>December 5th 2020</b>
                    </Text>
                    <Text>Remember to Submit - Deadline</Text>
                  </NotificationRow>
                  <NotificationRow>
                    <Text>
                      <b>December 25th 2020</b>
                    </Text>
                    <Text>Christmas</Text>
                  </NotificationRow>
                  <NotificationRow>
                    <Text>
                      <b>December 31th 2020</b>
                    </Text>
                    <Text>New Years' Eve</Text>
                  </NotificationRow>
                </NotificationColumn>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button>Add Event</Button>
            </Grid>
          </Grid>
        </VideoCallWrapper>
      </div>
    </>
  );
}

export default CalendarComponent;
