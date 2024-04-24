import styled from 'styled-components';
import { darken } from 'polished';

const shadeColourType = ({ shadeValue, type, theme }) => {
  switch (type) {
    case 'danger':
      return darken(shadeValue, theme.colour.alert.danger);
    case 'success':
      return darken(shadeValue, theme.colour.alert.success);
    default:
      return darken(shadeValue, theme.colour.alert.default);
  }
};

export const Header = styled.div`
  position: relative;
  padding: 0.75em 1em;
  line-height: ${props => props.theme.lineHeight.heading};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${props => props.theme.font.weight.bold};
  color: #ffffff;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${props =>
    shadeColourType({ shadeValue: 0.5, type: props.type, theme: props.theme })};
`;

export const Body = styled.div`
  padding: 1.25em 1.5em;
  border-style: solid;
  border-color: ${props =>
    shadeColourType({ shadeValue: 0.4, type: props.type, theme: props.theme })};
  color: ${props =>
    shadeColourType({ shadeValue: 0.6, type: props.type, theme: props.theme })};
  border-width: ${props => (props.title ? 0 : '0 0 0 0.4rem')};
  border-radius: ${props => (props.title ? '0 0 .4rem .4rem' : '0.4rem')};
`;

export const Alert = styled.article`
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return props.theme.font.size.small;
      case 'large':
        return props.theme.font.size.large;
      default:
        return props.theme.font.size.medium;
    }
  }};
  background-color: ${props => {
    switch (props.type) {
      case 'danger':
        return props.theme.colour.alert.danger;
      case 'success':
        return props.theme.colour.alert.success;
      default:
        return props.theme.colour.alert.default;
    }
  }};
  border-radius: 0.4rem;
  margin-bottom: 2rem;
`;
