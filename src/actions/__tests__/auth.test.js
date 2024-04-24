import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import actions from '../auth';
import { API_LOGIN_ENDPOINT } from '../../utils/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions: Auth', () => {
  let mock;
  let store;

  beforeAll(() => {
    mock = new MockAdapter(axios);
    store = mockStore({ Auth: { token: '' } });
  });

  afterEach(() => {
    mock.resetHandlers();
    store.clearActions();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should create an action and handles login successfully', () => {
    const expectedPayload = { token: 'Test' };

    mock.onPost(API_LOGIN_ENDPOINT).reply(() => [200, expectedPayload]);

    const email = 'test@test.com';
    const password = 'test';

    const expectedActions = [
      {
        type: actions.LOGIN_START,
      },
      {
        type: actions.LOGIN_SUCCESS,
        payload: expectedPayload,
      },
    ];

    return store.dispatch(actions.doLogin({ email, password })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action and handle login with error', () => {
    const expectedPayload = {
      error: 'Error: Request failed with status code 400',
    };
    mock.onPost(API_LOGIN_ENDPOINT).reply(() => [400, expectedPayload]);

    const email = 'blah@blah.com';
    const password = 'blah';

    const expectedActions = [
      {
        type: actions.LOGIN_START,
      },
      {
        type: actions.LOGIN_ERROR,
        ...expectedPayload,
      },
    ];

    return store.dispatch(actions.doLogin({ email, password })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action for logout', () => {
    const expectedActions = [
      {
        type: actions.LOGOUT_SUCCESS,
      },
    ];

    store.dispatch(actions.doLogout());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
