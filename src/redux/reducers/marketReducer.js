import { FETCH_MARKET_NEWS } from '../actions/actionTypes';

const initialState = {
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKET_NEWS:
      return { ...state, news: action.payload };
    default:
      return state;
  }
};
