import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import {
  BaseContainer, ButtonsContainer, Form, FormGroup, Header,
} from '../../../elements/FormStyles';
import usePrevious from '../../../hooks/usePrevious';
import useTypingRestrictions from '../../../hooks/useTypingRestrictions';
import CircularProgress from '../../common/CircularProgress/CircularProgress';


const CreatePortfolioForm = (props) => {
  const {
    isFetching, onClose, fetchingPortfoliosError, addPortfolio,
  } = props;
  const [portfolioCurrency, setPortfolioCurrency] = useState('USD');
  const [portfolioName, setPortfolioName] = useState('');
  const prevFetchingStatus = usePrevious(isFetching);

  const isLegalInput = useTypingRestrictions(portfolioName);

  useEffect(() => {
    if (!isFetching && prevFetchingStatus === true) {
      onClose();
    }
  }, [isFetching]);

  const handlePortfolioName = (event) => {
    setPortfolioName(event.target.value);
  };

  const handlePortfolioCurrency = (event) => {
    setPortfolioCurrency(event.target.value);
  };

  const handleAddPortoflio = (event) => {
    event.preventDefault();
    const portfolio = {
      name: portfolioName,
      currency: portfolioCurrency,
      stocks: [],
    };
    addPortfolio(portfolio);
  };

  return (
    <BaseContainer>
      { isFetching ? (
        <CircularProgress />
      ) : (
        <>
          <Header>Create Portfolio</Header>
          <Form onSubmit={handleAddPortoflio}>
            <FormGroup>
              <label>Portfolio Name</label>
              <input
                value={portfolioName}
                onChange={handlePortfolioName}
                type="text"
                placeholder="Enter Portfolio Name"
              />
            </FormGroup>
            <FormGroup>
              <label>Currency</label>
              <select
                value={portfolioCurrency}
                onChange={handlePortfolioCurrency}
              >
                <option value="USD">USD</option>
                <option value="ILS">ILS</option>
                <option value="CAD">CAD</option>
                <option value="euro">Euro</option>
              </select>
            </FormGroup>
            <ButtonsContainer>
              <button
                type="submit"
                disabled={isLegalInput || portfolioName.length < 2}
                onClick={handleAddPortoflio}
              >
                Submit
              </button>
              <button type="button" onClick={onClose}>Cancel</button>
            </ButtonsContainer>

            { fetchingPortfoliosError && (
            <>
              <h3>Login Failed</h3>
              <p style={{ color: 'red ' }}>
                { fetchingPortfoliosError}
              </p>
            </>
            )}
            {isLegalInput && <h3>Bad Naming</h3>}
          </Form>
        </>
      )}
    </BaseContainer>
  );
};

CreatePortfolioForm.propTypes = {
  fetchingPortfoliosError: PropTypes.any,
  isFetching: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addPortfolio: PropTypes.func.isRequired,
};


export default CreatePortfolioForm;
