import styled from 'styled-components';

import ButtonStyles from './elements/ButtonStyles';

export default styled.main`
  text-align: center;
  overflow: auto auto;
  background: #1f1b24;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.05rem;
  form {
    button {
      ${ButtonStyles};
    }
  }

  @media (max-width: 768px) {
    div:first-of-type {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      text-align: center;
    }
    span div section {
      width: 100%;
    }
    section {
      width: inherit;
      margin: auto;
    }
  }
`;
