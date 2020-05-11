import { connect } from 'react-redux';

import { addPortfolio } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import { getPortfolios } from '../../../redux/selectors';
import CreatePortfolioForm from './CreatePortfolioForm';


const mapStateToProps = (state) => {
  const { fetchingPortfoliosError, isFetchingPortfolios } = getPortfolios(
    state,
  );
  return {
    fetchError: fetchingPortfoliosError,
    isFetching: isFetchingPortfolios,
  };
};


const mapDispatchToProps = {
  addPortfolio,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePortfolioForm);
