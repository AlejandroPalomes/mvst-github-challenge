import { render } from "@testing-library/react";
import { Spinner } from "../spinner";

describe('Spinner test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<Spinner/>);
    expect(baseElement).toMatchSnapshot();
  });
})