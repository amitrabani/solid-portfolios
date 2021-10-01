import React from 'react';

import PropTypes from 'prop-types';

import {List, ListItem} from './suggestionListStyles';

const suggestionsList = ({filteredSuggestions, onSuggestionClicked, possibleSuggestions = {}}) => {
    return (
        <List className="suggestions">
            {filteredSuggestions.map((suggestion) => (
                <ListItem key={suggestion} onClick={() => onSuggestionClicked(suggestion)}>
                    <h3>{suggestion}</h3>
                    <p>{possibleSuggestions[suggestion]}</p>
                </ListItem>
            ))}
        </List>
    );
};

suggestionsList.propTypes = {
    filteredSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSuggestionClicked: PropTypes.func.isRequired,
    possibleSuggestions: PropTypes.any.isRequired,
};
export default suggestionsList;
