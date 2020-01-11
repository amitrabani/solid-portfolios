import { connect } from "react-redux";
import store from "../../redux/store";
import FilledPortfolios from "./FilledPortfolios.jsx";

const sortPorfoliosBySize = portfolios => {
  return portfolios.sort((portfolioX, portfolioY) => {
    return portfolioY.securities.length - portfolioX.securities.length;
  });
};

const getFilledPortfolios = portfolios => {
  return portfolios.filter(portfolio => portfolio.securities.length > 0);
};

const mapStateToProps = () => {
  let portfolios = store.getState();
  if (portfolios.portfolios instanceof Array) {
    portfolios = sortPorfoliosBySize(portfolios.portfolios);
    portfolios = getFilledPortfolios(portfolios);
    return { portfolios: portfolios };
  }
  return { portfolios: [] };
};

const FilledPortfoliosContainer = connect(
  mapStateToProps,
  null
)(FilledPortfolios);
export default FilledPortfoliosContainer;
