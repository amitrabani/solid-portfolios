import axios from 'axios'
import {fetchPortfoliosAction} from './actions'

export const fetchPortfolios = () => {
    return (dispatch) => {
        return axios.get(`http://127.0.0.1:5000/portfolio`,
            {
                headers: { 'Access-Control-Allow-Origin': '*' },
            })
            .then(response => {
                dispatch(fetchPortfoliosAction(response.data.portfolios))
            })
            .catch(error => {
                console.log(error);
            });
    }
}
