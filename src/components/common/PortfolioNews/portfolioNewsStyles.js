import styled from "styled-components";
import Theme from "../../../elements/Theme";

export const CardsContainer = styled.div`
  border-right: 1px solid #c6cdd5;
  width: 100%;
  position: relative;
  height: 50%;
  align-content:flex-start;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Theme.primaryColor} !important;
    border-radius: 2em;

    outline: 1px solid slategrey;
    width: 100px;
  }
`;
export const Card = styled.div`
  width: 98%;
  margin-bottom: 10px;
  position: relative;
  padding: 3px;
  display: flex;
  a,
  p {
    color: ${Theme.dataColor};
  }
`;
export const CardImg = styled.img`
  width: 300px;
  position: relative;
  float: left;
  margin-right: 20px;
`;
export const CardBottom = styled.span`
  display: flex;
`;
export const CardSentiment = styled.span`
  float: left;
  margin: 5px;
  background-color: ${props => props.sentimentColor || "#5B6F82"};
  color: #fff;
  border-radius: 3px;
  font-size: 15px;
  padding: 2px 6px 2px 6px;
  font-variant-caps: all-small-caps;
  font-variant: bold;
`;
export const CardTickers = styled.span`
  background-color: #96989b;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  padding: 4px 8px;
  margin-right: 3px;
`;
