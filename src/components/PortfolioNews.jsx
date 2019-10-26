import React from "react"
import styled from 'styled-components'
import Theme from "../elements/Theme"

const CardsContainer = styled.div`
    border: 1px solid #C6CDD5;
    width: 70%;
    position: relative;
    height: 500px;
    overflow: auto;
    border-radius: 25px;
    margin: 20px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;}
    &::-webkit-scrollbar-thumb {
    background-color: #00a8956b;
    outline: 1px solid slategrey;
    width: 100px;}
`
const Card = styled.div`
    width: 100%;
    margin: 0px auto;
    position: relative;
    padding:10px;
    display: flex;
        `
const CardImg = styled.img`
    width: 300px;
    position: relative;
    float: left;
    margin-right: 20px;
     `
const CardBottom = styled.span`
    display:flex;
`
const CardSentiment = styled.span`
    float: left;
    margin-top: 10px;
    background-color: ${props => props.sentimentColor || "#5B6F82"};
    color: #FFF;
    border-radius: 3px;
    font-size: 16px;
    padding: 8px;
    font-variant-caps:all-small-caps;
    font-variant:bold;
`
const CardTickers = styled.span`
    background-color: #96989b;
    color: #FFF;
    border-radius: 3px;
    font-size: 12px;
    padding: 4px 8px;
    margin-right: 3px;
`
class PortfolioNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        let newsPosts = this.props.news
        return (
            <CardsContainer  >
                {newsPosts.map(newsPost => {
                    return <Card key={newsPost.title}>
                        <a href={newsPost.news_url}> <CardImg src={newsPost.image_url} ></CardImg></a>
                        <div style={{ textAlign: "left" }}>
                            <a style={{ textDecoration: 'none' }} href={newsPost.news_url}>{newsPost.title}</a>
                            <p> {newsPost.text}</p>
                            <CardBottom>
                                {newsPost.tickers.map(ticker => {
                                    return <CardTickers key={ticker}>{ticker}</CardTickers>

                                })}
                                <span>{newsPost.date}</span>
                            </CardBottom>
                            <CardSentiment sentimentColor={newsPost.sentiment == 'Positive' ? Theme.positiveColor : newsPost.sentiment == 'Negative' ? Theme.negativeColor : ''}>{newsPost.sentiment}</CardSentiment>
                        </div>
                    </Card>
                }

                )}
            </CardsContainer>
        )

    }
}
export default PortfolioNews