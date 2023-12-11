import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
import { UserCard } from "../UserCard.tsx";
import { UsersMocks } from '../../__mocks__/Users.mocks.ts';

import { User } from '../../models/User.ts';
import { withProviders } from '../../utils/testing/testHelper.tsx';

class Setup {
  private user: User;
  private renderResult?: RenderResult;

  constructor() {
    this.user = UsersMocks[0];
  }

  render() {
    this.renderResult = render(withProviders(<UserCard user={this.user}/>));
    return this;
  }

  withIncompleteUser() {
    this.user = UsersMocks[1];
    return this;
  }

  getRender() {
    if (!this.renderResult) {
      throw Error('Render result not defined!');
    } 
    return this.renderResult;
  }
}

describe('UserCard test', () => {
  it('should render without crashing with a complete user', async () => {
    new Setup().render();
    expect(screen.getByText(UsersMocks[0].name)).toBeInTheDocument();
  });

  it('should render without crashing with a user with missing info', () => {
    new Setup().withIncompleteUser().render();
    expect(screen.getByText(UsersMocks[1].name)).toBeInTheDocument();
  });

  it('should match snapshot with a complete user', () => {
    const { baseElement } = new Setup().render().getRender();
    expect(baseElement).toMatchSnapshot();
  });
  
  it('should match snapshot with a user missing info', () => {
    const { baseElement } = new Setup().withIncompleteUser().render().getRender();
    expect(baseElement).toMatchSnapshot();
  });
  
  it('should navigate to user detail page on click', () => {
    new Setup().render();
    const user = UsersMocks[0];
    fireEvent.click(screen.getByText(user.name))

    expect(global.window.location.pathname).toContain(`/user/${user.login}`)
  });
})