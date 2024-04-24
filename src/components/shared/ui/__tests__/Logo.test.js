import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo/Logo';

describe('Components: Shared: UI: Logo', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<Logo />);
    expect(wrapped).toMatchSnapshot();
  });

  it('should display the correct alt on rendered logo', () => {
    const wrapped = shallow(<Logo alt="Testing" />);
    expect(wrapped.find('title').text()).toEqual('Testing');
  });
});
