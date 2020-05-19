import { connect } from 'react-redux';

import getMarketNews from '../../../redux/actions/market/marketActionCreators';
import store from '../../../redux/store';
import MarketNews from './MarketNews';

const mapDispatchToProps = { getMarketNews };

const mapStateToProps = () => ({ news: store.getState().market.news });

export default connect(mapStateToProps, mapDispatchToProps)(MarketNews);
