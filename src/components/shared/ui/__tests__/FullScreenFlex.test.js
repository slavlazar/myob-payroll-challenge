import React from 'react';

import FullScreenFlex from '../FullScreenFlex';
import { renderWithTheme } from '../../../../utils/style-utils';

import theme from '../../../../theme';

describe('Components: Shared: UI: FullScreenFlex', () => {
  it('renders correctly', () => {
    const wrapped = renderWithTheme(<FullScreenFlex />);
    expect(wrapped).toMatchSnapshot();
  });

  it('should render a full screen flex container with a primary background', () => {
    const wrapped = renderWithTheme(<FullScreenFlex background="primary" />);
    expect(wrapped).toHaveStyleRule('background-color', theme.colour.primary);
  });
});
