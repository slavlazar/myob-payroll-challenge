import React from 'react';
import PropTypes from 'prop-types';

const payslipKeyMapper = {
  name: 'Employee',
  payPeriod: 'Pay Period',
  payFrequency: 'Pay Frequency',
  annualSalary: 'Annual Income',
  grossIncome: 'Gross Income',
  incomeTax: 'Income Tax',
  netIncome: 'Net Income',
  superTotal: 'Super',
  pay: 'Pay',
};

/**
 * Render prop component that generates key/value pairing of
 * row data for displaying payslip data in both web and PDF views
 * @param {object} Object of data generated from payslip
 * containing keys from payslipKeyMapper and values generated
 * And children which is a function that accepts render props
 * of the calculated column name from key mapper, along with
 * value from data
 */
const PayslipDisplay = ({ data, children }) => (
  <React.Fragment>
    {Object.keys(payslipKeyMapper).map(rowKey => {
      return children({
        key: payslipKeyMapper[rowKey],
        value: data[rowKey],
        _rowKey: rowKey,
      });
    })}
  </React.Fragment>
);

PayslipDisplay.propTypes = {
  /** Children of render props component */
  children: PropTypes.func.isRequired,
  /** Payslip data generated */
  data: PropTypes.object.isRequired,
};

export default PayslipDisplay;
