import React from 'react';

import PropTypes from 'prop-types';

export default function RightArrow(props) {
  const { width, height, color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path fill={color} d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
}

RightArrow.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,

};
