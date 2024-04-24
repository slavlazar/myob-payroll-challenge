import React from 'react';
import PropTypes from 'prop-types';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { Heading, Button, Table, Flex, Card } from '../../shared/ui';
import PayslipPDF from './PayslipPDF';
import PayslipDisplay from './PayslipDisplay';

/**
 * Generated Payslip component displaying all values generated from action
 * @param {object} Payslip object of values and handleReset action
 */
const GeneratedPayslip = ({ payslip, handleReset }) => (
  <Card>
    <Heading id="payslip-generated-name" type="h3">
      Pay Slip for {payslip.name}
    </Heading>
    <Table.Responsive>
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH>Item</Table.TH>
            <Table.TH>Employee Details</Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <PayslipDisplay data={payslip}>
            {({ key, value, _rowKey }) => (
              <Table.TR key={key} className="payslip-generated-row">
                <Table.TD
                  className="payslip-generated-row--key"
                  data-key={_rowKey}
                >
                  {key}
                </Table.TD>
                <Table.TD className="payslip-generated-row--value">
                  {value}
                </Table.TD>
              </Table.TR>
            )}
          </PayslipDisplay>
        </Table.TBody>
      </Table>
    </Table.Responsive>
    <Flex justify="space-between" align="center">
      <Button
        id="payslip-generated-reset-form"
        type="button"
        colour="secondary"
        size="small"
        onClick={handleReset}
        aria-label="Start over and generate new payslip"
      >
        Start over
      </Button>
      <PDFDownloadLink
        id="payslip-generated-pdf-download"
        document={<PayslipPDF payslip={payslip} />}
        fileName={`MYOB_Payslip_${payslip.payPeriod.replace(/\s/g, '_')}.pdf`}
      >
        {({ loading }) =>
          loading ? null : (
            <Button
              size="small"
              type="button"
              colour="primary"
              aria-label="Download generated payslip now"
            >
              Download now
            </Button>
          )
        }
      </PDFDownloadLink>
    </Flex>
  </Card>
);

GeneratedPayslip.propTypes = {
  /** Payslip object containing all generated data for payslip */
  payslip: PropTypes.shape({
    /** Full name of employee */
    name: PropTypes.string.isRequired,
    /** Pay period of employee */
    payPeriod: PropTypes.string.isRequired,
    /** Annual salary of employee */
    annualSalary: PropTypes.string.isRequired,
    /** Calculated Gross Income of employee */
    grossIncome: PropTypes.string.isRequired,
    /** Calculated Income Tax of employee */
    incomeTax: PropTypes.string.isRequired,
    /** Calculated Net Income of employee */
    netIncome: PropTypes.string.isRequired,
    /** Calculated Super Total of employee */
    superTotal: PropTypes.string.isRequired,
    /** Calculated Pay of employee */
    pay: PropTypes.string.isRequired,
    payFrequency: PropTypes.string,
  }).isRequired,
  /** Handle Reset function to go back to Generator screen */
  handleReset: PropTypes.func.isRequired,
};

GeneratedPayslip.defaultProps = {};

export default GeneratedPayslip;
