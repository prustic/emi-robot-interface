import React from "react";
import styled from "styled-components";
import HelpIcon from "@material-ui/icons/Help";
import ErrorIcon from "@material-ui/icons/Error";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: ${(props) => props.bottom};
  width: 90%;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 5% 15px 5%;
`;

const StyledEmergencyIcon = styled(ErrorIcon)`
  fill: #d62839 !important;
  cursor: pointer;
`;
const StyledHelpIcon = styled(HelpIcon)`
  fill: #fff !important;
  margin-left: 25px;
  cursor: pointer;
`;
const Footer = ({ bottom }) => {
  return (
    <FooterWrapper bottom={bottom}>
      <StyledEmergencyIcon fontSize="large" />
      <StyledHelpIcon fontSize="large" />
    </FooterWrapper>
  );
};

export default Footer;
