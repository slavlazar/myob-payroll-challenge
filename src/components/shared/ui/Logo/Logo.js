import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders MYOB logo with alt title and additional className
 * Had to steal this from the myob.com website :P
 * @param {object} Logo props
 */
const Logo = ({ alt, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.5 116.4"
    preserveAspectRatio="xMidYMin slice"
    aria-labelledby="Logo_title"
    role="img"
    className={className}
  >
    <title id="Logo_title">{alt}</title>
    <defs>
      <linearGradient
        id="logo-gradient"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="58.2083"
        x2="283.4646"
        y2="58.2083"
      >
        <stop offset="0.36" stopColor="#6100A5" />
        <stop offset="0.4557" stopColor="#7001A0" />
        <stop offset="0.6409" stopColor="#980293" />
        <stop offset="0.8947" stopColor="#D9057E" />
        <stop offset="0.97" stopColor="#ED0677" />
      </linearGradient>
    </defs>
    <g fill="url(#logo-gradient)">
      <path d="M46.8,34.2 c-4.4-5.3-11.1-8.6-19.4-8.6C10.8,25.5,0,37.3,0,52.7V88h5.1c3.5-0.2,10.3-1.9,10.5-12V52.4c0-6.9,4.8-11.6,11.8-11.6 c10.3,0,11.4,8.2,11.4,11.6V88h5.1c3.4-0.2,10.2-1.9,10.5-11.9V52.4c0-6.9,5-11.6,11.8-11.6c10.3,0,11.5,8.2,11.5,11.6V88h5.1 c3.5-0.2,10.4-1.9,10.5-12.2V52.7c0-16-10.1-27.2-27.1-27.2C58.3,25.5,51.4,28.9,46.8,34.2" />
      <path d="M138.3,33.8l-13.1,36.4l-14.3-37.7c-2.2-6-7.8-5.6-7.8-5.6H90.9l24.2,59.2c0-0.1,0-0.1-0.1-0.2 c0,0,0,0.1,0.1,0.2c0,0.1,0.1,0.2,0.1,0.2l-0.1-0.3c0.8,2.4,0.6,3.7-0.2,6.1l-0.5,1.5c-2.8,7-6.8,8.9-15.2,8.4v0.1l5.8,14.3 c10.8-0.2,19-3.8,24.4-17.3l29.1-72.2l0,0l-10.9,0c0,0,0,0,0,0C147.1,26.9,140.9,27.1,138.3,33.8" />
      <path d="M170.1,57.7 c0-10.5,6.7-17.9,15-17.9c8.3,0,15,7.3,15,17.9c0,10.3-6.7,17.4-15,17.4C176.8,75.1,170.1,68,170.1,57.7 M154.5,57.6 c0,18.2,13.7,31.8,30.6,31.8c16.9,0,30.7-13.6,30.7-31.8c0-18.2-13.8-32-30.7-32C168.2,25.5,154.5,39.4,154.5,57.6" />
      <path d="M236.6,57.7c0-9.7,7-17.5,15.6-17.5 c8.6,0,15.6,7.6,15.6,17.5c0,9.7-7,17.1-15.6,17.1C243.6,74.9,236.6,67.2,236.6,57.7 M233.4,0L233.4,0 c-10.6,0-12.3,7.2-12.5,10.6V88l7.5,0c6,0.1,7.4-3.7,7.5-5.9v-0.3v-0.3c4.7,5,11.2,7.8,18.6,7.8c16,0,29-13.7,29-31.7 c0-18.1-13-31.8-29-31.8c-7,0-13.2,2.6-17.9,7.1V0H233.4z" />
    </g>
  </svg>
);

Logo.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

Logo.defaultProps = {
  alt: 'MYOB',
  className: '',
};

export default Logo;