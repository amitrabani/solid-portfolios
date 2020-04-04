import styled from "styled-components";
export const MainPageContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    .shirnkable {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    span {
      width: 100%;
    }
  }
`;
export const ColumnsContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  h1 {
    color: white;
  }
`;

// }

export const WideColumn = styled.span`
  width: 65%;
  margin: 1em;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;
export const NarrowColumn = styled.span`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
`;
