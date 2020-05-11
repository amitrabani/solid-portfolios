import styled, { css } from 'styled-components';

import ButtonStyles from './ButtonStyles';

export const BaseContainer = styled.div`
  width: 100%;
  color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    ${ButtonStyles};
  }
`;

export const Header = styled.div`
  font-size: 1.75rem;
  text-align: center;
  position: static;
  z-index: 1;
  background-color: transparent;
  top: 0;
  font-family: "Open Sans", sans-serif;
`;

export const Form = styled.form`
  overflow-y: auto;
  max-height: calc(100vh - 45px) !important;
  /* margin: 3em; */
  flex-direction: column;
  align-items: center;
  /* height: 35em; */
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  label {
    font-size: 0.85rem;
    font-weight: 500;
  }
  input {
    margin-top: 0.35rem;
    min-width: 18em;
    height: 1.7rem;
    padding: 0px 10px;
    font-size: 0.85rem;
    font-family: "Open Sans", sans-serif;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 4px;
    margin-bottom: 0.5em;
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: #ffffff;
      box-shadow: 0px 0px 14px 0.3px #0e81ce96;
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 12px 0.8px #3474dbb2;
    }
  }
`;

export const ButtonsContainer = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 1em;
`;
