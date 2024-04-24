import { isLoggedInSelector } from '../auth';

describe('Selectors: Auth', () => {
  it('should return isLoggedIn true', () => {
    const mockParameters = {
      Auth: {
        token: { id: 'test' },
      },
    };

    const { isLoggedIn } = isLoggedInSelector.resultFunc(mockParameters.Auth);
    expect(isLoggedIn).toBe(true);
  });

  it('should retain the original Auth state tree', () => {
    const mockParameters = {
      Auth: {
        token: { id: 'test' },
        loading: false,
        error: 'test',
      },
    };

    const selected = isLoggedInSelector.resultFunc(mockParameters.Auth);
    expect(selected).toMatchObject(mockParameters.Auth);
  });
});
