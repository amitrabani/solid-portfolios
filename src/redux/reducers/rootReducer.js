import { combineReducers } from 'redux'
import FetchPortfolios from './reducer'

export default combineReducers({
    portfolios: FetchPortfolios
})