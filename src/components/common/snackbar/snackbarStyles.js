import styled, { css } from 'styled-components';

import Theme from '../../../elements/Theme';

export default styled.div`
    visibility: hidden;
    max-width: 350px;
    background-color: ${Theme.negativeColor};
    color: #fff;
    text-align: center;
    border-radius: 10px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 30px;
    font-size: 1rem;

    @keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

    @keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 0; opacity: 0;}
    }

    ${(props) => props.show
    && css`
       visibility: visible;
   animation: fadein 0.5s, fadeout 1s 3s;
    `}
`;
