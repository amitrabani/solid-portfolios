import { connect } from 'react-redux';

import { deletePortfolio } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import { getPortfolios } from '../../../redux/selectors';
import PortfoliosList from './PortfoliosList';


const mapDispatchToProps = { deletePortfolio };

const mapStateToProps = (state) => ({
  portfolios: getPortfolios(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosList);
