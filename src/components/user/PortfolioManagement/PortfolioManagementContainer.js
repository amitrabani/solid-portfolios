import { connect } from 'react-redux';

import { deleteSymbols, fetchPortfolios } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import store from '../../../redux/store';
import PortfolioManagement from './PortfolioManagement';


const mapStateToProps = () => ({
  portfolios: store.getState().portfolios,
});

const mapDispatchToProps = { deleteSymbols, fetchPortfolios };

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioManagement);
