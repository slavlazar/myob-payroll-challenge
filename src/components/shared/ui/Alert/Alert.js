import React from 'react';
import PropTypes from 'prop-types';

import { Alert as AlertStyle, Header, Body } from './Alert.style';

/**
 * Renders a styled alert box based on size and type
 * @param {object} Object of title, size, type and children of Alert
 */
const Alert = ({ children, title, size, type }) => (
  <AlertStyle size={size} type={type}>
    {title && (
      <Header className="alert-header" type={type}>
        {title}
      </Header>
    )}
    <Body type={type} title={title}>
      {children}
    </Body>
  </AlertStyle>
);

Alert.propTypes = {
  /** Message to display in the rendered alert component */
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'large', 'default']),
  type: PropTypes.oneOf(['danger', 'success', 'default']),
  title: PropTypes.string,
};

Alert.defaultProps = {
  size: 'default',
  type: 'default',
  title: null,
};

export default Alert;
