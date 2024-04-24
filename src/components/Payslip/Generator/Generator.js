import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import { Alert, Card } from '../../shared/ui';
import GeneratorForm, { GeneratorSchema } from './Generator.form';
import { generateInitialValuesFromSchema } from '../../../utils/helpers';

/**
 * Payslip Generator component displaying our view with payslip generate form
 * generated by Formik
 * @param {object} Generator component params from our Payslip state
 */
const Generator = ({ handleSubmit, loading, error }) => (
  <Card loading={loading}>
    {error && (
      <Alert
        className="payslip-generator-error"
        type="danger"
        title="Error!"
        size="small"
      >
        {error}
      </Alert>
    )}
    <Formik
      component={GeneratorForm}
      onSubmit={handleSubmit}
      validationSchema={GeneratorSchema}
      initialValues={generateInitialValuesFromSchema(
        Object.keys(GeneratorSchema.fields)
      )}
    />
  </Card>
);

Generator.propTypes = {
  /** Function to handle payslip generation */
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

Generator.defaultProps = {
  loading: false,
  error: null,
};

export default Generator;
