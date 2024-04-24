import reducer from '../auth';
import actions from '../../actions/auth';

describe('Reducers: Auth', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      token: null,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const payload = { idToken: 'testToken' };
    const action = {
      type: actions.LOGIN_SUCCESS,
      payload,
    };

    expect(reducer({}, action)).toEqual({
      token: payload.idToken,
      loading: false,
      error: null,
    });
  });

  it('should handle LOGIN_ERROR', () => {
    const error = 'Failed to login';
    const action = {
      type: actions.LOGIN_ERROR,
      error,
    };

    expect(reducer({}, action)).toEqual({
      loading: false,
      error,
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    const initialState = {
      loading: false,
      error: null,
      token: 'testToken',
    };
    const action = {
      type: actions.LOGOUT_SUCCESS,
    };

    expect(reducer(initialState, action)).toEqual({
      loading: false,
      error: null,
      token: null,
    });
  });
});
