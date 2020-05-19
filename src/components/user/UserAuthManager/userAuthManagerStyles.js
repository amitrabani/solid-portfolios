import styled, { css } from 'styled-components';

import Theme from '../../../elements/Theme';

export const Container = styled.div`
  width: 50em;
  display: flex;
  justify-content: center;
`;

export const Login = styled.div`
  width: 27em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  position: relative;
  z-index: 99;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
    border-radius: 4px;
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100%;
    z-index: 99;
    padding: 17px 10px;
    transition: transform 200ms ease-in-out;
  }
`;
export const FormChanger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  background-color: ${Theme.primaryColor};
  width: 100%;
  position: absolute;
  right: -34%;
  border-radius: 6px;
  z-index: 1;
  transition: all 400ms ease-in-out;
  cursor: pointer;
  box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.281);
  :hover {
    background-color: ${Theme.primaryColorLight};
  }
  .text {
    font-size: 21px;
    font-weight: 500;
    color: #fff;
    margin-right: 3em;
    margin-left: 3em;
  }

  ${(props) => props.form === 'signIn'
    && css`
      right: -40%;
      align-items: flex-end;
      &:hover {
        right: -45%;
      }
    `}

  ${(props) => props.form === 'signUp'
    && css`
      right: 40%;
      align-items: flex-start;
      &:hover {
        right: 45%;
      }
    `}
`;
