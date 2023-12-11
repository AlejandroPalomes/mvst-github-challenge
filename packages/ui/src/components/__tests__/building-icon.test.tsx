import { render } from "@testing-library/react";
import { BuildingIcon } from "../building-icon";

describe('BuildingIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<BuildingIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})