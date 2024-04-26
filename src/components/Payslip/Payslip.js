import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Generator from './Generator';
import Generated from './Generated';
import Footer from './Footer';

import { Container, Heading } from '../shared/ui';
import Wrapper, { MainBody, BodyWrapper } from './Payslip.style';

/**
 * Payslip component rendering our payslip view with conditional rendering
 * of generator form (payslip create form) or generated screen
 * @param {object} Object containing payslip data along with submit and
 * reset actions from our Payslip store
 */
const Payslip = ({ payslip, handleSubmit, handleReset }) => {
  const { loading, error, result } = payslip;

  return (
    <Wrapper>
      <Header />
      <MainBody id="main">
        <BodyWrapper>
          <Container>
            <Heading>Pay Slip Generator</Heading>{' '}
            {result === null || !result ? (
              <Generator
                handleSubmit={handleSubmit}
                loading={loading}
                error={error}
              />
            ) : (
              <Generated payslip={payslip} handleReset={handleReset} />
            )}
          </Container>
        </BodyWrapper>
      </MainBody>
      <Footer />
    </Wrapper>
  );
};

Payslip.propTypes = {
  /** Payslip object with employee payslip data generated */
  payslip: PropTypes.object.isRequired,
  /** Function to handle submit of payslip */
  handleSubmit: PropTypes.func.isRequired,
  /** Function to handle reset of generate payslip to generate new one */
  handleReset: PropTypes.func.isRequired,
};

export default Payslip;
