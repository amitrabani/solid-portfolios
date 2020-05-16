import axios from 'axios';
import shortid from 'shortid';


export const fetchQuote = (symbol) => axios
  .get(
    `https://finnhub-realtime-stock-price.p.rapidapi.com/quote?symbol=${symbol}`,
    {
      headers: {
        'x-rapidapi-host': 'finnhub-realtime-stock-price.p.rapidapi.com',
        'x-rapidapi-key':
          '538f35aacbmsh7a007be0718027bp13effdjsn802e4e45cfeb',
      },
    },
  )
  .then((response) => {
    if (response.data === 'Symbol not supported') {
      throw new Error(response.data);
    } else {
      const quote = {
        current: response.data.c,
        todaysHigh: response.data.h,
        todaysLow: response.data.l,
        previeousClose: response.data.pc,
        id: shortid.generate(),
        symbol,
      };
      return quote;
    }
  })
  .catch((error) => error);

export const fetchMarketNews = () => axios
  .get('https://finnhub.io/api/v1/news/?token=bqhk217rh5rdcs9r2h30')
  .then((body) => body.data)
  .catch((error) => error);
