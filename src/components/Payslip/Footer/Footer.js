import React from 'react';

import Wrapper, { CopyrightWrapper, CopyrightText } from './Footer.style';
import { Container, Nav, LinearGradientLine } from '../../shared/ui';

const links = [
  {
    url: '/link1',
    label: 'Link 1',
  },
  {
    url: '/link2',
    label: 'Link 2',
  },
  {
    url: '/link3',
    label: 'Link 3',
  },
];

/**
 * Footer component for our Payslip screens
 */
const Footer = () => (
  <Wrapper>
    <Nav links={links} position="bottom" />
    <Container>
      <CopyrightWrapper>
        <CopyrightText>Excepteur sint occaecat</CopyrightText>
        <CopyrightText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </CopyrightText>
      </CopyrightWrapper>
    </Container>
    <LinearGradientLine />
  </Wrapper>
);

export default Footer;
