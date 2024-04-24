import PayslipCalculator from '../payslip-calculator';

const expectationFunc = arr => func => {
  arr.forEach(row => {
    expect(func(row[0])).toEqual(row[1]);
  });
};

describe('Utils: Payslip Calculator', () => {
  const users = {};

  beforeAll(() => {
    users.Tester = {
      annualSalary: 60050,
      superRate: 9.5,
    };

    users.Developer = {
      annualSalary: 132500,
      superRate: 9.5,
    };

    users.CEO = {
      annualSalary: 358420,
      superRate: 9.5,
    };
  });

  describe('grossIncome', () => {
    it('should return the correct gross income for annual salaries', () => {
      const { CEO, Developer, Tester } = users;

      const salariesExpectations = [
        // Salary, Expected
        [Tester.annualSalary, 5004],
        [Developer.annualSalary, 11042],
        [CEO.annualSalary, 29868],
      ];

      expectationFunc(salariesExpectations)(PayslipCalculator.grossIncome);
    });
  });

  describe('incomeTax', () => {
    it('should return the valid tax calculation for taxable incomes', () => {
      const { CEO, Developer, Tester } = users;

      const taxableIncomesExpectations = [
        [Tester.annualSalary, 922],
        [Developer.annualSalary, 3055],
        [CEO.annualSalary, 11210],
      ];

      expectationFunc(taxableIncomesExpectations)(PayslipCalculator.incomeTax);
    });
  });

  describe('netIncome & superTotal curries', () => {
    let CEOGross;
    let DeveloperGross;
    let TesterGross;

    beforeAll(() => {
      const { CEO, Developer, Tester } = users;

      CEOGross = PayslipCalculator.grossIncome(CEO.annualSalary);
      DeveloperGross = PayslipCalculator.grossIncome(Developer.annualSalary);
      TesterGross = PayslipCalculator.grossIncome(Tester.annualSalary);
    });

    describe('netIncome', () => {
      let CEOTax;
      let DeveloperTax;
      let TesterTax;

      beforeAll(() => {
        const { CEO, Developer, Tester } = users;

        CEOTax = PayslipCalculator.incomeTax(CEO.annualSalary);
        DeveloperTax = PayslipCalculator.incomeTax(Developer.annualSalary);
        TesterTax = PayslipCalculator.incomeTax(Tester.annualSalary);
      });

      it('should return a curried function after supplying gross income', () => {
        expect(PayslipCalculator.netIncome(CEOGross)).toBeInstanceOf(Function);
      });

      // I know this is overkill, this curried function simply
      // does gross - super ... but must test all the things.
      it(
        'returns the correct net income after both gross income and income tax are supplied',
        () => {},
        () => {
          expect(PayslipCalculator.netIncome(CEOGross)(CEOTax)).toEqual(18658);
          expect(
            PayslipCalculator.netIncome(DeveloperGross)(DeveloperTax)
          ).toEqual(7987);
          expect(PayslipCalculator.netIncome(TesterGross)(TesterTax)).toEqual(
            4082
          );
        }
      );
    });

    describe('superTotal', () => {
      it('should return a curried function after supplying gross income', () => {
        expect(PayslipCalculator.superTotal(CEOGross)).toBeInstanceOf(Function);
      });

      it('should return the correct super after both gross and super rate are supplied', () => {
        Object.keys(users).forEach(key => {
          let gross;
          let expected;

          switch (key) {
            case 'Tester':
              gross = TesterGross;
              expected = 475;
              break;
            case 'Developer':
              gross = DeveloperGross;
              expected = 1049;
              break;
            default:
              gross = CEOGross;
              expected = 2837;
          }

          expect(
            PayslipCalculator.superTotal(gross)(users[key].superRate)
          ).toEqual(expected);
        });
      });
    });
  });
});
