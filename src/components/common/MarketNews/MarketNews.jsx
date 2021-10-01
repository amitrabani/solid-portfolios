import React, {useEffect} from 'react';

import PropTypes, {object} from 'prop-types';

import {Card, CardImg, CardsContainer,} from './marketNewsStyles';
import {useDispatch, useSelector} from "react-redux";
import getMarketNews from "../../../redux/actions/market/marketActionCreators";

const MarketNews = () => {

    const dispatch = useDispatch();

    const news = useSelector(state => state.market.news)

    useEffect(() => {
        dispatch(getMarketNews());
    }, [getMarketNews]);

    return news.length === 0 ? (
        <h1>skelton</h1>
    ) : (
        <CardsContainer>
            {news.map((newsPost) => (
                <Card key={newsPost.id}>
                    <a href={newsPost.news_url}>
                        <CardImg src={newsPost.image}/>
                    </a>
                    <div style={{textAlign: 'left'}}>
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
