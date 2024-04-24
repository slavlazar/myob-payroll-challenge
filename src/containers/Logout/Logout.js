import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions/auth';
import Logout from '../../components/Logout';

const { doLogout } = actions;

/**
 * Logout container to handle connection to Redux store
 * and handle Logout component actions
 * @param {object} Params from Redux store of Auth
 */
const LogoutContainer = ({ dispatchDoLogout }) => (
  <Logout doLogout={dispatchDoLogout} />
);

LogoutContainer.propTypes = {
  /** Function to logout from store action creators */
  dispatchDoLogout: PropTypes.func.isRequired,
};

export default connect(
  null,
  { dispatchDoLogout: doLogout }
)(LogoutContainer);
