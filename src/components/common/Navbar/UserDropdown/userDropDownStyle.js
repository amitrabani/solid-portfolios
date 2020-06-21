import styled from 'styled-components';

import Theme from '../../../../elements/Theme';

export const Container = styled.div`
  width: 9em;
  position: relative;
  h2 {
    font-family: ${Theme.fonts.primaryFontFamily};
    color: ${Theme.primaryColor};
  }
`;

export const List = styled.ul`
  position: absolute;
  padding: 7px;
  margin: 0;
  width: -webkit-fill-available;
  border-radius: 10px;
  appearance: none;
  cursor: pointer;
  list-style-type: none;
  z-index: 1;
  background-color: ${Theme.secondaryColor};
  box-shadow: inset 0px 2px 3px 0px rgba(153, 147, 147, 0.25);
  li {
    padding: 0.5em;
    :hover {
      background-color: #ffffff85;
    }
  }
  .link {
    color: #fcc117e3;
    font-weight: 800;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  outline-color: #03dac56b;
  outline-width: thick;
  border-radius: 139px;
  opacity: 0.8;
  width: 70px;
  height: 70px;
  margin: 5px;
  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: transparent;
  }
`;
