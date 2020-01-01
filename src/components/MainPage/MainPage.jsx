import React from 'react';
import PropTypes from 'prop-types'
import MarketSummaryContainer from '../MarketSummarry/MarketSummarryContainer.jsx';
import FilledPortfoliosContainer from '../FilledPortfolios/FilledPortfoliosContainer.js';
import EmptyPortfoliosContainer from '../EmptyPortfolios/EmptyPortfoliosContainer';
import ExchangeRates from '../ExchangeRates/ExchangeRates.jsx';
import PortfolioNewsContainer from '../PortfolioNews/PortfolioNewsContainer';
import MarketIndexChartContainer from '../MarketIndexChart/MarketIndexChartContainer';
import AddPortfolio from '../AddPortfolio/AddPortfolio.jsx'
import { Container, NarrowColumn, WideColumn } from '../MainPage/mainPage.js'
import store from '../../redux/store';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            portfolios: []
        }
    }
    componentDidMount() {
        this.props.fetchPortfolios()
    }
    componentDidUpdate() {
        const state = store.getState()
        if (state.portfolios !== this.state.portfolios) {
            this.setState({ portfolios: state.portfolios })
        }
    }

    render() {
        return (
            <div>
                <MarketSummaryContainer />
                <Container>
                    <WideColumn>
                        {this.state.portfolios.length === 0 && 
                        (<h1>You have no portfolios to show, add </h1>)
                        }
                        <FilledPortfoliosContainer />
                        <PortfolioNewsContainer />
                    </WideColumn>
                    <NarrowColumn>
                        <AddPortfolio />
                        <EmptyPortfoliosContainer />
                        <ExchangeRates />
                        <MarketIndexChartContainer />
                    </NarrowColumn>

                </Container >
            </div>
        )
    }
}
export default MainPage;

MainPage.propTypes = {
    fetchPortfolios: PropTypes.func.isRequired
}
