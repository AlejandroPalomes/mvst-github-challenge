import { fireEvent, render, screen } from '@testing-library/react';
import { Card } from '../card.js';

const mockedCallback = {
  callback: () => ''
};

vi.spyOn(mockedCallback, 'callback');

describe('Card test', () => {
  it('should render without crashing', () => {
    render(<Card>Hello world!</Card>)
    expect(screen.getByText(/Hello world!/)).toBeInTheDocument();
  });

  it('should invoke callback when click on Card', () => {
    render(<Card onClick={mockedCallback.callback}>Hello world!</Card>)

    fireEvent.click(screen.getByText(/Hello world!/));

    expect(mockedCallback.callback).toBeCalled();
  });
});