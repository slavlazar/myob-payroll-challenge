import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Font, StyleSheet } from '@react-pdf/renderer';

import Generated from '../../Payslip/Generated/Generated';
import PayslipDisplay from '../../Payslip/Generated/PayslipDisplay';
import PayslipPDF from '../../Payslip/Generated/PayslipPDF';

const defaultProps = {
  payslip: {
    name: 'Bobs Burgers',
    payPeriod: '01 March to 31 March',
    annualSalary: '$60,050.00',
    grossIncome: '$5,004.00',
    incomeTax: '$871.00',
    netIncome: '$4,082.00',
    superTotal: '$450.00',
    pay: '$3,632.00',
    payFrequency: 'Monthly',
  },
  handleReset: sinon.spy(),
};

const shallowGeneratedWrapper = (props = {}) => {
  const allProps = {
    ...defaultProps,
    ...props,
  };

  return shallow(<Generated {...allProps} />);
};

const getDisplayRowValues = wrapped => {
  const display = wrapped.find(PayslipDisplay).shallow();
  const values = display.find('.payslip-generated-row').reduce((accum, row) => {
    const result = accum;
    result[row.find('.payslip-generated-row--key').prop('data-key')] = row
      .find('.payslip-generated-row--value')
      .text();

    return result;
  }, {});

  return values;
};

describe('Components: Payslip: Generated', () => {
  afterEach(() => {
    defaultProps.handleReset.resetHistory();
  });

  describe('PayslipDisplay', () => {
    it('renders correctly', () => {
      const wrapped = shallow(
        <PayslipDisplay data={defaultProps.payslip}>
          {obj => JSON.stringify(obj)}
        </PayslipDisplay>
      );

      expect(wrapped).toMatchSnapshot();
    });
  });

  describe('Generated', () => {
    let wrapped;

    beforeAll(() => {
      wrapped = shallowGeneratedWrapper();
    });

    it('renders correctly', () => {
      expect(wrapped).toMatchSnapshot();
    });

    it('should display the correct title for the user', () => {
      expect(
        wrapped
          .find('#payslip-generated-name')
          .dive()
          .text()
      ).toEqual('Pay Slip for Bobs Burgers');
    });

    it('should handle a reset form action', () => {
      expect(defaultProps.handleReset.callCount).toEqual(0);
      wrapped.find('#payslip-generated-reset-form').simulate('click');
      expect(defaultProps.handleReset.callCount).toEqual(1);
    });

    it('should generate a PDF download link with the correct filename', () => {
      const pfdDownloadLink = wrapped.find('#payslip-generated-pdf-download');
      expect(pfdDownloadLink).toHaveLength(1);
      expect(pfdDownloadLink.prop('fileName')).toEqual(
        'MYOB_Payslip_01_March_to_31_March.pdf'
      );
    });

    it('should display the correct data table information', () => {
      const values = getDisplayRowValues(wrapped);

      expect(values).toMatchObject(defaultProps.payslip);
    });
  });

  describe('Payslip PDF', () => {
    let wrapped;

    beforeAll(() => {
      sinon.stub(Font, 'register');
      sinon.stub(StyleSheet, 'create');

      wrapped = shallow(<PayslipPDF payslip={defaultProps.payslip} />);
    });

    it('renders correctly', () => {
      expect(wrapped).toMatchSnapshot();
    });

    it('should display the correct title for the user', () => {
      expect(wrapped.find('#payslip-pdf-name').text()).toEqual(
        'Pay Slip for Bobs Burgers'
      );
    });

    it('should display the correct data table information', () => {
      const values = getDisplayRowValues(wrapped);

      expect(values).toMatchObject(defaultProps.payslip);
    });
  });
});
