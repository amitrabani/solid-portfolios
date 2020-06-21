import { fetchMarketNews } from '../../../api/StocksApi';
import addMarketNews from './marketActions';

export default () => (dispatch) => {
  // dispatch(set market fetching()); and handle error
  fetchMarketNews()
    .then((news) => {
      dispatch(addMarketNews(news));
    })
    .catch((error) => {
      console.error('Error adding symbol: ', error);
    });
};
