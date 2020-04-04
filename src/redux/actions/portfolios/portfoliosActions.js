import {
  FETCH_PORTFOLIOS,
  SET_FETCHING,
  DONE_FETCHING
} from "../actionTypes";

export const fetchPortfoliosAction = portfolios => ({
  type: FETCH_PORTFOLIOS,
  payload: portfolios
});
export const setFetching = () => ({
  type: SET_FETCHING,
  payload: true
});
export const doneFetching = () => ({
  type: DONE_FETCHING,
  payload: false
});
