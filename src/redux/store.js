import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { reactReduxFirebase } from "react-redux-firebase";
import firebaseApp from "../components/Firebase/firebase";


// const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
//   createStore
// );
// const store = createStoreWithFirebase(
//   reducers,
//   {},
//   applyMiddleware(reduxThunk)
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  portfolios: [],
  isPortfoliosFetching: true
};
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
