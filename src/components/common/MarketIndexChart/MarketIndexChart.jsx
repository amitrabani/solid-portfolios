import React from 'react';

import CanvasJSReact from '../../../canvasCharts/canvasjs.react';
import options from './chartOptions';
import Container from './MarketIndexChartStyles';


const { CanvasJSChart } = CanvasJSReact;


const MarketIndexChart = () => (
  <Container>
    <CanvasJSChart width="500px" height="500px" options={options} />
  </Container>
);
export default MarketIndexChart;
