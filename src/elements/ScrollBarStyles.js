import { css } from 'styled-components';

import Theme from './Theme';

const ScrollBarStyles = css`
&::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  }
&::-webkit-scrollbar-thumb {
  background: ${Theme.primaryColor};
  border-radius: 2em;
  outline: 1px solid slategrey;
  }

`;
export default ScrollBarStyles;
