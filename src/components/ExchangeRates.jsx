import React from "react"
import styled, { ThemeProvider } from 'styled-components'
import Theme from '../elements/Theme';

const RatesTable = styled.table`
 border-spacing: 10px;
  display: flex;
  border-width:2px;
  border-style: solid;
  border-color: #80808059;
  border-radius: 10px;
  width: fit-content;
  tbody{
      border-left-width:3px;
      border-left-style: solid;
      border-left-color: ${(props) => props.theme.primaryColor};
  }
`
const Currency = styled.td`
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
    padding: 10px;
    border-radius: 8px; 
    background-color: #d3d3d361;
  `
const CurrencyPrice = styled.td`
   color: #51575d;
   font-weight: 500;
   padding: 10px;
   border-left-style:solid;
   border-left-width: 2px;
   border-left-color:rgba(167, 169, 172, 0.49);
 `

const Header = styled.h2`
    color: ${(props) => props.theme.secondaryColor};
    text-align:left;
    margin-top: 35px;
	margin-bottom: 5px;
	font-family: Arial, Helvetica, sans-serif;
`

const rates = {
    "CAD": 1.565,
    "CHF": 1.1798,
    "GBP": 0.87295,
    "SEK": 10.2983,
    "EUR": 1.092,
    "USD": 1.2234,
}

class ExchangeRates extends React.Component {
    constructor(props) {
        super(props);
    }
    renderTableData(currency) {
        return (<tr key={currency}>
            <Currency>{currency}</Currency>
            <CurrencyPrice>{rates[currency].toFixed(4)}</CurrencyPrice>
        </tr>)
    }
    render(props) {
        let ratesObjectLength = Object.keys(rates).length
        let ratesObjectArray = Object.keys(rates)
        return (
            <ThemeProvider theme={Theme}>
                <div>
                    <Header>CURRENCIES</Header>
                    <RatesTable>
                        <tbody>
                            {ratesObjectArray.splice(ratesObjectLength / 2).map(currency => {
                                return (
                                    this.renderTableData(currency)
                                )
                            })}
                        </tbody>
                        <tbody>
                            {ratesObjectArray.map(currency => {
                                return (
                                    this.renderTableData(currency)

                                )
                            })}
                        </tbody>
                    </RatesTable>
                </div>
            </ThemeProvider>
        )
    }
}
export default ExchangeRates