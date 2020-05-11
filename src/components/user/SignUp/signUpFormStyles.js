import styled from 'styled-components';

import ButtonStyles from '../../../elements/ButtonStyles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .image {
    width: 21em;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;
