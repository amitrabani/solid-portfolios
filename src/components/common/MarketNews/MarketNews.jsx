import React, { useEffect } from 'react';

import PropTypes, { object } from 'prop-types';

import {
  Card, CardBottom, CardImg, CardsContainer,
} from './marketNewsStyles';

const MarketNews = (props) => {
  const { getMarketNews, news } = props;
  useEffect(() => {
    getMarketNews();
  }, [getMarketNews]);

  return !news.length > 0 ? (
    <h1>skeltonnn</h1>
  ) : (
    <CardsContainer>
      {news.map((newsPost) => (
        <Card key={newsPost.id}>
          <a href={newsPost.news_url}>
            {' '}
            <CardImg src={newsPost.image} />
          </a>
          <div style={{ textAlign: 'left' }}>
            <a href={newsPost.url}>{newsPost.headline}</a>
            <p>
              {' '}
              {newsPost.summary}
            </p>
            <CardBottom>
              {console.log('deprecated?')}
              {/* {newsPost.related.split(",").map((ticker) => (
                <CardTickers key={newsPost.ticker}>{ticker}</CardTickers>
              ))} */}
              {/* <span>{newsPost.date}</span> */}
            </CardBottom>
          </div>
        </Card>
      ))}
    </CardsContainer>
  );
};
export default MarketNews;

MarketNews.propTypes = {
  news: PropTypes.arrayOf(object).isRequired,
  getMarketNews: PropTypes.func.isRequired,
};
