import React from 'react';
import PropTypes from 'prop-types';

import { H1, H2, H3, H4, H5 } from './Heading.style';

/**
 * Renders a heading component with styling based on props
 * @param {object} Heading props
 */
const Heading = ({ children, type, textAlign, noMargin, ...props }) => {
  switch (type) {
    case 'h2':
      return (
        <H2 textAlign={textAlign} noMargin={noMargin} {...props}>
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3 textAlign={textAlign} noMargin={noMargin} {...props}>
          {children}
        </H3>
      );
    case 'h4':
      return (
        <H4 textAlign={textAlign} noMargin={noMargin} {...props}>
          {children}
        </H4>
      );
    case 'h5':
      return (
        <H5 textAlign={textAlign} noMargin={noMargin} {...props}>
          {children}
        </H5>
      );
    default:
      return (
        <H1 textAlign={textAlign} noMargin={noMargin} {...props}>
          {children}
        </H1>
      );
  }
};

Heading.propTypes = {
  /** Heading title */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  noMargin: PropTypes.bool,
};

Heading.defaultProps = {
  type: 'h1',
  textAlign: 'left',
  noMargin: false,
};

export default Heading;
