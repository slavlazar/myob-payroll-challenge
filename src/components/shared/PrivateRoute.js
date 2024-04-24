import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect as RouterRedirect } from 'react-router-dom';

import { LOGIN_URL } from '../../utils/constants';
import { isLoggedInSelector } from '../../selectors/auth';

const Redirect = ({ location, pathname }) => (
  <RouterRedirect to={{ pathname, state: { from: location } }} />
);

Redirect.propTypes = {
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  pathname: PropTypes.string.isRequired,
};

Redirect.defaultProps = {
  location: '/',
};

/**
 * Component that will either redirect to loginPath if user is not logged in,
 * OR displays the protected component if user is logged in
 * @param {object} Private route props
 */
export const PrivateRouteComponent = ({
  component: Component,
  isLoggedIn,
  loginPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect pathname={loginPath} {...props} />
      )
    }
  />
);

PrivateRouteComponent.propTypes = {
  /** Component to render if user is logged in */
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  /** Boolean of user being logged in or not */
  isLoggedIn: PropTypes.bool.isRequired,
  loginPath: PropTypes.string,
};

PrivateRouteComponent.defaultProps = {
  loginPath: LOGIN_URL,
};

const mapStateToProps = state => {
  const { isLoggedIn } = isLoggedInSelector(state);

  return { isLoggedIn };
};

export default connect(mapStateToProps)(PrivateRouteComponent);
