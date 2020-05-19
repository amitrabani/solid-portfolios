import styled from 'styled-components';

import { smallScreenWidth } from '../../../elements/consts';
import scrollBarStyles from '../../../elements/ScrollBarStyles';
import Theme from '../../../elements/Theme';

export const CardsContainer = styled.div`
  border-right: 1px solid #c6cdd5;
  position: relative;
  height: 40em;
  align-content: flex-start;
  overflow: auto;
  overflow-x: hidden;
  a {
    font-weight: 600;
    color: #ffffff;
    :hover {
      color: ${Theme.primaryColor};
    }
  }
  ${scrollBarStyles}
  @media (max-width: ${smallScreenWidth}) {
    article {
      margin: 1em;
    }
  }
  @media (max-width: 1000px) {
    img {
      display: none;
    }
  }
`;
export const Card = styled.article`
  width: 98%;
  margin-bottom: 1.2em;
  position: relative;
  padding: 3px;
  display: flex;
p{
  font-size:.8rem;
}
}
`;
export const CardImg = styled.img`
  width: 19em;
  position: relative;
  float: left;
  margin-right: 1em;
`;

export const CardSentiment = styled.span`
  float: left;
  margin: 5px;
  background-color: ${(props) => props.sentimentColor || '#5B6F82'};
  color: #fff;
  border-radius: 3px;
  font-size: 15px;
  padding: 2px 6px 2px 6px;
  font-variant-caps: all-small-caps;
  font-variant: bold;
`;
export const CardTickers = styled.span`
  background-color: #96989b;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  padding: 4px 8px;
  margin-right: 3px;
`;
