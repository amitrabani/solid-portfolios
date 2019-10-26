import React from 'react';
import MarketSummary from './MarketSummarry';
import UserPortfoliosContainer from '../containers/UserPortfoliosContainer';
import ExchangeRates from './ExchangeRates';
import PortfolioNewsContainer from '../containers/PortfolioNewsContainer';
import StockChart from '../components/StockChart';
import styled, { ThemeProvider } from 'styled-components'

const Container = styled.div`
    display: 'flex';
    flex-flow: 'row wrap';
`
function MainPage() {
    return (
        <Container>
            <MarketSummary />
            <UserPortfoliosContainer />
            <span style={{display: 'flex'}}>
            <PortfolioNewsContainer />
            <div style={{marginLeft: '20px'}}>
            <ExchangeRates />
            <StockChart />
            </div>
            </span>
        </Container>
    );
}

export default MainPage;
