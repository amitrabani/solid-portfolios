import styled from 'styled-components';

export const ColumnsContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  h1 {
    color: white;
  }
`;

// }

export const WideColumn = styled.section`
  width: 65%;
  margin: 1em;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;
export const NarrowColumn = styled.section`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
`;
