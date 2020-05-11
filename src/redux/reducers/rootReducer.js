import { combineReducers } from 'redux';

import authReducer from './authReducer';
import marketReducer from './marketReducer';
import portfoliosReducer from './portfoliosReducer';


export default combineReducers({
  auth: authReducer,
  portfolios: portfoliosReducer,
  market: marketReducer,
});
