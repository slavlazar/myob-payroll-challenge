import React from 'react';
import PropTypes from 'prop-types';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';

import PayslipDisplay from './PayslipDisplay';
import theme from '../../../theme';
import logo from '../../../assets/img/MYOB_logo_RGB_1475x779.png';

Font.register({
  family: 'NeutroMYOB',
  fonts: [
    {
      src: 'https://assets.digital.myob.com/fonts/NeutroMYOB-Regular.woff',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    {
      src: 'https://assets.digital.myob.com/fonts/NeutroMYOB-Medium.woff',
      fontStyle: 'normal',
      fontWeight: 600,
    },
    {
      src: 'https://assets.digital.myob.com/fonts/NeutroMYOB-Demi.woff',
      fontStyle: 'normal',
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: theme.colour.background,
  },
  logo: {
    width: 120,
    alignSelf: 'flex-end',
  },
  container: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    padding: 20,
  },
  heading: {
    fontFamily: 'NeutroMYOB',
    fontSize: 17,
    fontWeight: 600,
    colour: theme.colour.heading,
    paddingBottom: 16,
  },
  tableContainer: {
    marginVertical: 10,
    flexDirection: 'column',
    flexGrow: 1,
  },
  viewRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#DCDFE1',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewRowHeader: {
    borderBottomWidth: 2,
  },
  tableHeader: {
    fontWeight: 600,
  },
  item: {
    alignSelf: 'flex-start',
    width: '40%',
  },
  detail: {
    alignSelf: 'flex-end',
    maxWidth: '55%',
  },
  text: {
    fontFamily: 'NeutroMYOB',
    fontSize: 14,
    fontWeight: 400,
    color: theme.colour.text,
  },
});

/**
 * Generates a PDF version of payslip data
 * @param {object} Payslip data generated
 * @exports pdf
 */
const PayslipPdf = ({ payslip }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={logo} style={styles.logo} />
      <View style={styles.container}>
        <Text id="payslip-pdf-name" style={styles.heading}>
          Pay Slip for {payslip.name}
        </Text>
        <View style={styles.tableContainer}>
          <View style={[styles.viewRow, styles.viewRowHeader]}>
            <Text style={[styles.item, styles.text, styles.tableHeader]}>
              Item
            </Text>
            <Text style={[styles.detail, styles.text, styles.tableHeader]}>
              Employee Details
            </Text>
          </View>
          <PayslipDisplay data={payslip}>
            {({ key, value, _rowKey }) => (
              <View
                style={styles.viewRow}
                key={key}
                className="payslip-generated-row"
              >
                <Text
                  style={[styles.text, styles.item]}
                  className="payslip-generated-row--key"
                  data-key={_rowKey}
                >
                  {key}
                </Text>
                <Text
                  style={[styles.text, styles.detail]}
                  className="payslip-generated-row--value"
                >
                  {value}
                </Text>
              </View>
            )}
          </PayslipDisplay>
        </View>
      </View>
    </Page>
  </Document>
);

PayslipPdf.propTypes = {
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
};

export default PayslipPdf;
