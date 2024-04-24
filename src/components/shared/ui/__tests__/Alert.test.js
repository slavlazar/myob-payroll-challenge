import React from 'react';
import { shallow } from 'enzyme';

import Alert from '../Alert/Alert';
import { Alert as AlertStyle } from '../Alert/Alert.style';
import { renderWithTheme } from '../../../../utils/style-utils';

import theme from '../../../../theme';

const shallowWrapper = (props = {}) => {
  const allProps = {
    children: 'Testing',
    ...props,
  };

  return shallow(<Alert {...allProps} />);
};

describe('Components: Shared: UI: Alert', () => {
  describe('Alert', () => {
    it('renders correctly', () => {
      const wrapped = shallowWrapper();
      expect(wrapped).toMatchSnapshot();
    });

    it('renders a title', () => {
      const wrapped = shallowWrapper({ title: 'Test Title' });
      const header = wrapped.find('.alert-header');
      expect(header).toBeDefined();
      expect(header.text()).toEqual('Test Title');
    });
  });

  describe('AlertStyle', () => {
    it('renders correctly', () => {
      const wrapped = renderWithTheme(<AlertStyle />);
      expect(wrapped).toMatchSnapshot();
    });

    it('should render the correct font size', () => {
      const wrapped = renderWithTheme(<AlertStyle size="small" />);
      expect(wrapped).toHaveStyleRule('font-size', theme.font.size.small);
    });

    it('should render the correct background colour', () => {
      const wrapped = renderWithTheme(<AlertStyle type="success" />);
      expect(wrapped).toHaveStyleRule(
        'background-color',
        theme.colour.alert.success
      );
    });
  });
});
