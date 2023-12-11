import { render } from "@testing-library/react";
import { FolderIcon } from "../folder-icon";

describe('FolderIcon test', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<FolderIcon/>);
    expect(baseElement).toMatchSnapshot();
  });
})