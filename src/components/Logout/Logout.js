import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { LOGIN_URL } from '../../utils/constants';

/**
 * Logout component that simply calls *doLogout()* action on
 * component mount
 * @param {object} Logout component params from our Auth state
 */
const Logout = ({ doLogout }) => {
  useEffect(() => {
    doLogout();
  }, []);

  // Don't render a view
  return <Redirect to={LOGIN_URL} />;
};

Logout.propTypes = {
  /** Function to handle logout action */
  doLogout: PropTypes.func.isRequired,
};

export default Logout;
