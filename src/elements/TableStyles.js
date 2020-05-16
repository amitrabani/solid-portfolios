import styled from 'styled-components';

import Theme from './Theme';

const Table = styled.table`
  font-size: 0.9rem;
  margin: 1em auto;
  color: #eaeaea;
  box-shadow: rgba(133, 132, 132, 0.32) 0px 0px 40px;
  border: solid transparent;
  border-radius: 5px;
  width: 90%;
  th {
    font-family: serif;
    padding: 1em;
  }
  tr:hover {
    tr,
    td {
      background-color: rgba(245, 245, 245, 0.39);
    }
  }
  canvas {
    margin: 0 0.5em;
    border: 2px solid ${Theme.primaryColor};
  }
`;
export default Table;
