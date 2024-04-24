import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Redirect } from 'react-router-dom';

import { PrivateRouteComponent } from '../PrivateRoute';

const shallowWrapper = (props = {}) => {
  const allProps = {
    component: () => {},
    ...props,
  };

  return shallow(
    <MemoryRouter>
      <PrivateRouteComponent {...allProps} />
    </MemoryRouter>
  );
};

describe('Components: Shared: PrivateRoute', () => {
  it('should redirect the user to the login screen if they are not logged in', () => {
    const loginPath = '/login';

    const wrapped = shallowWrapper({ loginPath, isLoggedIn: false });
    const render = wrapped
      .find(PrivateRouteComponent)
      .dive()
      .renderProp('render')();

    const reactRouterDomRedirect = render.dive();

    expect(reactRouterDomRedirect.find(Redirect)).toHaveLength(1);
    const props = reactRouterDomRedirect.props();
    expect(props.to.pathname).toEqual(loginPath);
  });
});
