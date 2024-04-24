import { createSelector } from 'reselect';

const authSelector = state => state.Auth;

const isLoggedInSelector = createSelector(
  authSelector,
  auth => ({
    ...auth,
    isLoggedIn: auth.token !== null && auth.token !== 'undefined',
  })
);

export { authSelector, isLoggedInSelector };
