import React from "react"
import styled, { ThemeProvider } from 'styled-components'
import { relative } from "path";

// const CardsContainer = styled.div`
//     border: 1px solid #C6CDD5;

// `

const rates = {
    "CAD": 1.565,
    "CHF": 1.1798,
    "GBP": 0.87295,
    "SEK": 10.2983,
    "EUR": 1.092,
    "USD": 1.2234,
}
class PortfolioNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            last: [],
            tableCounter: 0
        }
    }
    seperateRates() {
        var ratesArray = []
        this.seperateRatesAraay = []
        let currencyObject = {}
        let tabsNumber = 2

        Object.keys(rates).forEach(currency => {
            ratesArray.push({ [currency]: rates[currency] })
        })
        for (let i = 0; i < tabsNumber; i++) {
            this.seperateRatesAraay.push(ratesArray.splice(0, 3))

        }
        this.setState({ last: this.seperateRatesAraay })
    }
    componentDidMount() {
        this.seperateRates()

    }
    render(props) {
        // console.log(this.state.last[this.state.tableCounter])
        if (this.state.last[this.state.tableCounter] != undefined) {
            return (
                <div>
                    <table style={{ borderLeft: "4px solid #0081f2", borderSpacing: '10px', display: 'flex' }}>
                        <tbody>
                            {this.state.last[this.state.tableCounter].map(currency => {
                                return <tr>
                                    <th style={{ color: '#0081f2', fontVariant: 'bold', fontWeight: 700, padding: '10px' }}>{Object.keys(currency)}</th>
                                    <td style={{ color: '#51575d', fontVariant: 'bold', borderLeft: '2px solid rgb(167, 169, 172)' }} >{rates[Object.keys(currency)].toFixed(4)}</td>
                                </tr>
                            })
                            }
                        </tbody>
                        {/* <div> */}
                 
                        {/* </div> */}
                    </table>
                </div>
            )

        }
        return <h1>progress</h1>

    }
}
export default PortfolioNews




                    // <table style={{ borderLeft: "4px solid #0081f2", borderSpacing: '10px', display: 'flex' }}>
                    //     <tbody>
                    //         {this.state.last[this.state.tableCounter].map(currency => {
                    //             return <tr>
                    //                 <th style={{ color: '#0081f2', fontVariant: 'bold', fontWeight: 700, padding: '10px' }}>{Object.keys(currency)}</th>
                    //                 <td style={{ color: '#51575d', fontVariant: 'bold', borderLeft: '2px solid rgb(167, 169, 172)' }} >{rates[Object.keys(currency)].toFixed(4)}</td>
                    //             </tr>
                    //         })
                    //         }
                    //     </tbody>
                    //     {/* <div> */}
                    //     <tbody>
                    //         {this.state.last[1].map(currency => {
                    //             return <tr>
                    //                 <th style={{ color: '#0081f2', fontVariant: 'bold', fontWeight: 700, padding: '10px' }}>{Object.keys(currency)}</th>
                    //                 <td style={{ color: '#51575d', fontVariant: 'bold', borderLeft: '2px solid rgb(167, 169, 172)' }} >{rates[Object.keys(currency)].toFixed(4)}</td>
                    //             </tr>
                    //         })
                    //         }
                    //     </tbody>
                    //     {/* </div> */}
                    // </table>