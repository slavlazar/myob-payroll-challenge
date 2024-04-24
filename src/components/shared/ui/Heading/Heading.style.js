import styled, { css } from 'styled-components';

const baseStyling = css`
  color: ${props => props.theme.colour.heading};
  font-family: ${props => props.theme.font.family.heading};
  line-height: ${props => props.theme.lineHeight.heading};
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  margin-top: 0;
  margin-bottom: ${props => (props.noMargin ? '0' : '2rem')};
  text-align: ${props => {
    switch (props.textAlign) {
      case 'center':
        return 'center';
      case 'right':
        return 'right';
      default:
        return 'left';
    }
  }};
  max-width: 100%;
`;

export const H1 = styled.h1`
  font-size: ${props => props.theme.font.size.xlarge};
  ${baseStyling}
`;

export const H2 = styled.h2`
  font-size: ${props => props.theme.font.size.large};
  ${baseStyling}
`;

export const H3 = styled.h3`
  font-size: ${props => props.theme.font.size.medium};
  ${baseStyling}
`;

export const H4 = styled.h4`
  font-size: ${props => props.theme.font.size.small};
  ${baseStyling}
`;

export const H5 = styled.h5`
  font-size: ${props => props.theme.font.size.xSmall};
  ${baseStyling}
`;
