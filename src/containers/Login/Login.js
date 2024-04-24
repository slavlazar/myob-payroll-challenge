import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import actions from '../../actions/auth';
import { isLoggedInSelector } from '../../selectors/auth';
import Login from '../../components/Login';

const { doLogin } = actions;

/**
 * Login container to handle connection to redux store
 * and handle Login component actions
 * @param {object} Params from Redux store of Auth
 */
export const LoginContainer = ({
  Auth: { loading, isLoggedIn, error },
  dispatchDoLogin,
}) => {
  const handleLogin = ({ username: email, password }) => {
    dispatchDoLogin({ email, password });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return <Login loading={loading} handleLogin={handleLogin} error={error} />;
};

LoginContainer.propTypes = {
  /** Auth state from redux store */
  Auth: PropTypes.shape({
    loading: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  /** Function to login from store action creators */
  dispatchDoLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    Auth: {
      ...isLoggedInSelector(state),
    },
  };
};

export default connect(
  mapStateToProps,
  {
    dispatchDoLogin: doLogin,
  }
)(LoginContainer);
