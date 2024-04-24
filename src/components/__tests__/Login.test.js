import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Login from '../Login/Login';
import LoginForm from '../Login/Login.form';

const handleLogin = sinon.spy();

const shallowLoginWrapper = (props = {}) => {
  const allProps = {
    handleLogin,
    ...props,
  };

  return shallow(<Login {...allProps} />);
};

const defaultFormProps = {
  values: {},
  touched: {},
  handleSubmit: handleLogin,
  handleChange: sinon.spy(),
  handleBlur: sinon.spy(),
  isValid: false,
};

const shallowLoginFormWrapper = (props = {}) => {
  const allProps = {
    ...defaultFormProps,
    ...props,
  };

  return shallow(<LoginForm {...allProps} />);
};

describe('Components: Login', () => {
  describe('Login', () => {
    it('renders correctly', () => {
      const wrapped = shallowLoginWrapper();

      expect(wrapped).toMatchSnapshot();
    });

    it('should render an alert for any errors', () => {
      const error = 'Failed to login';
      const wrapped = shallowLoginWrapper({ error });
      const alertBoxWrapped = wrapped.find('.login-alert');
      expect(alertBoxWrapped.dive().text()).toContain(error);
    });
  });

  describe('Login Form', () => {
    afterEach(() => {
      defaultFormProps.handleSubmit.resetHistory();
      defaultFormProps.handleChange.resetHistory();
      defaultFormProps.handleBlur.resetHistory();
    });

    it('renders correctly', () => {
      const wrapped = shallowLoginFormWrapper();

      expect(wrapped).toMatchSnapshot();
    });

    it('should trigger onChange event for input fields', () => {
      const wrapped = shallowLoginFormWrapper();

      const usernameField = wrapped.find('#username');
      const passwordField = wrapped.find('#password');
      usernameField.simulate('change', 'test');
      expect(defaultFormProps.handleChange.callCount).toEqual(1);

      passwordField.simulate('change', 'test2');
      expect(defaultFormProps.handleChange.callCount).toEqual(2);
    });

    it('should trigger the onBlur event for input fields', () => {
      const wrapped = shallowLoginFormWrapper();

      expect(defaultFormProps.handleBlur.callCount).toEqual(0);

      const usernameField = wrapped.find('#username');
      const passwordField = wrapped.find('#password');
      usernameField.simulate('blur');
      expect(defaultFormProps.handleBlur.callCount).toEqual(1);

      passwordField.simulate('blur');
      expect(defaultFormProps.handleBlur.callCount).toEqual(2);
    });

    it('should trigger the onSubmit event', () => {
      const wrapped = shallowLoginFormWrapper({});

      expect(defaultFormProps.handleSubmit.callCount).toEqual(0);

      const button = wrapped.find('#login-form-button');
      button.simulate('click');
      expect(defaultFormProps.handleSubmit.callCount).toEqual(1);
    });

    it('should disable the login button', () => {
      const wrapped = shallowLoginFormWrapper({ isSubmitting: true });

      const button = wrapped.find('#login-form-button');
      expect(button.prop('disabled')).toBe(true);
    });
  });
});
