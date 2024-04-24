import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions/payslip';
import Payslip from '../../components/Payslip';
import {
  payslipSelector,
  payslipResultSelector,
} from '../../selectors/payslip';

const { doGeneratePayslip, doResetPayslip } = actions;

/**
 * Payslip container to handle connection to Redux store
 * and handle Payslip component actions
 * @param {object} Params from Redux store of Payslip
 */
const PayslipContainer = ({
  Payslip: PayslipState,
  dispatchDoGeneratePayslip,
  dispatchDoResetPayslip,
}) => {
  const handlePayslipGenerate = employeeDetails => {
    dispatchDoGeneratePayslip(employeeDetails);
  };

  const handleResetPayslip = () => {
    dispatchDoResetPayslip();
  };

  return (
    <Payslip
      payslip={PayslipState}
      handleSubmit={handlePayslipGenerate}
      handleReset={handleResetPayslip}
    />
  );
};

PayslipContainer.propTypes = {
  /** Payslip object */
  Payslip: PropTypes.object.isRequired,
  /** Function to generate payslip from store action creators */
  dispatchDoGeneratePayslip: PropTypes.func.isRequired,
  /** Function to reset payslip from store action creators */
  dispatchDoResetPayslip: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  Payslip: {
    ...payslipSelector(state),
    ...payslipResultSelector(state),
  },
});

export default connect(
  mapStateToProps,
  {
    dispatchDoGeneratePayslip: doGeneratePayslip,
    dispatchDoResetPayslip: doResetPayslip,
  }
)(PayslipContainer);
