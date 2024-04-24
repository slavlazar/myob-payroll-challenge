import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Generator from '../../Payslip/Generator/Generator';
import GeneratorForm from '../../Payslip/Generator/Generator.form';

const handleSubmit = sinon.spy();

const shallowWrapper = (props = {}) => {
  const allProps = {
    handleSubmit,
    ...props,
  };

  return shallow(<Generator {...allProps} />);
};

const defaultFormProps = {
  values: {},
  touched: {},
  handleSubmit,
  handleChange: sinon.spy(),
  handleBlur: sinon.spy(),
  isValid: false,
};

const shallowGeneratorFormWrapper = (props = {}) => {
  const allProps = {
    ...defaultFormProps,
    ...props,
  };

  return shallow(<GeneratorForm {...allProps} />);
};

describe('Components: Payslip: Generator', () => {
  describe('Generator', () => {
    it('renders correctly', () => {
      const wrapped = shallowWrapper();
      expect(wrapped).toMatchSnapshot();
    });

    it('should render an alert message', () => {
      const wrapped = shallowWrapper({ error: 'Error' });
      expect(wrapped.find('.payslip-generator-error')).toHaveLength(1);
    });
  });

  describe('Generator Form', () => {
    afterEach(() => {
      defaultFormProps.handleSubmit.resetHistory();
      defaultFormProps.handleChange.resetHistory();
      defaultFormProps.handleBlur.resetHistory();
    });

    it('renders correctly', () => {
      const wrapped = shallowGeneratorFormWrapper();

      expect(wrapped).toMatchSnapshot();
    });

    it('should generate the required fields', () => {
      const wrapped = shallowGeneratorFormWrapper();
      expect(wrapped.find('[name="firstName"]')).toHaveLength(1);
      expect(wrapped.find('[name="lastName"]')).toHaveLength(1);
      expect(wrapped.find('[name="annualSalary"]')).toHaveLength(1);
      expect(wrapped.find('[name="superRate"]')).toHaveLength(1);
      expect(wrapped.find('[name="payPeriod"]')).toHaveLength(1);
    });

    it('should trigger the onSubmit event', () => {
      const wrapped = shallowGeneratorFormWrapper();

      expect(defaultFormProps.handleSubmit.callCount).toEqual(0);

      const button = wrapped.find('#paylsip-generate-button');
      button.simulate('click');
      expect(defaultFormProps.handleSubmit.callCount).toEqual(1);
    });
  });
});
