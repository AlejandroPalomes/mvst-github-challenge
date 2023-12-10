import { fireEvent, render, screen } from '@testing-library/react';
import { UsersMocks } from '../../__mocks__/Users.mocks.ts';

import { withProviders } from '../../utils/testing/testHelper.tsx';
import { UserSearcher } from '../UserSearcher.tsx';
import { APIVariables } from '../../hooks/api/useGet.tsx';

vi.mock('../../hooks/api/useGetDebouced.tsx', async () => {
  const actual = await vi.importActual("../../hooks/api/useGetDebouced.tsx");
  return {
    ...actual,
    useGetDebounced: (_: never, variables: APIVariables) => ({ data: UsersMocks.filter(mock => mock.name.includes(variables.username || '')) })
  }
})

class Setup {
  render() {
    render(withProviders(<UserSearcher/>));
    return this;
  }

  type(value: string) {
    const input = screen.getByPlaceholderText(/Search user.../);
    fireEvent.focus(input);
    fireEvent.change(input, {
      target: { value }
    });
    return this;
  }
}

describe('UserCard test', () => {
  it('should render without crashing', async () => {
    new Setup().render();
    expect(screen.getByPlaceholderText(/Search user.../)).toBeInTheDocument();
  });

  it('should render users results', () => {
    new Setup().render().type(UsersMocks[0].name);
    expect(screen.getByText(UsersMocks[0].name)).toBeInTheDocument();
  });

  it('should render no users found if api returns empty array', () => {
    new Setup().render().type('User unexistant');
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('should navigate to user detail page on click', () => {
    const user = UsersMocks[0];
    new Setup().render().type(user.name);
    fireEvent.click(screen.getByText(user.name))

    expect(global.window.location.pathname).toContain(`/user/${user.login}`)
  });
})