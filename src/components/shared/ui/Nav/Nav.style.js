import styled from 'styled-components';

import { media } from '../../../../utils/style-utils';

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${props => (props.showLogo ? 'space-between' : 'flex-end')};
  padding: ${props =>
    props.navPosition === 'bottom' ? '1.4rem 0' : '0.9rem 0'};
`;

export const LogoContainer = styled.div`
  width: ${props => props.logoWidth || '70px'};
  display: block;
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  align-items: center;

  li {
    display: inline-block;
    text-align: left;

    &:not(:first-child) {
      margin-top: 0.8rem;
    }

    a {
      &,
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-family: inherit;
        padding: 0.8rem 1.2rem;
        border-radius: 0.4rem;
        color: ${props => props.theme.colour.text};
        font-size: ${props => props.theme.font.size.small};
        transition: all 0.2s;
      }

      &:hover,
      &:focus {
        background-color: ${props => props.theme.colour.primary};
        color: #ffffff;
      }
    }
  }

  ${media.tablet`
    flex-direction: row;
    
    li {
      &:not(:first-child) {
        margin-top: 0;
        margin-left: 10rem;
      }
    }
  `};
`;

export const SkipNavigationLink = styled.a`
  position: absolute;
  top: -1000px;
  left: -1000px;
  height: 1px;
  width: 1px;
  text-align: left;
  overflow: hidden;

  &:active,
  &:focus,
  &:hover {
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    overflow: visible;
  }
`;

export const NavContainer = styled.nav`
  background-color: #ffffff;
  position: relative;
  border-bottom: ${props => `1px solid ${props.theme.colour.border}`};

  ${({ navPosition, theme }) =>
    navPosition === 'bottom' &&
    `
    border-bottom: none;
    border-top: 1px solid ${theme.colour.border}; 
  `}
`;
