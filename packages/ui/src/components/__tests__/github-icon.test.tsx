import { render } from "@testing-library/react";
import { GithubIcon } from "../github-icon";

describe('GithubIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<GithubIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})