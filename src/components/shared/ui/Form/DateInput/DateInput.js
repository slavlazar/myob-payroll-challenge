import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
// Require datepicker styles for general date picker display
// We will modify this with styled components
import 'react-datepicker/dist/react-datepicker.css';

import Input from '../Input/Input.style';
import Field from '../Field';
import { useDateInput } from './useDateInput';

/**
 * Displays React Datepicker object styled with our Field base
 * component styles
 * @param {object} props DatePicker props to generate
 */
const DateInput = props => {
  const {
    formik: { setFieldValue, setFieldTouched },
    dateFormat,
    disabled,
    name,
    label,
    id,
    placeholder,
    onFocus,
    onBlur,
    showMonthYearPicker,
    className,
    errorMessage,
    ...rest
  } = props;

  const [handleChangeRaw, handleChange] = useDateInput(
    setFieldValue,
    setFieldTouched,
    name
  );

  const { value } = rest;

  return (
    <Field
      label={label}
      errorMessage={errorMessage}
      value={value}
      disabledKeyboardNavigation
      autoComplete="off"
      {...rest}
      name={name}
      dateFormat={dateFormat}
      selected={value ? new Date(value) : null}
      error={errorMessage}
      placeholderText={placeholder}
      showMonthYearPicker={showMonthYearPicker}
      onChangeRaw={handleChangeRaw}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      render={renderProps => (
        <Input as={DatePicker} className={className} {...renderProps} />
      )}
    />
  );
};

DateInput.propTypes = {
  /** Form values from Formik */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** Function to handle field blur events */
  onBlur: PropTypes.func.isRequired,
  /** Name of input field */
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  hint: PropTypes.string,
  dateFormat: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  showMonthYearPicker: PropTypes.bool,
  errorMessage: PropTypes.string,
};

DateInput.defaultProps = {
  onFocus: () => {},
  id: null,
  className: null,
  style: null,
  label: null,
  hint: null,
  dateFormat: 'MM/yyyy',
  placeholder: null,
  required: false,
  disabled: false,
  showMonthYearPicker: true,
  errorMessage: null,
};

export default DateInput;
