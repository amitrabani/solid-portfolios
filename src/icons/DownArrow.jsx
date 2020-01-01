import React from 'react'
import PropTypes from 'prop-types';

export default function DownArrow(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={ props.width} height={props.height} viewBox="0 0 24 24">
     <path fill={props.color} d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
     <path fill="none" d="M0 0h24v24H0V0z"/>
     </svg>
)
  }

  DownArrow.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string

  };

  
