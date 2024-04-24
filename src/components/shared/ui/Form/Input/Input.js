import React from 'react';

import Field from '../Field';
import InputStyled from './Input.style';

/**
 * Renders a Field component styled as input box
 * @param {object} props Input props
 */
const Input = props => <Field component={InputStyled} {...props} />;

export default Input;
