import { Grid, Checkbox } from "@material-ui/core";
import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../components/Background";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import SortIcon from "@material-ui/icons/Sort";
import AddIcon from "@material-ui/icons/Add";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 35px 45px 40px 45px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  background: rgba(70, 85, 118, 0.6);
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
const SortTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #fff;
  font-family: "Montserrat";
  text-align: right;
  align-items: center;
  display: flex;
  float: right;
  cursor: pointer;
`;
const OptionText = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
  color: #fff;
  font-family: "Montserrat";
  margin-bottom: 25px;
`;
const StyledSortIcon = styled(SortIcon)`
  fill: #fff !important;
  margin-left: 15px;
`;
const StyledTaskIcon = styled(FormatListBulletedIcon)`
  fill: #fff !important;
  margin: 25px 0 25px 0;
`;
const StyledAddIcon = styled(AddIcon)`
  fill: #fff !important;
  margin-left: 10px;
`;
const AddNew = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
const StyledUp = styled(ArrowUpwardIcon)`
  fill: ${(props) => props.fill} !important;
  margin-right: 20px;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
  color: #fff;
  font-family: "Montserrat";
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;
const AdditionalTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;
const StyledHeart = styled(FavoriteBorderIcon)`
  fill: #fff !important;
  margin: 25px 0 25px 0;
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
  width: 50%;
  margin: auto;
  transition: 0.5s;
  &:hover {
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.2);
  }
`;

const DailyTasks = () => {
  const [tasks, setTasks] = React.useState([
    {
      text: "Call daughter",
      type: "#d62839",
    },
    {
      text: "Clean house",
      type: "#fdfd96",
    },
    {
      text: "Take Sushi for a walk",
      type: "#77dd77",
    },
    {
      text: "Feed pidgeons at the square",
      type: "#77dd77",
    },
  ]);
  const [dailyTasks, setDailyTasks] = React.useState([
    {
      text: "Take Insulin",
      when: "10.00am",
    },
    {
      text: "Checkup with psychologist",
      when: "1:00pm",
    },
  ]);
  return (
    <div>
      <BackToMenu to="/">
        <StyledArrow />
        Back to Menu
      </BackToMenu>
      <Background height="200vh" />
      <Footer bottom="-100vh" />
      <VideoCallWrapper>
        <Title>Your Tasks</Title>

        <Grid container>
          <Grid item xs={12}>
            <BigOption>
              <Grid container alignContent="space-between">
                <Grid item xs={12} md={6}>
                  <OptionTitle>To-do List</OptionTitle>
                </Grid>
                <Grid item xs={12} md={6} alignContent="flex-end">
                  <SortTitle>
                    Sort by <StyledSortIcon />
                  </SortTitle>
                </Grid>
              </Grid>
              {tasks.map((task, index) => (
                <NotificationRow key={index}>
                  <Text>
                    <StyledUp fill={task.type} />
                    <Checkbox style={{ marginRight: "25px" }} />
                    {index + 1 + ".     " + task.text}
                  </Text>
                  <AdditionalTags>
                    <StyledClear />
                  </AdditionalTags>
                </NotificationRow>
              ))}
            </BigOption>
          </Grid>
          <StyledGrid item xs={12} md={8}>
            <BigOption>
              <StyledTaskIcon fontSize="large" />
              <OptionTitle>Daily Tasks </OptionTitle>
              <OptionText>
                These are your daily tasks, you will be alerted about them each
                day via notifications.
              </OptionText>
              {dailyTasks.map((task, index) => (
                <NotificationRow key={index}>
                  <Text>{task.text}</Text>
                  <Text>
                    <div style={{ fontSize: "10px", marginRight: "5px" }}>
                      Remind me at:
                    </div>
                    {task.when}
                  </Text>
                </NotificationRow>
              ))}
              <AddNew>
                <Text>
                  Add New <StyledAddIcon />
                </Text>
              </AddNew>
            </BigOption>
          </StyledGrid>
          <StyledGrid item xs={12} md={4}>
            <BigOption>
              <StyledHeart fontSize="large" />
              <OptionTitle>Simple Schedule</OptionTitle>
              <Timeline
                align="alternate"
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Wake up</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Go for a walk</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Take medicine</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>Don't stay up too late</TimelineContent>
                </TimelineItem>
              </Timeline>
              <Button>Edit</Button>
            </BigOption>
          </StyledGrid>
        </Grid>
      </VideoCallWrapper>
    </div>
  );
};

export default DailyTasks;
