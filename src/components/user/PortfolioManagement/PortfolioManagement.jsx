import React, { useEffect, useState } from 'react';

import PropTypes, { object } from 'prop-types';
import { useLocation } from 'react-router-dom';

import Table from '../../../elements/TableStyles';
import Snackbar from '../../common/snackbar/Snackbar';
import { PortfolioHeader, SymbolTd, TradeButton } from './portfolioManagementStyles';
import PortfolioTasks from './PortfolioTasks';

const tableHeaders = ['Symbol', 'Price', 'Shares', 'Value', 'Day Range', 'Buy/Sell', 'Currency'];

const PortfolioManagement = (props) => {
  const { portfolios, deleteSymbols, fetchPortfolios } = props;
  const { portfolios: portfoliosList } = portfolios;
  const [portfolio, setPortfolio] = useState({ name: 'loading', stocks: [] });
  const [selectedSymbols, setSelectedSymbols] = useState({});
  const [featureUnderDevelopment, setFeatureUnderDevelopment] = useState(false);
  const { index } = useLocation().state;

  useEffect(() => {
    if (portfoliosList.length === 0) {
      fetchPortfolios();
    }
    setPortfolio(portfoliosList[index]);
  }, [portfoliosList.length, portfoliosList[index], index]);

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

  const renderHeader = () => (portfolio && portfolio.stocks.length === 0 ? (
    <PortfolioHeader>
      <p>
        Your Portfolio Is Empty,
      </p>
      <p>
        Add Stocks Now
      </p>
    </PortfolioHeader>
  ) : (
    <PortfolioHeader>
      My Holdings:
    </PortfolioHeader>
  ));

  const renderTable = () => (portfolio && portfolio.stocks.length > 0 && (
    <Table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {portfolio.stocks.map((stock) => (
          <tr key={stock.id}>
            <SymbolTd>
              <label>
                <input
                  onChange={handleSelectSymbol}
                  type="checkbox"
                  name={stock.symbol}
                  checked={selectedSymbols[stock.symbol] || ''}
                />
                {stock.symbol}
              </label>
            </SymbolTd>
            <td>{stock.current}</td>
            <td>{stock.shares}</td>
            <td>
              {stock.shares * stock.current}
              $
            </td>
            <td>
              {stock.todaysLow.toFixed(2)}
              <canvas width="70" height="1" />
              {stock.todaysHigh}
            </td>
            <td>
              <TradeButton onClick={() => setFeatureUnderDevelopment(true)}>Trade</TradeButton>
            </td>
            <td>$</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ));

  if (portfolios.isFetchingPortfolios) return <h1>Loading Skeleton</h1>;

  return (
    <>
      { featureUnderDevelopment && (
      <Snackbar message="Trade Button is currently under development:((" />
      )}
      {portfolios.fetchingSymbolsError && (
        <Snackbar message={portfolios.fetchingSymbolsError} />
      )}
      {renderHeader()}
      {portfolio
      && (
      <PortfolioTasks
        handleDelete={handleDelete}
        portfolio={portfolio.name}
        selectedSymbols={selectedSymbols}
      />
      )}
      {renderTable()}
    </>
  );
};

PortfolioManagement.propTypes = {
  portfolios: PropTypes.shape({
    fetchingSymbolsError: PropTypes.bool,
    portfolios: PropTypes.arrayOf(object) || false.isRequired,
  }),
  deleteSymbols: PropTypes.func.isRequired,
  fetchPortfolios: PropTypes.func.isRequired,
};

export default PortfolioManagement;
