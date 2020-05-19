import { fetchQuote } from '../../../api/StocksApi';
import {
  addPortfolioToFirestore, addSymbolToFirestorePortfolio,
  deletePortfolioFromFireStore, deleteSymbolsFromFirestorePortfolio,
  getPortfoliosFromFirestore,
} from '../../../firebase/firestoreDB';
import store from '../../store';
import {
  DONE_FETCHING_PORTFOLIOS, DONE_FETCHING_SYMBOLS,
  FETCHING_PORTFOLIOS_ERROR, FETCHING_SYMBOLS_ERROR,
  START_FETCHING_PORTFOLIOS, START_FETCHING_SYMBOLS,
} from '../actionTypes';
import { setActionStatus, setError } from '../commonActions';
import { fetchPortfoliosAction } from './portfoliosActions';

export const addPortfolio = (portfolio) => (dispatch) => {
  dispatch(setActionStatus(START_FETCHING_PORTFOLIOS));
  const { uid } = store.getState().auth;
  addPortfolioToFirestore(uid, portfolio)
    .catch((error) => {
      dispatch(setError(FETCHING_PORTFOLIOS_ERROR, error.message));
    })
    .finally(() => dispatch(setActionStatus(DONE_FETCHING_PORTFOLIOS)));
};

export const fetchPortfolios = () => (dispatch) => {
  dispatch(setActionStatus(START_FETCHING_PORTFOLIOS));
  const oldPortfolios = store.getState().portfolios.portfolios;
  const { uid } = store.getState().auth;
  const successCallback = (portfolios) => {
    const firestorePortfolios = (portfolios.length === 0) ? false : portfolios;
    dispatch(fetchPortfoliosAction(firestorePortfolios));
    dispatch(setActionStatus(DONE_FETCHING_PORTFOLIOS));
  };

  const failedCallback = (error) => {
    dispatch(setError(FETCHING_PORTFOLIOS_ERROR, error.message));
  };
  getPortfoliosFromFirestore(
    uid,
    oldPortfolios,
    successCallback,
    failedCallback,
  );
};

export const addSymbol = (amount, symbol, portfolioName) => (dispatch) => {
  dispatch(setActionStatus(START_FETCHING_SYMBOLS));
  const { uid } = store.getState().auth;
  fetchQuote(symbol)
    .then((response) => {
      const quote = { ...response, shares: amount };
      addSymbolToFirestorePortfolio(uid, portfolioName, quote);
    })
    .catch((error) => {
      dispatch(setError(FETCHING_SYMBOLS_ERROR, error.message));
    })
    .then(() => dispatch(setActionStatus(DONE_FETCHING_SYMBOLS)));
};

export const deleteSymbols = (portfolio, symbolsToDelete) => {
  const { uid } = store.getState().auth;
  const oldStocks = portfolio.stocks;
  return (dispatch) => {
    dispatch(setActionStatus(START_FETCHING_SYMBOLS));
    deleteSymbolsFromFirestorePortfolio(
      uid,
      portfolio.name,
      symbolsToDelete,
      oldStocks,
    )
      .then(() => dispatch(setActionStatus(DONE_FETCHING_SYMBOLS)))
      .catch((error) => dispatch(setError(FETCHING_SYMBOLS_ERROR, error.message)));
  };
};

export const deletePortfolio = (portfolioNameToDelete) => {
  const { uid } = store.getState().auth;
  return (dispatch) => {
    dispatch(setActionStatus(START_FETCHING_PORTFOLIOS));
    deletePortfolioFromFireStore(uid, portfolioNameToDelete)
      .then(dispatch(setActionStatus(DONE_FETCHING_PORTFOLIOS)))
      .catch((error) => {
        dispatch(setError(FETCHING_PORTFOLIOS_ERROR, error.message));
      });
  };
};
