import { connect } from 'react-redux';

import {
  fetchPortfolios,
} from '../../../redux/actions/portfolios/portfoliosActionCreators';
import { getPortfolios } from '../../../redux/selectors';
import PortfoliosPage from './PortfoliosPage';

const mapDispatchToProps = { fetchPortfolios };

const mapStateToProps = (state) => {
  const {
    fetchingPortfoliosError,
    isFetchingPortfolios,
    portfolios,
  } = getPortfolios(state);
  return {
    fetchError: fetchingPortfoliosError,
    isFetchingPortfolios,
    portfolios,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosPage);
