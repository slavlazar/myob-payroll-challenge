import React from 'react';
import { shallow } from 'enzyme';

import Field from '../Form/Field';

describe('Components: Shared: UI: Form Field', () => {
  it('renders correctly', () => {
    const wrapped = shallow(<Field />);
    expect(wrapped).toMatchSnapshot();
  });

  it('should render a label', () => {
    const label = 'Test label';
    const wrapped = shallow(<Field label={label} />);
    expect(wrapped.find('.form-label').text()).toEqual(label);
  });

  it('should display an error message', () => {
    const errorMessage = 'Error Message!';
    const wrapped = shallow(<Field errorMessage={errorMessage} />);
    expect(wrapped.find('.form-error-message').text()).toEqual(errorMessage);
  });

  it('should render passed in component', () => {
    const component = () => <div>Testing</div>;
    const wrapped = shallow(<Field component={component} />);
    expect(wrapped.find(component)).toHaveLength(1);
  });
});
