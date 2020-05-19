import styled from 'styled-components';

import ButtonStyles from '../../../elements/ButtonStyles';
import Theme from '../../../elements/Theme';


export const AppHeader = styled.div`
  overflow-y: hidden;
  color: #fff;
  margin: 1em;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Container = styled.nav`
  background-color: ${Theme.navColor};
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  width: 100%;
  height: 15%;
  min-height: 108px;
  overflow: visible;
  color: ${Theme.secondaryColor};
  .navItem {
    display: flex;
    align-items: center;
  }
  .removable {
      display: contents;
    }

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    .navItem {
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        li {
          width: 100%;
          text-align: center;
          padding: 0.7em;
        }
      }
    }

    .removable {
      display: none;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  width: min-content;
  align-items: center;
  padding: 0;
  :hover li a {
    opacity: 0.5;
  }
  li a {
    padding: 0.5em;
    color: ${Theme.primaryColor};
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    :hover {
      opacity: 1;
      border-bottom: 3px solid white;
    }
  }
`;

export const SettingsButton = styled.button`
  ${ButtonStyles};
  width: 100%;
  height: 100%;
`;
