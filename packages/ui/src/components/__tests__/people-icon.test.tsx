import { render } from "@testing-library/react";
import { PeopleIcon } from "../people-icon";

describe('PeopleIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<PeopleIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})