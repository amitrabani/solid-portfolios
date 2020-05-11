import styled from 'styled-components';

import Theme from '../../../elements/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${Theme.secondaryColor};
`;

export const Button = styled.button`
  color: #0081f2;
  background-color: transparent;
  border: solid transparent;
  border-radius: 15px;

  :disabled {
    opacity: 0.3;
  }
  :focus {
    outline: transparent;
  }
  :hover {
    background-color: #fcc11754;
  }
`;
export const ArrowButtonsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  height: 4rem;
`;
export const LeftButton = styled(Button)`
  border-style: solid;
  border-width: 0px 1px 0px 0px;
`;

export const RightButton = styled(Button)`
  border-width: 0px 0px 0px 1px;
`;

export const Ul = styled.ul`
  flex-grow: 1;
  overflow: hidden;
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
    padding: 0 1em;
  }
`;

export const TopText = styled.h3`
  color: ${Theme.primaryColor};
  font-weight: 500;
  margin-bottom: 2px;
  white-space: nowrap;
`;
export const MiddleText = styled.h4`
  margin-top: 0px;
  font-weight: 700;
  color: white;
  margin-bottom: 0.2em;
`;
export const BottomText = styled.h5`
  font-weight: 600;
  color: ${(props) => (props.stockPrice <= 0 ? Theme.negativeColor : Theme.positiveColor)};
  margin-top: 0px;
`;
