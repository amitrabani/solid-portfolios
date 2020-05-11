import React, { useEffect, useState } from 'react';

import PropTypes, { object } from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Table, Td } from '../../../elements/TableStyles';
import Snackbar from '../../common/snackbar/Snackbar';
import { PortfolioHeader, TradeButton } from './portfolioManagementStyles';
import PortfolioTasks from './PortfolioTasks';


const PortfolioManagement = (props) => {
  const { portfolios, deleteSymbols } = props;
  const { portfolios: portfoliosList } = portfolios;
  const [portfolio, setPortfolio] = useState({ stocks: [], name: 'loading' });
  const [selectedSymbols, setSelectedSymbols] = useState({});
  const { index } = useLocation().state;
  const tableHeaders = ['Symbol', 'Price', 'Shares', 'Change', 'Day Range', 'Portfolio Stake', 'Buy/Sell', 'Currency'];

  useEffect(() => {
    setPortfolio(portfoliosList[index]);
  }, [portfolios]);

  const handleSelectSymbol = (event) => {
    const currentValue = selectedSymbols[event.target.name];
    setSelectedSymbols(
      { ...selectedSymbols, [event.target.name]: !currentValue },
    );
  };

  const handleDelete = () => {
    deleteSymbols(portfolio, selectedSymbols);
    setSelectedSymbols({});
  };

  const renderHeader = () => (!portfolio.stocks.length > 0 ? (
    <PortfolioHeader>
      You have no stocks
      {portfolio.name }
      ,
      <br />
      Add
      Stocks Now
    </PortfolioHeader>
  ) : (
    <PortfolioHeader>
      My Holdings In
      {portfolio.name}
      :
    </PortfolioHeader>
  ));

  const renderTable = () => (
    <Table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {portfolio.stocks.map((stock) => (
          <tr key={stock}>
            <Td>
              <label>
                <input
                  onChange={handleSelectSymbol}
                  id="symbol"
                  type="checkbox"
                  name={stock.symbol}
                  checked={selectedSymbols[stock.symbol] || ''}
                />
                {stock.symbol}
              </label>
            </Td>
            <td>{stock.current}</td>
            <Td>{stock.shares}</Td>
            <Td positive>20%</Td>
            <td>
              {stock.todaysLow.toFixed(2)}
              <canvas width="70" height="1" />
              {stock.todaysHigh}
            </td>
            <Td>stock.stakesss</Td>
            <td>
              <TradeButton>Trade</TradeButton>
            </td>
            <Td>$</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  if (!portfolio) return <h1>Loading Skeleton</h1>;

  return (
    <>
      {portfolios.fetchingSymbolsError && (
        <Snackbar message={portfolios.fetchingSymbolsError} />
      )}
      {renderHeader()}
      <PortfolioTasks
        handleDelete={handleDelete}
        portfolio={portfolio.name}
        selectedSymbols={selectedSymbols}
      />
      {portfolio.stocks.length > 0 && renderTable()}
    </>
  );
};

PortfolioManagement.propTypes = {
  portfolios: PropTypes.shape({
    fetchingSymbolsError: PropTypes.bool,
    portfolios: PropTypes.arrayOf(object) || false.isRequired,
  }),
  deleteSymbols: PropTypes.func.isRequired,
};

export default PortfolioManagement;
