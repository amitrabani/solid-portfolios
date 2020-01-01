import React from 'react'
import PropTypes from 'prop-types';

export default function UpArrow(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24">
        <path fill={props.color} d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        <path d="M0 0h24v24H0z" fill="none"/></svg>
)
  }

  UpArrow.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string

  };