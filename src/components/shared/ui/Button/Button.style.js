import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  text-decoration: none;
  border-radius: 0.4rem;
  transition: all 0.2s;
  position: relative;
  
  padding: 1rem 1.6rem;
  font-size: ${props => props.theme.font.size.medium};

  ${({ buttonSize, theme }) =>
    buttonSize === 'small' &&
    `
    padding: .6rem 1rem;
    font-size: ${theme.font.size.small};
  `}
  ${({ colour }) =>
    colour === 'secondary' &&
    `
    &,
    &[disabled] {
      color: #2e3e4f;
      border: 2px solid rgba(46,62,79,.6);
    }

    &:hover,
    &:active,
    &:focus {
      color: #35485b;
      border-color: #2e3e4f;
    }
  `}
  ${({ colour, theme }) =>
    colour === 'primary' &&
    `
    &,
    &[disabled] {
      color: #ffffff;
      border: 2px solid transparent;
      background-color: ${theme.colour.buttonPrimaryBackground};
    }

    &:hover,
    &:active,
    &:focus {
      background-color: ${darken(0.05, theme.colour.buttonPrimaryBackground)};
    }
  `}
  cursor: pointer;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};
  font-family: ${props => props.theme.font.family.heading};
  outline: none;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & + button,
  & + a[download] {
    margin-left: .4rem;
  }
`;

export default Button;
