import React from 'react';

import PropTypes from 'prop-types';

import deleteForeverIcon from '../../../icons/deleteForeverIcon.svg';
import deleteForeverIconHover from '../../../icons/deleteForeverIconHover.svg';
import AddSymbolForm from '../AddSymbolForm/AddSymbolForm';
import {CustomDeleteButton, TaskButtonContainer,} from './portfolioManagementStyles';


const PortfolioTasks = ({handleDelete, selectedSymbols, portfolio}) => {
    return (
        <TaskButtonContainer>
            {Object.values(selectedSymbols).some(
                Boolean,
            ) ? (
                <CustomDeleteButton onClick={handleDelete}>
                    <img alt="delete" className="regularIcon" src={deleteForeverIcon}/>
                    <img alt="delete" className="hoverIcon" src={deleteForeverIconHover}/>
                    Delete Symbols
                </CustomDeleteButton>
            ) : (
                <AddSymbolForm portfolioName={portfolio}/>
            )}

        </TaskButtonContainer>
    );
};

PortfolioTasks.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    portfolio: PropTypes.string.isRequired,
    selectedSymbols: PropTypes.objectOf(PropTypes.bool),
};

export default PortfolioTasks;
