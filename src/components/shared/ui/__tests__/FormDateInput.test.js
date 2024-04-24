import React from 'react';
import sinon from 'sinon';
import DatePicker from 'react-datepicker';

import DateInput from '../Form/DateInput/DateInput';
import { renderWithTheme } from '../../../../utils/style-utils';

const baseProps = {
  name: 'DateInput',
  onFocus: sinon.spy(),
  onBlur: sinon.spy(),
  value: 'Testing',
  formik: {
    setFieldValue: sinon.spy(),
    setFieldTouched: sinon.spy(),
  },
};

const mountWrapper = (props = {}) => {
  const allProps = {
    ...baseProps,
    ...props,
  };

  return renderWithTheme(<DateInput {...allProps} />);
};

describe('Components: Shared: UI: Form DateInput', () => {
  it('renders correctly', () => {
    const wrapped = mountWrapper();
    expect(wrapped).toMatchSnapshot();
  });

  it('should render a DatePicker', () => {
    const wrapped = mountWrapper();
    expect(wrapped.find(DatePicker)).toHaveLength(1);
  });

  it('should be disabled', () => {
    const wrapper = mountWrapper({ disabled: true });

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });
});
