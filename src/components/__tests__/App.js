import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Component: App', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<App />);

    expect(wrapped).toMatchSnapshot();
  });
});
