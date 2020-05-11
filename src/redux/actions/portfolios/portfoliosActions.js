import { FETCH_PORTFOLIOS } from '../actionTypes';

export const fetchPortfoliosAction = (portfolios) => ({
  type: FETCH_PORTFOLIOS,
  payload: portfolios,
});

export const resetPortfolios = () => ({
  type: 'RESET_PORTFOLIOS',
});
