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
    const { data } = response;
    if (data === 'Symbol not supported') {
      throw new Error(data);
    } else {
      const quote = {
        current: data.c,
        todaysHigh: data.h,
        todaysLow: data.l,
        previeousClose: data.pc,
        id: shortid.generate(),
        symbol,
      };
      return quote;
    }
  })
  .catch((error) => { throw new Error(error); });

export const fetchMarketNews = () => axios
  .get('https://finnhub.io/api/v1/news/?token=bqhk217rh5rdcs9r2h30')
  .then((body) => body.data)
  .catch((error) => error);
