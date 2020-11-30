import React, { useState } from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "react-calendar/dist/Calendar.css";
import ClearIcon from "@material-ui/icons/Clear";

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
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
  color: #fff;
  font-family: "Montserrat";
  padding: 30px 10px 30px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
const StyledClear = styled(ClearIcon)`
  fill: #fff !important;
  margin-left: 20px;
  cursor: pointer;
`;
const NotificationType = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: ${(props) => props.color};
  margin-right: 10px;
`;
function Notifications() {
  const [notifications, setNotifications] = React.useState([
    {
      text: "Missed call from Petar",
      time: "6 hours ago",
      type: "#fdfd96",
    },
    {
      text: "Insulin Reminder",
      time: "12 hours ago",
      type: "#77dd77",
    },
    {
      text: "Daily Checkup Reminder",
      time: "23 hours ago",
      type: "#77dd77",
    },
    {
      text: "High Blood Pressure Alert",
      time: "2 days ago",
      type: "#d62839",
    },
  ]);
  const handleDelete = (index) => {};
  return (
    <>
      <div>
        <BackToMenu to="/">
          <StyledArrow />
          Back to Menu
        </BackToMenu>
        <Background height="100vh" />
        <Footer bottom="0" />
        <VideoCallWrapper>
          <Title>Your Notifications</Title>
          {notifications.map((notif, index) => (
            <NotificationRow key={index}>
              <Text>
                <NotificationType color={notif.type} />
                <b>{notif.text}</b>
              </Text>
              <Text>
                {notif.time}
                <StyledClear onClick={(index) => handleDelete(index)} />
              </Text>
            </NotificationRow>
          ))}
        </VideoCallWrapper>
      </div>
    </>
  );
}

export default Notifications;
