import React from "react";
import PropTypes from "prop-types";
import PortfolioList from "../List/PortfolioList.jsx";
import { Header, ListContainer, Container } from "./emptyPortfolios";

const EmptyPortfolios = props => {
  return (
    // add loading/skeleton when loading
    props.portfolios.length > 0 && (
      <Container>
        <Header>don't leave your stocks untracked, add them now!</Header>
        <ListContainer>
          <PortfolioList portfolios={props.portfolios} listOpen={true} />
        </ListContainer>
      </Container>
    )
  );
};

export default EmptyPortfolios;

EmptyPortfolios.propTypes = {
  portfolios: PropTypes.array.isRequired
};
