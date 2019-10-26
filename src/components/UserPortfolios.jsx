import React from "react"
import PortfolioChart from './PortfolioChart'
import rightArrow from '../icons/right-arrow.svg'
import leftArrow from '../icons/left-arrow.svg'
import styled, { ThemeProvider } from 'styled-components'
import Theme from '../elements/Theme';

const Container = styled.div`

    display: flex;
    -webkit-align-items: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
`
const ButtonsContainer = styled.div`
    width: min-content;
`
const Button = styled.button`
background-color: transparent;
    border-color: transparent;
    outline-color: #03dac56b;
    outline-width: thick;
    &:hover{
        background-color:#e0f0ff;
    }
    &:disabled {
        opacity: 0.3;
    }`
const Ul = styled.ol`
list-style-type: none;
margin-top: 10px;
margin-bottom: 40px;
width: 100%;
display: flex;
overflow-y: hidden;
scroll-behavior: smooth;
height: 300px;
align-items: center;
&&::-webkit-scrollbar {
width: 4px;
height: 10px;
}
&&::-webkit-scrollbar-thumb {
background-color: #00a8956b;
outline: 1px solid slategrey;
width: 100px;
}

&&::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
width: 200px;
}
  li{
    height: 220px;
    border-style: solid;
    border-color: #e0e4e9;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 1px;
    text-transform: uppercase;
}
`
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
        this.refs.listScroll.scrollLeft += 220
        if (
            this.refs.listScroll.scrollLeft + this.refs.listScroll.clientWidth >=
            this.refs.listScroll.scrollWidth - 1
        ) {
            this.refs.listScroll.scrollLeft = 10
        }
    }
    movePrevious() {
        this.refs.listScroll.scrollLeft -= 220
        if (
            this.refs.listScroll.scrollLeft === 0
          ) {
            this.refs.listScroll.scrollLeft = this.refs.listScroll.scrollWidth

          }     }

    render() {
        return (
            <ThemeProvider theme={Theme}>
                <Container>
                    <Ul ref={"listScroll"}>
                        {this.state.portfolios.map(portfolio => {
                            return <li key={portfolio[0].portfolioTitle} >
                                <PortfolioChart portfolio={portfolio} />
                            </li>
                        }
                        )
                        }
                    </Ul>
                    <ButtonsContainer>
                        <Button type="submit" onClick={this.movePrevious} >
                            <img height="50px" src={leftArrow}></img>
                        </Button>
                        <Button type="submit" onClick={this.moveNext} >
                            <img height="50px" src={rightArrow}></img>
                        </Button>
                    </ButtonsContainer>
                </Container>
            </ThemeProvider>
        )
    }
}
export default UserPortfolio