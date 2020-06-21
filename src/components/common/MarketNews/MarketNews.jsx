import React, { useEffect } from 'react';

import PropTypes, { object } from 'prop-types';

import {
  Card, CardImg, CardsContainer,
} from './marketNewsStyles';

const MarketNews = (props) => {
  const { getMarketNews, news } = props;
  useEffect(() => {
    getMarketNews();
  }, [getMarketNews]);

  return news.length === 0 ? (
    <h1>skelton</h1>
  ) : (
    <CardsContainer>
      {news.map((newsPost) => (
        <Card key={newsPost.id}>
          <a href={newsPost.news_url}>
            <CardImg src={newsPost.image} />
          </a>
          <div style={{ textAlign: 'left' }}>
            <a href={newsPost.url}>{newsPost.headline}</a>
            <p>
              {newsPost.summary}
            </p>
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
