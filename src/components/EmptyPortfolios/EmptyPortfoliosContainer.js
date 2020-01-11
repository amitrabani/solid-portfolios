import { connect } from "react-redux";
import store from "../../redux/store";
import EmptyPortfolios from "./EmptyPortfolios.jsx";

const getEmptyPortfolios = portfolios => {
  return portfolios.filter(portfolio => portfolio.securities.length <= 0);
};

const mapStateToProps = () => {
  let state = store.getState();
  let portfolios;
  if (state.portfolios instanceof Array) {
    portfolios = getEmptyPortfolios(state.portfolios);
    return { portfolios: portfolios };
  }
  return { portfolios: [] };
};

const EmptyPortfoloiosContainer = connect(
  mapStateToProps,
  null
)(EmptyPortfolios);
export default EmptyPortfoloiosContainer;
