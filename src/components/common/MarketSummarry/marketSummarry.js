import styled from "styled-components";
import Theme from "../../../elements/Theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  color: #0081f2;
  width: 50px;
  height: 100px;
  background-color: transparent;
  border-color: transparent;
  &:disabled {
    opacity: 0.3;
  }
  &:active {
    background-color: #fcc11754;
  }
  &:focus {
    outline: transparent;
  }
`;
export const LeftButton = styled(Button)`
  border-style: solid;
  border-color: rgb(224, 228, 233);
  border-width: 0px 1px 0px 0px;
`;
export const RightButton = styled(Button)`
  border-style: solid;
  border-color: rgb(224, 228, 233);
  border-width: 0px 0px 0px 1px;
`;
export const Ul = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  width: 85%;
  display: flex;
  transition: transform 3000ms ease 0s;
  li {
    width: 75%;
    border-style: solid;
    border-color: #e0e4e9;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 1px;
    padding:1em;
  }
`;

export const TopText = styled.h3`
  color: ${Theme.primaryColor};
  font-weight: 600;
  margin-bottom: 2px;
  white-space: nowrap;
`;
export const MiddleText = styled.h4`
  margin-top: 0px;
  font-weight: 700;
  color: white;
  margin-bottom: 5px;
`;
export const BottomText = styled.h5`
  font-weight: 600;
  color: ${props =>props.stockPrice <= 0 ? Theme.negativeColor : Theme.positiveColor};
  margin-top: 0px;
`;
