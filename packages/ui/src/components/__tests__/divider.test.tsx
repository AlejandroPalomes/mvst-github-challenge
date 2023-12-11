import { render } from "@testing-library/react";
import { Divider } from "../divider";

describe('Divider test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<Divider/>);
    expect(baseElement).toMatchSnapshot();
  });
})