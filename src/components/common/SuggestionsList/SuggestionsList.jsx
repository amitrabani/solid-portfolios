import React from 'react';

import PropTypes from 'prop-types';

import { List, ListItem } from './suggestionListStyles';

const suggestionsList = (props) => {
  const { filteredSuggestions, onClick, possibleSuggestions = {} } = props;
  return (
    <List className="suggestions">
      {filteredSuggestions.map((suggestion) => (
        <ListItem key={suggestion} onClick={() => onClick(suggestion)}>
          <h3>{suggestion}</h3>
          <p>{possibleSuggestions[suggestion]}</p>
        </ListItem>
      ))}
    </List>
  );
};

suggestionsList.propTypes = {
  filteredSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  possibleSuggestions: PropTypes.any.isRequired,
};
export default suggestionsList;
