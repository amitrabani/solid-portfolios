import { connect } from "react-redux";
import store from "../../redux/store";
import EmptyPortfolios from "./EmptyPortfolios.jsx";
import WithLoading from "../../HOCs/WithLoading";

const getEmptyPortfolios = portfolios => {
  try {
    return portfolios.filter(portfolio => portfolio.securities.length === 0);
  } catch {
    //trigger fetch failed
    console.log(
      `getEmptyPortfolios expected array but got ${typeof portfolios} instead`
    );
    return [];
  }
};

const mapStateToProps = () => {
  let state = store.getState();
  const portfolios = getEmptyPortfolios(state.portfolios);
  return {
    portfolios: portfolios
  };
};

const EmptyPortfoloiosContainer = WithLoading(
  connect(mapStateToProps, null)(EmptyPortfolios)
);
export default EmptyPortfoloiosContainer;
