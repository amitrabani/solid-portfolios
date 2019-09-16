import React from "react"
import PortfolioChart from './PortfolioChart'
import rightArrow from '../icons/right-arrow.svg'
import leftArrow from '../icons/left-arrow.svg'
import styled, { ThemeProvider } from 'styled-components'
// import Button from '../elements/Button';
const theme = {
    primary: 'teal',
    secondary: 'green',
    font: 'sans-serif'
}

const Container = styled.div`
        display: flex;
        align-items: center;
`

const Button = styled.button`
    color:#0081f2;
    width: 30px;
    height: 100px;
    // background-color: ${(props) => props.theme.primary};
    background-color: white;
    border-color: transparent;
    &:hover{
        background-color:#e0f0ff;
    }
    &:disabled {
        opacity: 0.3;
    }`
const LeftButton = styled(Button)` 
border-style: solid;
border-color: rgb(224, 228, 233);
border-width: 0px 1px 0px 0px; 
`
const RightButton = styled(Button)` 
border-style: solid;
border-color: rgb(224, 228, 233);
border-width: 0px 0px 0px 1px;
`
const Ul = styled.ul`
        list-style-type: none;
        margin-top: 10px;
        width:90%;
        display: flex;
        /* transition-property: transform;
        transition-duration: 300ms;
        transition-timing-function: ease;
        transition-delay: 0s;
        transform: translateX(0%); */
        li{
    width: 20%;
    border-style: solid;
    border-color: #e0e4e9;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 1px;}`

const TopText = styled.h3`
    color: #0081f2;
    font-weight: 600;
    margin-bottom: 2px;
    `
const MiddleText = styled.h4`
    margin-top: 0px;
    font-weight: 700;
    margin-bottom: 5px;
`
const ButtomText = styled.h5`
    font-weight: 600;
    margin-top: 0px;
`
const styles = {
    ul: {
        transitionProperty: 'transform',
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s',
        transform: 'translateX(0%)',
    }
}


class UserPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            portfolios: this.props.portfolios,
        }
        this.moveNext = this.moveNext.bind(this)
        this.movePrevious = this.movePrevious.bind(this)

    }
    moveNext() {
        this.setState({ selectedIndex: this.state.selectedIndex + 1 })
    }
    movePrevious() {
        this.setState({ selectedIndex: this.state.selectedIndex - 1 })
    }


    generateNewPortfoliosObject() {
        let newPortfolios = []
        let tabsNumber = Math.ceil(this.props.portfolios.length / 6)
        for (let index = 0; index < tabsNumber; index++) {
            newPortfolios.push(this.props.portfolios.splice(0, 6))
        }
        this.setState({ portfolios: newPortfolios })

    }

    componentWillMount() {
        this.generateNewPortfoliosObject()

    }
    render(props) {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Ul style={styles.ul}>
                        {this.state.portfolios[this.state.selectedIndex].map(portfolio => {
                            return <li>
                                <PortfolioChart portfolio={portfolio} />
                            </li>
                        }
                        )
                        }
                    </Ul>
                    <div>
                        <LeftButton type="submit" onClick={this.movePrevious} disabled={this.state.selectedIndex <= 0} >
                            <img src={leftArrow}></img>
                        </LeftButton>
                        <RightButton type="submit" onClick={this.moveNext} disabled={this.state.selectedIndex >= this.state.portfolios.length - 1}>
                            <img src={rightArrow}></img>
                        </RightButton>
                    </div>
                </Container>
            </ThemeProvider>
        )
    }
}
export default UserPortfolio
