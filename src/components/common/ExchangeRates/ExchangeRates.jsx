import React from "react";
import { RatesTable, Currency, Header, CurrencyPrice } from "./exchangeRatesStyles";

const rates = {
  CAD: 1.565,
  CHF: 1.1798,
  GBP: 0.87295,
  SEK: 1.2983,
  EUR: 1.092,
  USD: 1.2234
};

const ExchangeRates = () => {
  const ratesObjectArray = Object.keys(rates);
  return (
    <div>
      <Header>CURRENCIES</Header>
      <RatesTable>
        <tbody>
          {ratesObjectArray.map(currency => (
            <tr key={currency}>
              <Currency>{currency}</Currency>
              <CurrencyPrice>{rates[currency].toFixed(3)}</CurrencyPrice>
            </tr>
          ))}
        </tbody>
      </RatesTable>
    </div>
  );
};

export default ExchangeRates;
