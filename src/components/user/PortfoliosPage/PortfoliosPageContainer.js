import { connect } from 'react-redux';

import {
  fetchPortfolios,
} from '../../../redux/actions/portfolios/portfoliosActionCreators';
import store from '../../../redux/store';
import PortfoliosPage from './PortfoliosPage';

const mapDispatchToProps = { fetchPortfolios };

const mapStateToProps = () => {
  const { portfolios: portfoliosObject } = store.getState();
  const {
    fetchingPortfoliosError,
    isLoadingPortfolios,
    portfolios,
  } = portfoliosObject;
  return {
    fetchError: fetchingPortfoliosError,
    isLoadingPortfolios,
    portfolios,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosPage);
