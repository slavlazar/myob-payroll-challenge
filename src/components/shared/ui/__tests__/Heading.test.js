import React from 'react';
import { shallow } from 'enzyme';

import Heading from '../Heading/Heading';
import { H1, H2 } from '../Heading/Heading.style';
import { renderWithTheme } from '../../../../utils/style-utils';

const shallowWrapper = (props = {}) => {
  const allProps = {
    children: 'Testing',
    ...props,
  };

  return shallow(<Heading {...allProps} />);
};

describe('Components: Shared: UI: Heading', () => {
  describe('Heading', () => {
    it('renders correctly', () => {
      const wrapped = shallowWrapper();
      expect(wrapped).toMatchSnapshot();
    });

    it('should render a h2', () => {
      const children = 'Blah!';
      const wrapped = shallowWrapper({ type: 'h2', children });
      expect(wrapped.find(H1)).not.toHaveLength(1);
      const H2Node = wrapped.find(H2);
      expect(H2Node).toHaveLength(1);
      expect(H2Node.text()).toEqual(children);
    });
  });

  describe('HeadingStyle', () => {
    it('renders correctly', () => {
      const wrapped = renderWithTheme(<H1 />);
      expect(wrapped).toMatchSnapshot();
    });

    it('should render with no margin', () => {
      const wrapped = renderWithTheme(<H1 noMargin />);
      expect(wrapped).toHaveStyleRule('margin-bottom', '0');
    });

    it('should center align the text', () => {
      const wrapped = renderWithTheme(<H2 textAlign="center" />);
      expect(wrapped).toHaveStyleRule('text-align', 'center');
    });
  });
});
