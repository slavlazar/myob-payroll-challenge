/**
 * Redux actions and actions creators for Payslip state
 */
// import PayslipCalculator from '../utils/payslip-calculator';
import PayslipCalculator from '../utils/payslip-calculator.class';

const ENTITY = '@@MYOB_PAYSLIP';

const actions = {
  GENERATE_PAYSLIP: `${ENTITY}/GENERATE_PAYSLIP`,
  GENERATE_PAYSLIP_ERROR: `${ENTITY}/GENERATE_PAYSLIP_ERROR`,
  PAYSLIP_GENERATED: `${ENTITY}/PAYSLIP_GENERATED`,
  RESET_PAYSLIP: `${ENTITY}/RESET_PAYSLIP`,
  doGeneratePayslip: payload => dispatch => {
    dispatch({ type: actions.GENERATE_PAYSLIP });

    try {
      const payslip = new PayslipCalculator(payload);
      payslip.generate();

      const {
        name,
        payPeriod,
        payFrequency,
        annualSalary,
        grossIncome,
        incomeTax,
        superTotal,
        netIncome,
        pay,
      } = payslip;

      // Simulate a fake API call so user can see a loading indicator
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(
            dispatch({
              type: actions.PAYSLIP_GENERATED,
              payload: {
                name,
                payPeriod,
                payFrequency,
                annualSalary,
                grossIncome,
                incomeTax,
                superTotal,
                netIncome,
                pay,
              },
            })
          );
        }, 1000);
      });
    } catch (error) {
      dispatch({ type: actions.GENERATE_PAYSLIP_ERROR, error: error.message });
      return null;
    }
  },
  doResetPayslip: () => ({
    type: actions.RESET_PAYSLIP,
  }),
};

export default actions;
