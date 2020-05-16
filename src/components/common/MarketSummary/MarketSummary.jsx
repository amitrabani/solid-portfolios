import React, { useEffect, useState } from 'react';

import Theme from '../../../elements/Theme';
import LeftArrow from '../../../icons/LeftArrow';
import RightArrow from '../../../icons/RightArrow';
import stocksData from './MarketSummaryContainer';
import {
  ArrowButtonsContainer,
  BottomText,
  Container,
  LeftButton,
  MiddleText,
  RightButton,
  TopText,
  Ul,
} from './marketSummaryStyles';


const MarketSummarry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [groupedStocks, setGroupedStocks] = useState([]);

  useEffect(() => {
    setGroupedStocks(generateStocksObjects());
  }, []);

  const generateStocksObjects = () => {
    const groupedStocksArray = [];
    const tabsNumber = Math.ceil(stocksData.bestMatches.length / 5);
    for (let index = 0; index < tabsNumber; index++) {
      groupedStocksArray.push(stocksData.bestMatches.splice(0, 5));
    }
    return groupedStocksArray;
  };

  return (
    <Container>
      <Ul>
        {groupedStocks.length === 0 ? (
          <h1>loading skeleton</h1>
        ) : (
          groupedStocks[currentIndex].map((stock) => (
            <li key={stock['2. name']}>
              <div>
                <TopText>{stock['2. name']}</TopText>
              </div>
              <MiddleText>
                {' '}
                {stock['8. currency']}
              </MiddleText>
              <BottomText stockPrice={stock['9. matchScore']}>
                {' '}
                {stock['9. matchScore']}
              </BottomText>
            </li>
          ))
        )}
      </Ul>
      <ArrowButtonsContainer>
        <LeftButton
          type="submit"
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex <= 0}
        >
          <LeftArrow width="50" height="50" color={Theme.primaryColor} />
        </LeftButton>
        <RightButton
          type="submit"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={currentIndex >= groupedStocks.length - 1}
        >
          <RightArrow width="50" height="50" color={Theme.primaryColor} />
        </RightButton>
      </ArrowButtonsContainer>
    </Container>
  );
};
export default MarketSummarry;
