import styled from "styled-components";
import Theme from "../../elements/Theme";

export const RatesTable = styled.table`
  width: 100%;
  border-spacing:8px;
  display: flex;
  border-width: 2px;
  border-style: solid;
  border-color: #80808059;
  border-radius: 10px;
  tbody {
    border-left-width: 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-left-style: solid;
    border-left-color: ${props => props.theme.primaryColor};
  }
  tr{
    margin: 1px;  
    letter-spacing: 1px;
  }
`;
export const Currency = styled.td`
  color: ${props => props.theme.primaryColor};
  font-weight: 700;
  padding: 10px;
  border-radius: 8px;
  background-color: #d3d3d361;
`;
export const CurrencyPrice = styled.td`
  color: ${Theme.primaryColor};
  font-weight: 500;
  padding: 10px;
  border-left-style: solid;
  border-left-width: 2px;
  border-left-color: rgba(167, 169, 172, 0.49);
`;

export const Header = styled.h2`
  color: white;
  text-align: left;
  margin-top: 35px;
  margin-bottom: 5px;
  font-family: Arial, Helvetica, sans-serif;
`;
