import { connect } from 'react-redux';

import { deletePortfolio } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import store from '../../../redux/store';
import PortfoliosList from './PortfoliosList';


const mapDispatchToProps = { deletePortfolio };

const mapStateToProps = (state) => ({
  portfolios: store.getState().portfolios,
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfoliosList);
