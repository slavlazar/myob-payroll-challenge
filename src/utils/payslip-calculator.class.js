import moment from 'moment';

import * as TAXABLE_INCOME from '../config/tax-rates.json';

import { logError as logErrorGroup, formatCurrency } from './helpers';

/** Class representing Payslip calculator. */
class PayslipCalculator {
  static logError = logErrorGroup('PayslipCalculator');

  /**
   * Create a payslip calculator.
   * @param {string} firstName - Employee first name.
   * @param {string} lastName - Employee last name.
   * @param {number} annualSalary - Employee annual salary.
   * @param {number} superRate - Employee super rate.
   */
  constructor(employeeDetails) {
    ({
      firstName: this._firstName,
      lastName: this._lastName,
      annualSalary: this._annualSalary,
      superRate: this._superRate,
    } = employeeDetails);

    this._grossIncome = 0;
    this._incomeTax = 0;
    this._netIncome = 0;
    this._superTotal = 0;
    this._payFrequency = 'Monthly';

    this._determinePayPeriod(employeeDetails.payPeriod);
  }

  /**
   * Get employee full name.
   * @return {string} Employee first name and last name.
   */
  get name() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Get employee pay period.
   * @return {string} Employee pay period based on month and year.
   */
  get payPeriod() {
    return this._payPeriod;
  }

  /**
   * Get employee pay frequency.
   * @return {string} Employee pay frequency - Defaults to monthly for demo.
   */
  get payFrequency() {
    return this._payFrequency;
  }

  /**
   * Get employee annual salary.
   * @return {string} Employee salary formatted to AUD currency.
   */
  get annualSalary() {
    return formatCurrency(this._annualSalary);
  }

  /**
   * Get employee gross income.
   * @return {string} Employee gross income formatted to AUD currency.
   */
  get grossIncome() {
    return formatCurrency(this._grossIncome);
  }

  /**
   * Get employee income tax.
   * @return {string} Employee income tax formatted to AUD currency.
   */
  get incomeTax() {
    return formatCurrency(this._incomeTax);
  }

  /**
   * Get employee net income.
   * @return {string} Employee net income formatted to AUD currency.
   */
  get netIncome() {
    return formatCurrency(this._netIncome);
  }

  /**
   * Get employee super total.
   * @return {string} Employee super total formatted to AUD currency.
   */
  get superTotal() {
    const superCalc = this._superRate / 100;
    return formatCurrency(this._grossIncome * superCalc);
  }

  /**
   * Get employee pay.
   * @return {string} Employee pay for the month, formatted to AUD currency.
   */
  get pay() {
    return formatCurrency(this._netIncome - this._superTotal);
  }

  /**
   * Get total tax amount for employee, given taxable amount,
   * tax rate and base tax amount.
   * @static
   * @param {number} Taxable amount of employee
   * @returns [{function}, {function}, {number}] Total tax amount for employee
   */
  static __totalTaxAmount(taxable) {
    return taxRate => baseTaxAmount => baseTaxAmount + taxable * taxRate;
  }

  /**
   * Determine pay period (currently monthly) of given date
   * @param {date} payPeriod Date object of current pay period
   * @return {string} Formatted string of pay period from start of
   * month to end of month
   */
  _determinePayPeriod(payPeriod) {
    const payPeriodMoment = moment(payPeriod);
    if (payPeriodMoment.isValid()) {
      const dateFormat = 'DD MMMM';
      const endPayPeriodMoment = payPeriodMoment.clone();
      payPeriodMoment.startOf('month');
      endPayPeriodMoment.endOf('month');

      this._payPeriod = `${payPeriodMoment.format(
        dateFormat
      )} to ${endPayPeriodMoment.format(dateFormat)}`;
    }
  }

  /**
   * Calculate gross based on annual salary / 12 months
   * @return {number} Gross income calculated
   */
  _calculateGross() {
    let grossIncome = 0;

    try {
      grossIncome = this._annualSalary / 12;
    } catch (e) {
      PayslipCalculator.logError(
        '_calculateGross',
        `Salary: ${this._annualSalary}`,
        e
      );
    }

    return grossIncome;
  }

  /**
   * Calculate income tax based on tax limit
   * Method will first reverse the provided TAXABLE_INCOME
   * values (so we can traverse in reverse order), then map over
   * this reversed array to find the correct taxable income based
   * on the employees annual salary
   * @return {number} Income tax based on employee salary and taxable
   * income rules
   */
  _calculateIncomeTax() {
    let totalTax = 0;

    // Avoid mutation/side effect
    const reversedTaxRates = [...TAXABLE_INCOME.default].reverse();

    reversedTaxRates.some(tax => {
      if (this._annualSalary > tax.limit) {
        try {
          const taxable = PayslipCalculator.__totalTaxAmount(
            this._annualSalary - tax.limit
          );
          totalTax = taxable(tax.taxRate)(tax.baseTaxAmount);
        } catch (e) {
          PayslipCalculator.logError(
            'Could not calculate income tax',
            `this._annualSalary: ${this._annualSalary}`,
            `tax object: ${tax}`,
            e
          );
        }
        return true;
      }

      return false;
    });

    return totalTax > 0 ? totalTax / 12 : 0;
  }

  /**
   * Calculates net income based on gross income and income tax
   * @return {number} Net income total
   */
  _calculateNetIncome() {
    return this._grossIncome - this._incomeTax;
  }

  /**
   * Calculates Super based on gross income and super rate
   * @return {number} Super value
   */
  _calculateSuperTotal() {
    const superCalc = this._superRate / 100;
    return this._grossIncome * superCalc;
  }

  /**
   * Public method to generate payslip based on provided variables
   * @return {void}
   * @public
   */
  generate() {
    this._grossIncome = this._calculateGross();
    this._incomeTax = this._calculateIncomeTax();

    this._netIncome = this._calculateNetIncome();
    this._superTotal = this._calculateSuperTotal();
  }
}

export default PayslipCalculator;
