import React from "react";
import PropTypes from "prop-types";
import RightArrow from "../../icons/RightArrow";
import {
  ListElement,
  ListItem,
  Header,
  Container,
  ListContainer
} from "./emptyPortfolios";
const renderPortfoliosList = portfoliosToRender => {
  return portfoliosToRender.map(portfolio => {
    return (
      <ListElement key={portfolio.portfolio_name}>
        <ListItem
          key={portfolio.portfolio_name}
          value={portfolio.portfolio_name}
        >
          <span>
            <RightArrow width="30" height="30" color="white" />
          </span>
          <a key={portfolio.portfolio_name} href="https://html.com">
            {portfolio.portfolio_name}
          </a>
        </ListItem>
      </ListElement>
    );
  });
};
const EmptyPortfolios = props => {
  return (
    <Container>
      <Header>RM:don't leave your portfolios empty, add stocks now!</Header>
      {props.portfolios.length > 0 && (
        <ListContainer>
          {renderPortfoliosList(props.portfolios)}
          </ListContainer>
      )}
    </Container>
  );
};

export default EmptyPortfolios;

EmptyPortfolios.propTypes = {
  portfolios: PropTypes.array.isRequired
};
