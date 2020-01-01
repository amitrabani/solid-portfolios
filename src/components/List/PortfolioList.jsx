import React from 'react'
import PropTypes from 'prop-types'
import RightArrow from '../../icons/RightArrow'
import { Container, ListElement, ListItem } from './portfolioList.js'

const PortfolioList = (props) => {
    return (
        <Container>
            {props.listOpen && (
                <ListElement>
                    {props.portfolios.map(portfolio => {
                        return (
                            <ListItem key={portfolio.portfolio_name} value={portfolio.portfolio_name}>
                                <span>
                                    <RightArrow width="30" height="30" color="white" />
                                </span>
                                <a key={portfolio.portfolio_name} href="https://html.com">
                                    {portfolio.portfolio_name}
                                </a>
                            </ListItem>
                        )
                    })}
                </ListElement>
            )}
        </Container>)
}
export default PortfolioList

PortfolioList.propTypes = {
    listOpen: PropTypes.bool.isRequired,
    portfolios: PropTypes.array.isRequired
}
