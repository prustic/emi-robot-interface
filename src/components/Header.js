import React from "react";
import styled from "styled-components";
import Notifications from "./Notifications";
import Search from "./Search";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5% 15px 5%;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Search />
      <Notifications />
    </HeaderWrapper>
  );
};

export default Header;
