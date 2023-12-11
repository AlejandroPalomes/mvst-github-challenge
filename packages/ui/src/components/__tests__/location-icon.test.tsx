import { render } from "@testing-library/react";
import { LocationIcon } from "../location-icon";

describe('LocationIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<LocationIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})