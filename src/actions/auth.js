/**
 * Redux actions and actions creators for Auth state
 */
import auth from '../utils/auth';

const ENTITY = '@@MYOB_AUTH';

const actions = {
  LOGIN_START: `${ENTITY}/LOGIN_START`,
  LOGIN_SUCCESS: `${ENTITY}/LOGIN_SUCCESS`,
  LOGIN_ERROR: `${ENTITY}/LOGIN_ERROR`,
  LOGOUT_SUCCESS: `${ENTITY}/LOGOUT_SUCCESS`,
  doLogin: payload => async dispatch => {
    dispatch({ type: actions.LOGIN_START });

    try {
      const loginState = await auth.login(payload);

      dispatch({ type: actions.LOGIN_SUCCESS, payload: loginState });
    } catch (error) {
      let errorMsg;
      if (error.isAxiosError) {
        errorMsg = error.response.data.error.message;
      } else {
        errorMsg = error.response.data.error
          ? error.response.data.error
          : error;
      }

      dispatch({ type: actions.LOGIN_ERROR, error: errorMsg });
    }
  },
  doLogout: () => ({
    type: actions.LOGOUT_SUCCESS,
  }),
};

export default actions;
