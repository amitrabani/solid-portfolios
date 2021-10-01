import React, {useEffect} from 'react';

import PropTypes, {object} from 'prop-types';

import Snackbar from '../../common/snackbar/Snackbar';
import AddPortfolio from '../AddPortfolio/CreatePortfolioButton';
import PortfoliosList from '../PortfoliosList/PortfoliosList';
import Header from './portfoliosPageStyles';
import {useDispatch, useSelector} from "react-redux";

const PortfoliosPage = (props) => {
    const portfolios = useSelector(state => state.portfolios)
    const fetchError = portfolios.fetchError
    const isLoadingPortfolios = portfolios.isLoadingPortfolios
    const fetchPortfolios = portfolios.fetchPortfolios
    const dispatch = useDispatch()

    useEffect(() => {
        if (portfolios.length === 0) {
            dispatch(fetchPortfolios());
        }
    }, [fetchPortfolios]);

    return (
        <div>
            {fetchError && <Snackbar message="Failed Getting Portfolios"/>}
            <hr/>
            <AddPortfolio/>
            <Header>My Portfolios:</Header>
            {isLoadingPortfolios ? (
                <h1>Fetching</h1>
            ) : (
                <PortfoliosList portfolios={portfolios}/>
            )}
        </div>
    );
};

PortfoliosPage.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    fetchError: PropTypes.any.isRequired,
    fetchPortfolios: PropTypes.func.isRequired,
    portfolios: PropTypes.arrayOf(object),
};


export default PortfoliosPage;
