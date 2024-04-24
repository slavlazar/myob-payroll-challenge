import axios from 'axios';

import { API_LOGIN_ENDPOINT } from './constants';

/**
 * Login method that calls upon our API endpoint to log the user in
 * @param {object} Object of email and password keys to log user in with
 * @async
 */
const login = async ({ email, password }) => {
  const { data: userInfo } = await axios.post(API_LOGIN_ENDPOINT, {
    email,
    password,
  });

  return userInfo;
};

export default {
  login,
};
