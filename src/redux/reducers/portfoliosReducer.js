import {
  FETCH_PORTFOLIOS,
  SET_FETCHING,
  DONE_FETCHING
} from "../actions/actionTypes";

const initialState = {
  state: {}
};

export const FetchPortfolios = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIOS:
      return action.payload;
    default:
      return state;
  }
};

export const ToggleFetchingPortfolios = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return true;
    case DONE_FETCHING:
      return false;
    default:
      return state;
  }
};
