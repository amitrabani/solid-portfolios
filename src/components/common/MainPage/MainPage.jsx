import React from "react";
import PropTypes from "prop-types";
import MarketSummaryContainer from "../MarketSummarry/MarketSummarryContainer";
// import FilledPortfoliosContainer from "../FilledPortfolios/FilledPortfoliosContainer.js";
// import EmptyPortfoliosContainer from "../EmptyPortfolios/EmptyPortfoliosContainer";
import ExchangeRates from "../../common/ExchangeRates/ExchangeRates.jsx";
import PortfolioNewsContainer from "../PortfolioNews/PortfolioNewsContainer";
import MarketIndexChartContainer from "../../common/MarketIndexChart/MarketIndexChartContainer";
// import AddPortfolio from "../AddPortfolio/AddPortfolio.jsx";
import {
  ColumnsContainer,
  MainPageContainer,
  NarrowColumn,
  WideColumn
} from "../MainPage/mainPage.js";
// import store from "../../redux/store";

class MainPage extends React.Component {
  //create withError HOC
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [],
      isPortfoliosFetching: true
    };
  }
  componentDidMount() {
    this.props.fetchPortfolios();
  }
  // componentDidUpdate() {
  //   const state = store.getState();
  //   if (state.portfolios !== this.state.portfolios) {
  //     this.setState({
  //       portfolios: state.portfolios
  //     });
  //   }
  // }

  render() {
    return (
      <MainPageContainer>
        <MarketSummaryContainer />
        <ColumnsContainer className="shirnkable">
          <WideColumn>
            {/* <FilledPortfoliosContainer
              loading={store.getState().isPortfoliosFetching}
              height={"310px"}
              width={"100%"}
            /> */}
            <PortfolioNewsContainer />
          </WideColumn>

          <NarrowColumn>
            {/* <AddPortfolio /> */}
            {/* <EmptyPortfoliosContainer
              loading={store.getState().isPortfoliosFetching}
              height={"380px"}
              width={"100%"}
            /> */}
            <ExchangeRates />
            <MarketIndexChartContainer />
          </NarrowColumn>
        </ColumnsContainer>
      </MainPageContainer>
    );
  }
}
// export default withAuthorization(condition)(HomePage);

export default MainPage;

MainPage.propTypes = {
  fetchPortfolios: PropTypes.func.isRequired
};
