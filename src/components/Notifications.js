import React from "react";
import styled from "styled-components";
import NotificationsIcon from '@material-ui/icons/Notifications';

const NotificationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #fff;
  font-family: "Montserrat";
  cursor: pointer;
  transition: 0.5s;

  &:hover {
      text-shadow: 1px 3px 5px rgba(255,255,255,0.4);
  }
`;
const StyledArrow = styled(NotificationsIcon)`
  fill: #fff;
  margin-left: 15px;
`;
const Notifications = () => {
  return (
    <NotificationWrapper>
      You have 5 notifications.
      <StyledArrow fontSize="normal" />
    </NotificationWrapper>
  );
};

export default Notifications;
