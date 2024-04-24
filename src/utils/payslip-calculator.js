/**
 * Payslip calculator functions to generate payslip data
 * This was my original implementation, however I opted to
 * go with a class based solution instead.
 * I've left this in here as I wrote unit tests and this is also a working
 * solution.
 * @see ./payslip-calculator.class.js
 * @deprecated using class based solution
 */

import * as TAXABLE_INCOME from '../config/tax-rates.json';

import { logError as logErrorGroup, round } from './helpers';

const logError = logErrorGroup('Utils: Payslip Calculator');

const grossIncome = annualSalary => {
  try {
    return round(annualSalary / 12);
  } catch (e) {
    logError('Could not calculate gross income', `Salary: ${annualSalary}`, e);
  }

  return 0;
};

const totalTaxAmount = taxable => taxRate => baseTaxAmount =>
  baseTaxAmount + taxable * taxRate;

const incomeTax = taxableIncome => {
  let totalTax = 0;

  // Avoid mutation/side effect
  const reversedTaxRates = [...TAXABLE_INCOME.default].reverse();

  reversedTaxRates.some(tax => {
    if (taxableIncome > tax.limit) {
      try {
        const taxable = totalTaxAmount(taxableIncome - tax.limit);
        totalTax = taxable(tax.taxRate)(tax.baseTaxAmount);
      } catch (e) {
        logError(
          'Could not calculate income tax',
          `taxableIncome: ${taxableIncome}`,
          `tax object: ${tax}`,
          e
        );
      }
      return true;
    }

    return false;
  });

  return totalTax > 0 ? round(totalTax / 12) : 0;
};

const netIncome = gross => tax => {
  try {
    return round(gross - tax);
  } catch (e) {
    logError(
      'Could not calculate net income',
      `gross: ${gross}`,
      `tax: ${tax}`,
      e
    );
  }

  return 0;
};

const superTotal = gross => superRate => {
  try {
    const superCalc = superRate / 100;
    return round(gross * superCalc);
  } catch (e) {
    logError(
      'Could not calculate super total',
      `gross: ${gross}`,
      `superRate: ${superRate}`,
      e
    );
  }

  return 0;
};

const pay = netValue => superValue => {
  try {
    const payTotal = netValue - superValue;
    return round(payTotal);
  } catch (e) {
    logError(
      'Could not calculate pay',
      `netValue: ${netValue}`,
      `superValue: ${superValue}`,
      e
    );
  }

  return 0;
};

export default {
  grossIncome,
  incomeTax,
  netIncome,
  superTotal,
  pay,
};
