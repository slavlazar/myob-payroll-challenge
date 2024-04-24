import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import { NavContainer, Inner } from '../Nav/Nav.style';
import { renderWithTheme } from '../../../../utils/style-utils';

import theme from '../../../../theme';

describe('Components: Shared: UI: Nav', () => {
  describe('Nav', () => {
    it('renders correctly', () => {
      const wrapped = shallow(<Nav />);
      expect(wrapped).toMatchSnapshot();
    });

    it('should render a logo', () => {
      const wrapped = shallow(<Nav showLogo={false} />);
      expect(wrapped.find(Logo)).not.toHaveLength(1);
      wrapped.setProps({ showLogo: true });
      expect(wrapped.find(Logo)).toHaveLength(1);
    });

    it('should generate a link', () => {
      const links = [
        {
          url: '/test',
          label: 'Test',
        },
      ];

      const wrapped = shallow(<Nav links={links} />);
      const linksContainer = wrapped.find('.nav-links-container');
      const link = linksContainer.find(Link);
      expect(link).toHaveLength(1);
      expect(link.prop('to')).toEqual('/test');
    });

    it('should render a skip navigation link for the top nav', () => {
      const wrapped = shallow(<Nav position="bottom" />);
      expect(wrapped.find('#header-nav-skip-navigation')).not.toHaveLength(1);
      wrapped.setProps({ position: 'top' });
      expect(wrapped.find('#header-nav-skip-navigation')).toHaveLength(1);
    });
  });

  describe('NavStyle', () => {
    it('renders NavContainer correctly', () => {
      const wrapped = renderWithTheme(<NavContainer />);
      expect(wrapped).toMatchSnapshot();
    });

    it('renders Inner correctly', () => {
      const wrapped = renderWithTheme(<Inner />);
      expect(wrapped).toMatchSnapshot();
    });

    it('should render a bottom styled container', () => {
      const wrapped = renderWithTheme(<NavContainer navPosition="bottom" />);
      expect(wrapped).toHaveStyleRule('border-bottom', 'none');
      expect(wrapped).toHaveStyleRule(
        'border-top',
        `1px solid ${theme.colour.border}`
      );
    });

    it('should justify content accordingly with no logo', () => {
      const wrapped = renderWithTheme(<Inner showLogo={false} />);
      expect(wrapped).not.toHaveStyleRule('justify-content', 'space-between');
      expect(wrapped).toHaveStyleRule('justify-content', 'flex-end');
    });
  });
});
