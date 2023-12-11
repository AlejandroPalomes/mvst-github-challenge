import { render } from "@testing-library/react";
import { LinkedinIcon } from "../linkedin-icon";

describe('LinkedinIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<LinkedinIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})