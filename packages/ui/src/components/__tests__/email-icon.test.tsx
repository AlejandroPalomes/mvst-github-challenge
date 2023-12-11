import { render } from "@testing-library/react";
import { EmailIcon } from "../email-icon";

describe('EmailIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<EmailIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})