import React from 'react';
import PropTypes from 'prop-types';

import Container from './Spinner.style';

/**
 * Renders a loading spinner to indicate loading
 * @param {object} Spinner props
 */
const Spinner = ({ size, centered }) => (
  <Container size={size} centered={centered}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-rolling"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        ng-attr-stroke="{{config.color}}"
        ng-attr-stroke-width="{{config.width}}"
        ng-attr-r="{{config.radius}}"
        ng-attr-stroke-dasharray="{{config.dasharray}}"
        stroke="#8241aa"
        strokeWidth="4"
        r="10"
        strokeDasharray="47.12388980384689 17.707963267948966"
        transform="rotate(335.871 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </Container>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  centered: PropTypes.bool,
};

Spinner.defaultProps = {
  size: 'medium',
  centered: false,
};

export default Spinner;
