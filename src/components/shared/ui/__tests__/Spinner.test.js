import React from 'react';

import Spinner from '../Spinner/Spinner.style';
import { renderWithTheme } from '../../../../utils/style-utils';

describe('Components: Shared: UI: Spinner', () => {
  it('should render correctly', () => {
    const wrapped = renderWithTheme(<Spinner />);
    expect(wrapped).toMatchSnapshot();
  });

  it('should render centered spinner', () => {
    const wrapped = renderWithTheme(<Spinner centered />);
    expect(wrapped).toHaveStyleRule('position', 'absolute');
    expect(wrapped).toHaveStyleRule('top', '50%');
    expect(wrapped).toHaveStyleRule('left', '50%');
  });

  it('should render a large centered spinner', () => {
    const wrapped = renderWithTheme(<Spinner centered size="large" />);
    const size = 200;

    expect(wrapped).toHaveStyleRule('width', `${size}px`);
    expect(wrapped).toHaveStyleRule('margin-left', `-${size / 2}px`);
    expect(wrapped).toHaveStyleRule('margin-top', `-${size / 2}px`);
  });
});
