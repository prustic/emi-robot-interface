import React from "react";
import _ from "lodash";
import MenuOption from "./MenuOption";
import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const animate = keyframes`
    0% {
		opacity: 0;
	}
    100% {
        opacity: 1;
    }
`;

const MenuOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 1s ${animate} ease-in;
  width: 90%;
  margin: 55px auto;

  @media only screen and (max-width: 960px) {
    margin: 0 auto 0 auto;
  }
`;

const MenuOptions = () => {
  return (
    <MenuOptionsContainer>
      <Grid container>
        {_.times(6, (index) => (
          <Grid item xs={6} md={2}>
            <Link to={index === 0 ? '/call' : index === 1 ? '/data' : index === 2 ? '/tasks' : index === 3 ? '/calendar' : '/'}>
              <MenuOption option={index} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </MenuOptionsContainer>
  );
};

export default MenuOptions;
