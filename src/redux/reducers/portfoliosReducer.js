import {
  DONE_FETCHING_PORTFOLIOS,
  DONE_FETCHING_SYMBOLS,
  FETCHING_PORTFOLIOS_ERROR,
  FETCHING_SYMBOLS_ERROR,
  FETCH_PORTFOLIOS,
  START_FETCHING_PORTFOLIOS,
  START_FETCHING_SYMBOLS,
} from '../actions/actionTypes';

const initialState = {
  isLoadingPortfolios: false,
  fetchingPortfoliosError: false,
  isLoadingSymbols: false,
  fetchingSymbolsError: false,
  portfolios: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIOS:
      return { ...state, portfolios: action.payload };
    case START_FETCHING_PORTFOLIOS:
      return {
        ...state,
        isLoadingPortfolios: true,
        fetchingPortfoliosError: false,
      };

    case DONE_FETCHING_PORTFOLIOS:
      return { ...state, isLoadingPortfolios: false };

    case FETCHING_PORTFOLIOS_ERROR:
      return { ...state, fetchingPortfoliosError: action.error };

    case START_FETCHING_SYMBOLS:
      return {
        ...state,
        isLoadingSymbols: true,
        fetchingSymbolsError: false,
      };

    case DONE_FETCHING_SYMBOLS:
      return { ...state, isLoadingSymbols: false };

    case FETCHING_SYMBOLS_ERROR:
      return { ...state, fetchingSymbolsError: action.error };

    case 'RESET_PORTFOLIOS':
      return { ...state, portfolios: [] };
    default:
      return state;
  }
};
