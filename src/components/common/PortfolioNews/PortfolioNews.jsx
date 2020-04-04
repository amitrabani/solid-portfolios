import React from "react";
import Theme from "../../../elements/Theme";
import PropTypes from "prop-types";
import WithLoading from "../../../HOCs/WithLoading";
import {
  CardsContainer,
  Card,
  CardBottom,
  CardSentiment,
  CardImg,
  CardTickers
} from "../PortfolioNews/portfolioNewsStyles";

const PortfolioNews = props => {
  let newsPosts = props.news;
  return (
    <CardsContainer>
      {newsPosts.map(newsPost => (
        <Card key={newsPost.title}>
          <a href={newsPost.news_url}>
            {" "}
            <CardImg src={newsPost.image_url}></CardImg>
          </a>
          <div classkname={"dsfsd"} style={{ textAlign: "left" }}>
            <a
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "#ffffffd4",
                fontWeight: '600'
                }}
              href={newsPost.news_url}
            >
              {newsPost.title}
            </a>
            <p> {newsPost.text}</p>
            <CardBottom>
              {newsPost.tickers.map(ticker => (
                <CardTickers key={ticker}>{ticker}</CardTickers>
              ))}
              <span>{newsPost.date}</span>
            </CardBottom>
            <CardSentiment
              sentimentColor={
                newsPost.sentiment === "Positive"
                  ? Theme.positiveColor
                  : newsPost.sentiment === "Negative"
                  ? Theme.negativeColor
                  : ""
              }
            >
              {newsPost.sentiment}
            </CardSentiment>
          </div>
        </Card>
      ))}
    </CardsContainer>
  );
};
export default WithLoading(PortfolioNews);

PortfolioNews.propTypes = {
  news: PropTypes.array.isRequired
};
