import styled from 'styled-components';

import ButtonStyles from '../../../elements/ButtonStyles';
import DeleteButton from '../../../elements/DeleteButton';
import { Header } from '../../../elements/FormStyles';
import Theme from '../../../elements/Theme';


export const PortfolioHeader = styled(Header)`
  color: white;
  margin: 1em;
  text-align: left;
  position: relative;
`;

export const TaskButtonContainer = styled.div`
height:44px;
display: flex;
justify-content: flex-start;
margin: 1em;
`;
export const CustomDeleteButton = styled(DeleteButton)`
  margin:1em;
  display: flex;
  align-items: center;
  :hover{
    color:${Theme.negativeColor}
  }
`;

export const TradeButton = styled.button`
  ${ButtonStyles}
  background-color:transparent
  :hover {
    background-color: #ffc107;
  }
`;
