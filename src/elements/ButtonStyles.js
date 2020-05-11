import { css } from 'styled-components';

import Theme from './Theme';

const Button = css`
  font-size: 0.9rem;
  padding: 0.25em 0.85em;
  border: 0;
  background-color: #fcc117e3;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    transform: perspective(1px) translateZ(0);
    background-color: ${Theme.primaryColorLight};
  }
  &:focus {
    outline: none;
  }
  :disabled {
    opacity: 0.5;
    background-color: gray;
  }
`;
export default Button;
