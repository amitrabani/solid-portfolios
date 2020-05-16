import { connect } from 'react-redux';

import getMarketNews from '../../../redux/actions/market/marketActionCreators';
import { getNews } from '../../../redux/selectors';
import MarketNews from './MarketNews';

const mapDispatchToProps = { getMarketNews };

const mapStateToProps = (state) => ({ news: getNews(state) });

export default connect(mapStateToProps, mapDispatchToProps)(MarketNews);
