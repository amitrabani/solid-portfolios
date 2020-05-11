import styled from 'styled-components';

import Theme from '../../../elements/Theme';

export const List = styled.ul`
 list-style: none;
 margin:0;
  width: 95%;
  overflow-x: hidden;
  color: white;
  background: #1f1b24e0;
  font-size: 0.7rem;
li > h3 {
  color: ${Theme.primaryColor};
}`;


export const ListItem = styled.li`
  transition: all 0.3s ease-in-out;
  :hover{
    transform: translateX(20px);
  }
`;
