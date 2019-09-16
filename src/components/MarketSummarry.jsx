import React from "react"
// import  rightArrow  from '../icons/right-arrow.png'
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
        height: 120px;
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
    width: 75%;
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
const stocks = {
    "bestMatches": [
        {
            "1. symbol": "BA",
            "2. name": "The Boeing Company",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "1.0000"
        },
        {
            "1. symbol": "BSVN",
            "2. name": "Bank7 Corp.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.8000"
        },
        {
            "1. symbol": "BABA",
            "2. name": "Alibaba Group Holding Limited",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.6667"
        },
        {
            "1. symbol": "BAC",
            "2. name": "Bank of America Corporation",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.5714"
        },
        {
            "1. symbol": "BIDU",
            "2. name": "Baidu Inc.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.4000"
        },
        {
            "1. symbol": "BAYRY",
            "2. name": "Bayer Aktiengesellschaft",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.3333"
        },
        {
            "1. symbol": "GOLD",
            "2. name": "Barrick Gold Corporation",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.3333"
        },
        {
            "1. symbol": "BZUN",
            "2. name": "Baozun Inc.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.3333"
        },
        {
            "1. symbol": "BHC",
            "2. name": "Bausch Health Companies Inc.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.1538"
        },
        {
            "1. symbol": "BA",
            "2. name": "The Boeing Company",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "1.0000"
        },
        {
            "1. symbol": "BSVN",
            "2. name": "Bank7 Corp.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.8000"
        },
        {
            "1. symbol": "BABA",
            "2. name": "Alibaba Group Holding Limited",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.6667"
        },
        {
            "1. symbol": "BAC",
            "2. name": "Bank of America Corporation",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.5714"
        },
        {
            "1. symbol": "BIDU",
            "2. name": "Baidu Inc.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.4000"
        },
        {
            "1. symbol": "BAYRY",
            "2. name": "Bayer Aktiengesellschaft",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.3333"
        },
        {
            "1. symbol": "GOLD",
            "2. name": "Barrick Gold Corporation",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.3333"
        },
        {
            "1. symbol": "BZUN",
            "2. name": "Baozun Inc.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.3333"
        },
        {
            "1. symbol": "BHC",
            "2. name": "Bausch Health Companies Inc.",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.1538"
        }
    ]
}

class MarketSummarry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            newStocksObject: []
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
    generateStocksGroupedObject() {
        let newStocks = []
        let tabsNumber = Math.ceil(stocks.bestMatches.length / 5)
        for (let index = 0; index < tabsNumber; index++) {
            newStocks.push(stocks.bestMatches.splice(0, 5))
        }
        this.setState({ newStocksObject: newStocks })

    }
    componentWillMount() {
        this.generateStocksGroupedObject()

    }
    render(props) {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Ul style={styles.ul}> 
                        {this.state.newStocksObject[this.state.selectedIndex].map(stock => {
                            return <li key={stock['2. name']}>
                                <TopText>{stock['2. name']}</TopText>
                                <MiddleText> {stock["8. currency"]}</MiddleText>
                                <ButtomText> {stock["9. matchScore"]}</ButtomText>
                                {/* <a target="_blank" rel="noopener noreferrer"  href="https://finance.yahoo.com/chart/GC=F" data-symbol="GC=F" title="Gold Chart"><canvas style={{'width':'96', height:34 }} ></canvas></a> */}
                            </li>
                        }
                        )

                        }
                    </Ul>
                    <div>
                        <LeftButton type="submit" onClick={this.movePrevious} disabled={this.state.selectedIndex <= 0} >
                            <img src={leftArrow}></img>
                        </LeftButton>
                        <RightButton type="submit" onClick={this.moveNext} disabled={this.state.selectedIndex >= this.state.newStocksObject.length - 1}>
                            <img src={rightArrow}></img>
                        </RightButton>
                    </div>
                </Container>
            </ThemeProvider>
        )
    }
}
export default MarketSummarry
