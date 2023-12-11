import { render } from "@testing-library/react";
import { WorldIcon } from "../world-icon";

describe('WorldIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<WorldIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})