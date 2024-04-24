import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  NavContainer,
  LogoContainer,
  Inner,
  LinksContainer,
  SkipNavigationLink,
} from './Nav.style';
import Logo from '../Logo/Logo';
import Container from '../Container';

/**
 * Renders the MYOB logo
 */
const generateLogo = () => (
  <LogoContainer>
    <Link to="/">
      <Logo />
    </Link>
  </LogoContainer>
);

/**
 * Generates nav links with React Router
 * @param {array} links Renders React Router Dom links
 */
const generateNavLinks = links => (
  <LinksContainer className="nav-links-container">
    {links.map(link => (
      <li key={link.label}>
        <Link to={link.url}>{link.label}</Link>
      </li>
    ))}
  </LinksContainer>
);

/**
 * Renders a nav with position set to top or bottom based on
 * props
 * @param {object} Nav props
 */
const Nav = ({ showLogo, links, position }) => (
  <NavContainer navPosition={position}>
    <Container>
      <Inner showLogo={showLogo} navPosition={position}>
        {showLogo && generateLogo()}
        {generateNavLinks(links)}
      </Inner>
      {position === 'top' && (
        <SkipNavigationLink id="header-nav-skip-navigation" href="#main">
          Skip to content
        </SkipNavigationLink>
      )}
    </Container>
  </NavContainer>
);

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  showLogo: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom']),
};

Nav.defaultProps = {
  links: [],
  showLogo: true,
  position: 'top',
};

export default Nav;
