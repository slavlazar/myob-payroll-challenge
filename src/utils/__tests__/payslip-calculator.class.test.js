import PayslipCalculator from '../payslip-calculator.class';

const expectationFunc = arr => prop => {
  arr.forEach(row => {
    const payslip = new PayslipCalculator({ ...row[0] });
    payslip.generate();

    expect(payslip[prop]).toEqual(row[1]);
  });
};

describe('Utils: Payslip Calculator Class', () => {
  const users = {};

  beforeAll(() => {
    users.Tester = {
      firstName: 'Bob',
      lastName: 'Henry',
      annualSalary: 60050,
      superRate: 9.5,
    };

    users.Developer = {
      firstName: 'Jack',
      lastName: 'Daniels',
      annualSalary: 132500,
      superRate: 9.5,
    };

    users.CEO = {
      firstName: 'Tim',
      lastName: 'Cook',
      annualSalary: 358420,
      superRate: 9.5,
    };
  });

  describe('name', () => {
    it('should return the full name of the employees given their first and last name', () => {
      const { CEO, Developer, Tester } = users;

      const nameExpectations = [
        // Salary, Expected
        [Tester, 'Bob Henry'],
        [Developer, 'Jack Daniels'],
        [CEO, 'Tim Cook'],
      ];

      expectationFunc(nameExpectations)('name');
    });
  });

  describe('payPeriod', () => {
    it('should return the correct display date of start of month to end of month from provided date object', () => {
      const { CEO, Developer, Tester } = users;

      const payPeriodExpectations = [
        [
          { ...Tester, payPeriod: new Date(2019, 2, 12) },
          '01 March to 31 March',
        ],
        [
          { ...Developer, payPeriod: new Date(2019, 0, 20) },
          '01 January to 31 January',
        ],
        [
          { ...CEO, payPeriod: new Date(2019, 1, 3) },
          '01 February to 28 February',
        ],
        [
          { ...CEO, payPeriod: new Date(2020, 1, 20) },
          '01 February to 29 February', // Testing leap year
        ],
      ];

      expectationFunc(payPeriodExpectations)('payPeriod');
    });
  });

  describe('grossIncome', () => {
    it('should return the correct gross income for annual salaries', () => {
      const { CEO, Developer, Tester } = users;

      const salariesExpectations = [
        // Salary, Expected
        [Tester, 'A$5,004.00'],
        [Developer, 'A$11,042.00'],
        [CEO, 'A$29,868.00'],
      ];

      expectationFunc(salariesExpectations)('grossIncome');
    });
  });

  describe('incomeTax', () => {
    it('should return the valid tax calculation for taxable incomes', () => {
      const { CEO, Developer, Tester } = users;

      const taxableIncomesExpectations = [
        [Tester, 'A$922.00'],
        [Developer, 'A$3,055.00'],
        [CEO, 'A$11,210.00'],
      ];

      expectationFunc(taxableIncomesExpectations)('incomeTax');
    });
  });

  describe('netIncome', () => {
    it('should return the correct net income for provided input', () => {
      const { CEO, Developer, Tester } = users;

      const netIncomeExpectations = [
        [Tester, 'A$4,082.00'],
        [Developer, 'A$7,987.00'],
        [CEO, 'A$18,658.00'],
      ];

      expectationFunc(netIncomeExpectations)('netIncome');
    });
  });

  describe('superTotal', () => {
    it('should return the correct super total for provided input', () => {
      const { CEO, Developer, Tester } = users;

      const superTotalExpectations = [
        [Tester, 'A$475.00'],
        [Developer, 'A$1,049.00'],
        [CEO, 'A$2,837.00'],
      ];

      expectationFunc(superTotalExpectations)('superTotal');
    });
  });
});
