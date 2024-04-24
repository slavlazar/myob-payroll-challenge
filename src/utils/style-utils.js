import React from 'react';
import { mount } from 'enzyme';
import { css, ThemeProvider } from 'styled-components';

import theme from '../theme';

const { media: sizes } = theme;

// Media query, usage: ${media.tablet`padding: 1.5rem`}
// min-width used for mobile-first design
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const renderWithTheme = component => {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
