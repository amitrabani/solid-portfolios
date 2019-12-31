import React from "react"
import PropTypes from 'prop-types'
import RightArrow from '../..//icons/RightArrow'
import LeftArrow from '../../icons/LeftArrow'
import Theme from '../../elements/Theme'
import { Container, Ul, TopText, MiddleText, BottomText, LeftButton, RightButton } from './marketSummarry.js'

class MarketSummarry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            newStocksObject: []
        }

    }
    moveNext = () => {
        this.setState({ selectedIndex: this.state.selectedIndex + 1 })
    }
    movePrevious = () => {
        this.setState({ selectedIndex: this.state.selectedIndex - 1 })
    }
    generateStocksGroupedObject = () => {
        let newStocks = []
        let tabsNumber = Math.ceil(this.props.stocks.bestMatches.length / 5)
        for (let index = 0; index < tabsNumber; index++) {
            newStocks.push(this.props.stocks.bestMatches.splice(0, 5))
        }
        this.setState({ newStocksObject: newStocks })
    }

    componentWillMount() {
        this.generateStocksGroupedObject()
    }

    render() {
        return (
            <Container>
                <Ul>
                    {this.state.newStocksObject[this.state.selectedIndex].map(stock => {
                        return <li key={stock['2. name']}>
                            <div>
                                <TopText>{stock['2. name']}</TopText>
                            </div>
                            <MiddleText> {stock["8. currency"]}</MiddleText>
                            <BottomText stockPrice={stock["9. matchScore"]}> {stock["9. matchScore"]}</BottomText>
                        </li>
                    })}
                </Ul>
                <div>
                    <LeftButton type="submit" onClick={this.movePrevious} disabled={this.state.selectedIndex <= 0} >
                        <LeftArrow width="50" height="50" color={Theme.primaryColor} />
                    </LeftButton>
                    <RightButton type="submit" onClick={this.moveNext} disabled={this.state.selectedIndex >= this.state.newStocksObject.length - 1}>
                        <RightArrow width="50" height="50" color={Theme.primaryColor} />
                    </RightButton>
                </div>
            </Container>
        )
    }
}
export default MarketSummarry

MarketSummarry.propTypes = {
    stocks: PropTypes.object.isRequired,
}