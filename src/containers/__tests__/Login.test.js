import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import { LoginContainer } from '../Login/Login';

describe('Containers: Login', () => {
  it('should redirect the user to main screen if user is logged in', () => {
    const wrapper = shallow(
      <LoginContainer Auth={{ isLoggedIn: true }} dispatchDoLogin={() => {}} />
    );

    expect(wrapper.find(Redirect).exists()).toBeTruthy();
  });
});
