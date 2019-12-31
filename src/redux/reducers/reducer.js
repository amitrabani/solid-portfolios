import { FETCH_PORTFOLIOS } from '../actions/actions'

const initialState = {
    state: {}
}

const FetchPortfolios = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIOS:
            return  action.payload
        default: 
            return state
    }
}
export default FetchPortfolios
