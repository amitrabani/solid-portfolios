import React from 'react';

import ExchangeRates from '../ExchangeRates/ExchangeRates';
import MarketIndexChart from '../MarketIndexChart/MarketIndexChart';
import {ColumnsContainer, NarrowColumn, WideColumn} from './mainPageStyles';
import MarketNews from "../MarketNews/MarketNews";


const MainPage = () => (
    <ColumnsContainer className="shirnkable">
        <WideColumn>
            <MarketNews/>
        </WideColumn>

        <NarrowColumn>
            <ExchangeRates/>
            <MarketIndexChart/>
        </NarrowColumn>
    </ColumnsContainer>
);

export default MainPage;
