import React from 'react';

import ExchangeRates from '../ExchangeRates/ExchangeRates';
import MarketIndexChart from '../MarketIndexChart/MarketIndexChart';
import MarketNewsContainer from '../MarketNews/MarketNewsContainer';
import { ColumnsContainer, NarrowColumn, WideColumn } from './mainPageStyles';


const MainPage = () => (
  <ColumnsContainer className="shirnkable">
    <WideColumn>
      <MarketNewsContainer />
    </WideColumn>

    <NarrowColumn>
      <ExchangeRates />
      <MarketIndexChart />
    </NarrowColumn>
  </ColumnsContainer>
);

export default MainPage;
