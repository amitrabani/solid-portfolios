import { connect } from 'react-redux';

import { deleteSymbols } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import { getPortfolios } from '../../../redux/selectors';
import PortfolioManagement from './PortfolioManagement';


const mapStateToProps = (state) => ({
  portfolios: getPortfolios(state),
});

const mapDispatchToProps = { deleteSymbols };

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioManagement);
