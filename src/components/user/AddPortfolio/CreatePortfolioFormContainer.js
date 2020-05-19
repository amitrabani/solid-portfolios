import { connect } from 'react-redux';

import { addPortfolio } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import store from '../../../redux/store';
import CreatePortfolioForm from './CreatePortfolioForm';

const mapStateToProps = () => {
  const { portfolios } = store.getState();
  const { fetchingPortfoliosError, isLoadingPortfolios } = portfolios;
  return {
    fetchError: fetchingPortfoliosError,
    isFetching: isLoadingPortfolios,
  };
};


const mapDispatchToProps = {
  addPortfolio,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePortfolioForm);
