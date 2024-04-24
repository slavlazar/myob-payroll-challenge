import actions from '../actions/auth';

export const initialState = {
  loading: false,
  error: null,
  token: null,
};

/**
 *
 * @param {object} Initial state of Auth
 * @param {object} Action object
 */
const reducer = (state = initialState, action) => {
  const { payload, error } = action;

  switch (action.type) {
    case actions.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.idToken,
        loading: false,
        error: null,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error,
      };
    case actions.LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
