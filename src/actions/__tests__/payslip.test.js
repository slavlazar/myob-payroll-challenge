import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import actions from '../payslip';
import PayslipCalculator from '../../utils/payslip-calculator.class';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions: Payslip', () => {
  let store;
  let stub;

  beforeAll(() => {
    store = mockStore({ Payslip: {} });
    stub = sinon.stub(PayslipCalculator.prototype, 'generate');
  });

  afterEach(() => {
    store.clearActions();
    stub.resetBehavior();
  });

  afterAll(() => {
    stub.restore();
  });

  it('should create an action and handle generation of a payslip', () => {
    const expectedPayload = {
      name: 'blah blah2',
      payPeriod: '01 June to 30 June',
      payFrequency: 'Monthly',
      annualSalary: 'A$60,050.00',
      grossIncome: '$5,004.00',
      incomeTax: '$922.00',
      superTotal: '$450.00',
      netIncome: '$4,082.00',
      pay: '$3,632.00',
    };

    // Stub our getters
    sinon
      .stub(PayslipCalculator.prototype, 'grossIncome')
      .get(() => expectedPayload.grossIncome);
    sinon
      .stub(PayslipCalculator.prototype, 'incomeTax')
      .get(() => expectedPayload.incomeTax);
    sinon
      .stub(PayslipCalculator.prototype, 'superTotal')
      .get(() => expectedPayload.superTotal);
    sinon
      .stub(PayslipCalculator.prototype, 'netIncome')
      .get(() => expectedPayload.netIncome);
    sinon
      .stub(PayslipCalculator.prototype, 'pay')
      .get(() => expectedPayload.pay);

    const payload = {
      firstName: 'blah',
      lastName: 'blah2',
      annualSalary: 60050,
      superRate: 9.5,
      payPeriod: new Date(2019, 5, 10),
    };

    const expectedActions = [
      {
        type: actions.GENERATE_PAYSLIP,
      },
      {
        type: actions.PAYSLIP_GENERATED,
        payload: { ...expectedPayload },
      },
    ];

    store.dispatch(actions.doGeneratePayslip(payload)).then(() => {
      expect(stub.called).toBe(true);
      expect(stub.callCount).toEqual(1);

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action for reset payslip', () => {
    const expectedActions = [
      {
        type: actions.RESET_PAYSLIP,
      },
    ];

    store.dispatch(actions.doResetPayslip());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
