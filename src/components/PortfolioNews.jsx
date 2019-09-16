import React from "react"
import styled, { ThemeProvider } from 'styled-components'
import { relative } from "path";

const CardsContainer = styled.div`
    border: 1px solid #C6CDD5;
    background-color: #FFF;
    width: 70%;
    position: relative;
    height: 400px;
    overflow: auto;
    overflow-x: hidden;
`
const Card = styled.div`
        width: 100%;
        margin: 0px auto;
        position: relative;
        padding:10px;
        display: flex;
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

        this.state = {
            sentimentColor: ''
        }
    }
    // this.movePrevious = this.movePrevious.bind(this
    // sentimentColorControler(){
    //     if (senti)
    // }
    render(props) {
        let newsPosts = []
        if (this.props.news.data) {
            newsPosts = this.props.news.data
        }


        return (
            <CardsContainer  >
                {newsPosts.map(newsPost => {
                    return <Card key={newsPost.title}>
                        <a href={newsPost.news_url}> <img style={{ width: '300px', position: relative, float: "left", marginRight: '20px' }} src={newsPost.image_url} ></img></a>
                        <div style={{ textAlign: "left" }}>
                            <a style={{ textDecoration: 'none' }} href={newsPost.news_url}>{newsPost.title}</a>
                            <p> {newsPost.text}</p>
                            <CardBottom>
                                {newsPost.tickers.map(ticker => {
                                    return <CardTickers key={ticker}>{ticker}</CardTickers>

                                })}
                                <span>{newsPost.date}</span>
                            </CardBottom>
                            <CardSentiment sentimentColor={newsPost.sentiment == 'Positive' ? "#4BB543" : newsPost.sentiment == 'Negative' ? "red" : ''}>{newsPost.sentiment}</CardSentiment>
                        </div>
                    </Card>
                }

                )}
            </CardsContainer>
        )

    }
}
export default PortfolioNews