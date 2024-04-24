import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Group,
  LabelGroup,
  Label,
  InputGroup,
  ErrorMessage,
} from './Field.style';

/**
 * Renders a form field with label (if present), along
 * with Component (if present), or render prop function -
 * also handles error messaging if field has an error returned
 * from Formik schema validation
 * @param {object} Object of input props and render function or component
 */
const InputComponent = ({
  component: Component,
  render,
  id,
  name,
  label,
  errorMessage,
  ...inputProps
}) => {
  const htmlId = id || name;

  const errorAriaDescribe = `${htmlId}_error`;

  return (
    <Group>
      {label && (
        <LabelGroup>
          <Label className="form-label" htmlFor={htmlId}>
            {label}
          </Label>
        </LabelGroup>
      )}
      <InputGroup>
        {Component ? (
          <Component
            id={htmlId}
            name={name}
            error={errorMessage}
            aria-describedby={errorAriaDescribe}
            {...inputProps}
          />
        ) : (
          render({
            id: htmlId,
            name,
            errorMessage,
            'aria-describedby': errorAriaDescribe,
            ...inputProps,
          })
        )}
        {errorMessage && (
          <ErrorMessage className="form-error-message" id={errorAriaDescribe}>
            {errorMessage}
          </ErrorMessage>
        )}
      </InputGroup>
    </Group>
  );
};

InputComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  render: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

InputComponent.defaultProps = {
  component: null,
  render: () => {},
  id: null,
  name: null,
  label: null,
  errorMessage: null,
};

// Prevent re-render if value or errorMessage are the same
export default memo(
  InputComponent,
  (prevProps, nextProps) =>
    prevProps.value === nextProps.value &&
    prevProps.errorMessage === nextProps.errorMessage
);
