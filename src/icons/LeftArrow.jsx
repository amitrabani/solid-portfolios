import React from 'react';

import PropTypes from 'prop-types';

export default function LeftArrow(props) {
  const { width, height, color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path fill={color} d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>

  );
}
LeftArrow.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
};
