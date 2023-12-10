import { render, screen } from '@testing-library/react';
import { UserCard } from "../UserCard.tsx";
import { UsersMocks } from '../../__mocks__/Users.mocks.ts';

import { User } from '../../models/User.ts';
import { withProviders } from '../../utils/testing/renderHelper.tsx';

class Setup {
  private user: User;

  constructor() {
    this.user = UsersMocks[0];
  }

  render() {
    render(withProviders(<UserCard user={this.user}/>));
    return this;
  }

  async forLoadingComplete() {
    return screen.findByText(/John Doe/);
  }

  withUser(user: User) {
    this.user = user;
    return this;
  }
}

describe('UserCard test', () => {
  it('should render without crashing with a complete user', async () => {
    new Setup().render();
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  })

  it('should render without crashing with a user with missing info', () => {
    new Setup().withUser(UsersMocks[1]).render();
    expect(screen.getByText(/John Incompleted/)).toBeInTheDocument();
  })
})