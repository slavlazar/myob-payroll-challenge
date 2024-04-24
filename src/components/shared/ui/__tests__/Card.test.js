import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card/Card';
import CardStyle from '../Card/Card.style';
import { renderWithTheme } from '../../../../utils/style-utils';

const shallowWrapper = (props = {}) => {
  const allProps = {
    children: 'Testing',
    ...props,
  };

  return shallow(<Card {...allProps} />);
};

describe('Components: Shared: UI: Card', () => {
  describe('Card', () => {
    it('renders correctly', () => {
      const wrapped = shallowWrapper();
      expect(wrapped).toMatchSnapshot();
    });

    it('should render a spinner if loading', () => {
      const wrapped = shallowWrapper();
      expect(wrapped.find('.card-spinner')).not.toHaveLength(1);
      wrapped.setProps({ loading: true });
      expect(wrapped.find('.card-spinner')).toHaveLength(1);
    });
  });

  describe('CardStyle', () => {
    it('renders correctly', () => {
      const wrapped = renderWithTheme(<CardStyle />);
      expect(wrapped).toMatchSnapshot();
    });
  });
});
