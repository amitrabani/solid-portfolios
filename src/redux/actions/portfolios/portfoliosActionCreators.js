import axios from "axios";
import { fetchPortfoliosAction, setFetching, doneFetching } from "./portfoliosActions";

export const fetchPortfolios = () => {
  return dispatch => {
    dispatch(setFetching());
    return axios
      .get(`http://127.0.0.1:5000/portfolio`, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(response => {
        dispatch(fetchPortfoliosAction(response.data.portfolios));
        dispatch(doneFetching());
      })
      .catch(error => {
          //change to fetching error
        dispatch(doneFetching());
        console.log(error);
      });
  };
};
