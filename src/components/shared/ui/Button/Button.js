import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyle from './Button.style';

/**
 * Renders a styled Button based on props
 * @param {object} Object of button styling properties
 */
const Button = ({
  colour,
  block,
  size,
  onClick,
  disabled,
  children,
  ...buttonProps
}) => (
  <ButtonStyle
    colour={colour}
    buttonSize={size}
    block={block}
    onClick={onClick}
    disabled={disabled}
    {...buttonProps}
  >
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  /** Button text displayed */
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  block: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  colour: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  block: false,
  size: 'medium',
  colour: 'primary',
};

export default Button;
