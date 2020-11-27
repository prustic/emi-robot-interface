import React from "react";
import styled from "styled-components";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EventIcon from "@material-ui/icons/Event";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import SettingsIcon from "@material-ui/icons/Settings";

const MenuOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 45px 20px 45px;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 5px;
  background: rgba(70,85,118, 0.6);
  cursor: pointer;
  transition: 0.5s;
  margin: 10px;
  height: 150px;
  &:hover {
      box-shadow: 1px 3px 5px rgba(255,255,255,0.4);
  }
  @media only screen and (max-width: 960px) {
    padding: 15px 25px 10px 25px;

  }
`;
const StyledVideoCallIcon = styled(VideoCallIcon)`
  fill: #fff !important;
  margin-bottom: 45px;

  @media only screen and (max-width: 1406px) {
    transform: translateY(10px);
  }
`;
const StyledInsertChartIcon = styled(InsertChartIcon)`
  fill: #fff !important;
  margin-bottom: 45px;
  
  @media only screen and (max-width: 1406px) {
    transform: translateY(10px);
  }
`;
const StyledFormatListBulletedIcon = styled(FormatListBulletedIcon)`
  fill: #fff !important;
  margin-bottom: 45px;
  
  @media only screen and (max-width: 1406px) {
    transform: translateY(10px);
  }
`;
const StyledEventIcon = styled(EventIcon)`
  fill: #fff !important;
  margin-bottom: 45px;
`;
const StyledLocalHospitalIcon = styled(LocalHospitalIcon)`
  fill: #fff !important;
  margin-bottom: 45px;
`;
const StyledSettingsIcon = styled(SettingsIcon)`
  fill: #fff !important;
  margin-bottom: 45px;
`;
const MenuOptionText = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #fff;
  font-family: "Montserrat";
  text-align: center;
`
const MenuOption = ({ option }) => {
  const logos = [
    <StyledVideoCallIcon fontSize="large" />,
    <StyledInsertChartIcon fontSize="large" />,
    <StyledFormatListBulletedIcon fontSize="large" />,
    <StyledEventIcon fontSize="large" />,
    <StyledLocalHospitalIcon fontSize="large" />,
    <StyledSettingsIcon fontSize="large" />,
  ];
  const texts = [
    "Video Call",
    "Your Data",
    "Daily Tasks",
    "Calendar",
    "VHE",
    "Settings",
  ];
  return (
    <MenuOptionBox>
      {logos[option]}
      <MenuOptionText>{texts[option]}</MenuOptionText>
    </MenuOptionBox>
  );
};

export default MenuOption;
