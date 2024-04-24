import actions from '../actions/payslip';
import authActions from '../actions/auth';

export const initialState = {
  loading: false,
  name: '',
  payPeriod: '',
  payFrequency: 'Monthly',
  annualSalary: 0,
  result: null,
  error: null,
};

/**
 *
 * @param {object} Initial state of Payslip
 * @param {object} Action object
 */
const reducer = (state = initialState, action) => {
  const { payload, error } = action;

  switch (action.type) {
    case actions.GENERATE_PAYSLIP:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case actions.PAYSLIP_GENERATED:
      return {
        ...state,
        result: {
          ...state.result,
          ...payload,
        },
        loading: false,
        error: null,
      };
    case actions.RESET_PAYSLIP:
    case authActions.LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
    case actions.GENERATE_PAYSLIP_ERROR:
      return {
        ...state,
        loading: false,
        result: null,
        error,
      };
    default:
      return state;
  }
};

export default reducer;
