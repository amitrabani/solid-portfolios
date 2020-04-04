import { combineReducers } from "redux";
import { FetchPortfolios } from "./portfoliosReducer";
import { ToggleFetchingPortfolios } from "./portfoliosReducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth: authReducer,
  firebaseReducer: firebaseReducer,
  portfolios: FetchPortfolios,
  isPortfoliosFetching: ToggleFetchingPortfolios
});
