import React from 'react';

import HeaderStyle from './Header.style';
import { Nav, LinearGradientLine } from '../../shared/ui';

const links = [
  {
    url: '/logout',
    label: 'Logout',
  },
];

/**
 * Header component for our Payslip screens
 */
const Header = () => (
  <HeaderStyle>
    <LinearGradientLine />
    <Nav links={links} />
  </HeaderStyle>
);

export default Header;
