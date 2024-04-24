import reducer, { initialState } from '../payslip';
import actions from '../../actions/payslip';
import authActions from '../../actions/auth';

describe('Reducers: Payslip', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle PAYSLIP_GENERATED', () => {
    const payload = {
      grossIncome: 2000,
      incomeTax: 3000,
      netIncome: 4000,
      superTotal: 5000,
    };
    const action = {
      type: actions.PAYSLIP_GENERATED,
      payload,
    };

    expect(reducer({}, action)).toEqual({
      result: {
        ...payload,
      },
      loading: false,
      error: null,
    });
  });

  it('should handle RESET_PAYSLIP and LOGOUT_SUCCESS', () => {
    const state = {
      result: {
        grossIncome: 2000,
        incomeTax: 3000,
        netIncome: 4000,
        superTotal: 5000,
      },
    };

    expect(reducer(state, { type: actions.RESET_PAYSLIP })).toEqual(
      initialState
    );
    expect(reducer(state, { type: authActions.LOGOUT_SUCCESS })).toEqual(
      initialState
    );
  });

  it('should handle GENERATE_PAYSLIP_ERROR', () => {
    const error = 'Payslip failed to generate';
    const action = {
      type: actions.GENERATE_PAYSLIP_ERROR,
      error,
    };

    expect(reducer({}, action)).toEqual({
      loading: false,
      result: null,
      error,
    });
  });
});
