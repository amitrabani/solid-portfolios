import styled from 'styled-components';

import ButtonStyles from '../../../elements/ButtonStyles';
import Theme from '../../../elements/Theme';


export const Button = styled.button`
  ${ButtonStyles}
  width:7rem;
  margin: 1em;
  background: transparent;
  color: #fcc117e3;
  border: 3px solid transparent;
  :hover {
    color: white;
    background-color: ${Theme.primaryColor};
    opacity: 0.9;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: flex-end;
  position: absolute;
  z-index: 11;
`;
