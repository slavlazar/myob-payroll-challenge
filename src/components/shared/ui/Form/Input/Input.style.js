import styled from 'styled-components';
import { darken, lighten } from 'polished';

const Input = styled.input`
  width: 100%;
  border: none;
  box-sizing: border-box;
  outline: none;
  font-size: ${props => props.theme.font.size.medium};
  padding: 1rem 1.6rem;
  border-radius: 4px;
  background-color: ${props =>
    props.error ? lighten(0.52, props.theme.colour.secondary) : '#ffffff'};
  display: block;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.error
      ? darken(0.001, props.theme.colour.secondary)
      : props.theme.colour.border};

  &:focus {
    outline: none;
    -webkit-box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
    border-color: ${props =>
      props.error ? props.theme.colour.secondary : props.theme.colour.primary};
  }
`;

export default Input;
