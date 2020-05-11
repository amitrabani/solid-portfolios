import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import WithLoading from '../../../HOCs/WithLoading';
import {
  Card, CardBottom, CardImg, CardsContainer,
} from './marketNewsStyles';

const MarketNews = (props) => {
  const { fetchNews, news } = props;
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

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
export default WithLoading(MarketNews);

MarketNews.propTypes = {
  news: PropTypes.array.isRequired,
};
