import React from 'react';
import { shallow } from 'enzyme';

import Payslip from '../../Payslip/Payslip';

const shallowWrapper = (props = {}) => {
  const allProps = {
    payslip: {},
    handleSubmit: () => {},
    handleReset: () => {},
    ...props,
  };

  return shallow(<Payslip {...allProps} />);
};

describe('Components: Payslip', () => {
  it('renders correctly', () => {
    const wrapped = shallowWrapper();
    expect(wrapped).toMatchSnapshot();
  });
});
