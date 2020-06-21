import styled from 'styled-components';

import ButtonStyles from './ButtonStyles';


const DeleteButton = styled.button`
  ${ButtonStyles}
  background: transparent;
  color: white;
  border: 3px solid transparent;
  .hoverIcon {
    display: none;
  }

  :hover {
    color: white;
    opacity: 0.9;
    background-color: transparent;
    .regularIcon {
      display: none;
    }
    .hoverIcon {
      display: unset;
    }
  }
`;

export default DeleteButton;
