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
    isFetchingPortfolios,
    portfolios,
  } = portfoliosObject;
  return {
    fetchError: fetchingPortfoliosError,
    isFetchingPortfolios,
    portfolios,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosPage);
