import { render, screen } from "@testing-library/react";
import { Avatar } from "../avatar";

describe('Avatar test', () => {
  it('should render without crashing', () => {
    render(<Avatar src="https://i.pravatar.cc/150?img=5"/>);
    expect(screen.getByAltText(/Avatar/)).toBeInTheDocument();
  });

  it('should render with the correct classes for "s" size', () => {
    const renderedComponent = render(<Avatar size="s" src="https://i.pravatar.cc/150?img=5"/>);
    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('should render with the correct classes for "l" size', () => {
    const renderedComponent = render(<Avatar size="l" src="https://i.pravatar.cc/150?img=5"/>);
    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('should render with the correct classes for "xl" size', () => {
    const renderedComponent = render(<Avatar size="xl" src="https://i.pravatar.cc/150?img=5"/>);
    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
})