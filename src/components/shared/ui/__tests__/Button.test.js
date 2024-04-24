import React from 'react';

import Button from '../Button/Button.style';
import { renderWithTheme } from '../../../../utils/style-utils';

import theme from '../../../../theme';

describe('Components: Shared: UI: Button', () => {
  it('renders correctly', () => {
    const wrapped = renderWithTheme(<Button />);
    expect(wrapped).toMatchSnapshot();
  });

  it('should render a block button', () => {
    const wrapped = renderWithTheme(<Button block />);
    expect(wrapped).toHaveStyleRule('display', 'block');
    expect(wrapped).not.toHaveStyleRule('width', 'auto');
  });

  it('should render a small size button', () => {
    const wrapped = renderWithTheme(<Button buttonSize="small" />);
    expect(wrapped).toHaveStyleRule('font-size', theme.font.size.small);
  });

  it('should render a primary colour button', () => {
    const wrapped = renderWithTheme(<Button colour="primary" />);
    expect(wrapped).toHaveStyleRule(
      'background-color',
      theme.colour.buttonPrimaryBackground
    );
  });
});
