import React, { useEffect } from 'react';

import PropTypes, { object } from 'prop-types';

import Snackbar from '../../common/snackbar/Snackbar';
import AddPortfolio from '../AddPortfolio/CreatePortfolioButton';
import PortfoliosListContainer from '../PortfoliosList/PortfoliosListContainer';
import Header from './portfoliosPageStyles';

const PortfoliosPage = (props) => {
  const {
    portfolios = {},
    fetchError,
    isFetchingPortfolios,
    fetchPortfolios,
  } = props;
  useEffect(() => {
    if (portfolios.length === 0) {
      fetchPortfolios();
    }
  }, []);

  return (
    <div>
      {fetchError && <Snackbar message="Failed Getting Portfolios" />}
      <hr />
      <AddPortfolio />
      <Header>My Portfolios:</Header>
      {isFetchingPortfolios ? (
        <h1>Fetching</h1>
      ) : (
        <PortfoliosListContainer portfolios={portfolios} />
      )}
    </div>
  );
};

PortfoliosPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fetchError: PropTypes.any.isRequired,
  fetchPortfolios: PropTypes.func.isRequired,
  isFetchingPortfolios: PropTypes.bool,
  portfolios: PropTypes.arrayOf(object),
};


export default PortfoliosPage;
