import { FETCH_MARKET_NEWS } from '../actionTypes';

export default (news) => ({
  type: FETCH_MARKET_NEWS,
  payload: news,
});
