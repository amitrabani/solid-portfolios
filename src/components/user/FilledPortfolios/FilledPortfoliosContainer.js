import { connect } from "react-redux";
import store from "../../redux/store";
import FilledPortfolios from "./FilledPortfolios.jsx";
import WithLoading from "../../HOCs/WithLoading.jsx";

const sortPorfoliosDescendingBySize = portfolios => {
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
    portfolios = getFilledPortfolios(portfolios.portfolios);
    portfolios = sortPorfoliosDescendingBySize(portfolios);
    return { portfolios: portfolios };
  }
  return { portfolios: [] };
};

const FilledPortfoliosContainer = WithLoading(
  connect(mapStateToProps, null)(FilledPortfolios)
);
export default FilledPortfoliosContainer;
