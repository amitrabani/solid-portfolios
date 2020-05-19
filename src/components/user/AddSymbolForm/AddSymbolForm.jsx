import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import {
  BaseContainer, ButtonsContainer, Form, FormGroup, Header,
} from '../../../elements/FormStyles';
import usePrevious from '../../../hooks/usePreviousStateAndProps';
import { containIlegalCharacters } from '../../../utils/common';
import CircularProgress from '../../common/CircularProgress/CircularProgress';
import Modal from '../../common/Modal/Modal';
import SuggestionsList from '../../common/SuggestionsList/SuggestionsList';
import { Button, Container, EmptySuggestionsContainer } from './addSymbolFormSyles';
import stocksSuggestions from './stocksSuggestions';

const AddSymbolForm = (props) => {
  const { isLoading, portfolioName, addSymbol } = props;

  const [isModalOpen, setModalOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [amount, setAmount] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [isLegalInput, setIsLegalInput] = useState(false);

  const prevFetchingStatus = usePrevious(isLoading);

  useEffect(() => {
    if (containIlegalCharacters([symbol])) {
      setIsLegalInput(true);
    } else {
      setIsLegalInput(false);
    }
  }, [symbol]);

  useEffect(() => {
    if (!isLoading && prevFetchingStatus === true) {
      setModalOpen(false);
    }
  }, [isLoading, symbol, prevFetchingStatus]);

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  const onClick = (suggestion) => {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setSymbol(suggestion);
  };

  const onChange = (e) => {
    const suggestions = Object.keys(stocksSuggestions);
    const userInput = e.currentTarget.value;
    const newFilteredSuggestions = suggestions
      .filter(
        (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
      )
      .slice(0, 7);
    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(true);
    setSymbol(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSymbol(amount, symbol, portfolioName);
    setSymbol('');
    setAmount(0);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const renderSuggestionsList = () => ((filteredSuggestions.length)
    ? (
      <SuggestionsList
        filteredSuggestions={filteredSuggestions}
        onSuggestionClicked={onClick}
        possibleSuggestions={stocksSuggestions}
      />
    )
    : (
      <EmptySuggestionsContainer>
        <p>No suggestions!</p>
      </EmptySuggestionsContainer>
    ));


  return (
    <>
      <Button onClick={toggleModalOpen}>Add symbol</Button>

      {isModalOpen && (
        <div>
          <Modal onClose={() => setModalOpen(false)}>
            { isLoading ? (
              <CircularProgress />
            ) : (
              <BaseContainer>
                <Header>Add Symbol</Header>
                <Form onSubmit={handleSubmit}>
                  <div style={{ position: 'relative' }}>
                    <FormGroup>
                      <label>Symbol</label>
                      <input
                        type="text"
                        onChange={onChange}
                        placeholder="Enter Symbol"
                        value={symbol}
                      />
                    </FormGroup>
                    <Container>
                      {(showSuggestions && symbol) && renderSuggestionsList()}
                    </Container>
                  </div>
                  <FormGroup>
                    <label>Amount</label>
                    <input
                      type="number"
                      onChange={handleAmount}
                      placeholder="Enter Amount"
                      value={amount}
                    />
                  </FormGroup>
                  <ButtonsContainer>
                    <button type="submit" disabled={symbol.length < 1 || isLegalInput} onClick={handleSubmit}>
                      Submit
                    </button>
                    <button type="button" onClick={toggleModalOpen}>Cancel</button>
                  </ButtonsContainer>
                </Form>
                {isLegalInput
                  && (
                    <p>
                      Input should be between 2 to 15 charcters,
                      <br />
                      letters and numbers only!
                    </p>
                  )}

              </BaseContainer>
            )}
          </Modal>
        </div>
      )}
    </>
  );
};

AddSymbolForm.propTypes = {
  isFetching: PropTypes.bool,
  portfolioName: PropTypes.string.isRequired,
  addSymbol: PropTypes.func.isRequired,
};


export default AddSymbolForm;
