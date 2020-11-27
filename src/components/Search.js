import React from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const StyledIcon = styled(SearchIcon)`
  fill: #fff !important;

  @media only screen and (max-width: 960px) {
    padding: 5px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 100%;
  }
`;
const SearchWrapper = styled(Grid)`
  width: 350px !important;
`;

const StyledGrid = styled(Grid)`
    transform: translateY(-11px);
    @media only screen and (max-width: 960px) {
        display: none;
    }
`
const Search = () => {
  return (
    <SearchWrapper container spacing={1} alignItems="center">
      <Grid item>
        <StyledIcon  />
      </Grid>
      <StyledGrid item>
        <TextField id="search" label="Search" />
      </StyledGrid>
    </SearchWrapper>
  );
};

export default Search;
