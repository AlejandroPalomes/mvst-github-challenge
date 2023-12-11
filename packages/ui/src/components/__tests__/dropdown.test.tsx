import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown, type DropdownVariants } from '../dropdown.js';

const mockedCallback = {
  onChange: (value: string) => { value },
  onSelect: (value: string) => () => { value }
}

vi.spyOn(mockedCallback, 'onSelect');

class Setup {
  private variant: DropdownVariants;

  constructor(variant: DropdownVariants = 'static') {
    this.variant = variant;
  }

  render() {
    render(this.variant === 'searcher' ? this.getSearcherVariant() : this.getStaticVariant());
    return this;
  }

  private getSearcherVariant() {
    return <Dropdown onChange={mockedCallback.onChange} placeholder="Search..." variant="searcher">
      <Dropdown.Item onSelect={mockedCallback.onSelect('Item 1')}>Item 1</Dropdown.Item>
      <Dropdown.Item onSelect={mockedCallback.onSelect('Item 2')}>Item 2</Dropdown.Item>
    </Dropdown>;
  }

  private getStaticVariant() {
    return <div>
      <div>This is an outside dropdown element</div>
      <Dropdown headerTitle="Select an option...">
        <Dropdown.Item onSelect={mockedCallback.onSelect('Item 1')}>Item 1</Dropdown.Item>
        <Dropdown.Item onSelect={mockedCallback.onSelect('Item 2')}>Item 2</Dropdown.Item>
      </Dropdown>
    </div>;
  }

  clickByText(text = /Select an option.../) {
    fireEvent.click(screen.getByText(text));
    return this;
  }

  type(value: string) {
    const input = screen.getByPlaceholderText(/Search.../);
    fireEvent.focus(input);
    fireEvent.change(input, {
      target: { value }
    });
    return this;
  }
}

describe('Dropdown test', () => {
  it('should render without crashing when variant === "static"', () => {
    new Setup('static').render();
    expect(screen.getByText(/Select an option.../)).toBeInTheDocument();
  });

  it('should render without crashing when variant === "searcher"', () => {
    new Setup('searcher').render();
    expect(screen.getByPlaceholderText(/Search.../)).toBeInTheDocument();
  });

  it('should open with options (static) on click', () => {
    const setup = new Setup().render();

    expect(screen.queryByText(/Item 1/)).not.toBeInTheDocument();

    setup.clickByText();

    expect(screen.getByText(/Item 1/)).toBeInTheDocument();
  });

  it('should open with options (searcher) on focus and type something', () => {
   const setup = new Setup('searcher').render();

    expect(screen.queryByText(/Item 1/)).not.toBeInTheDocument();

    setup.type('John');
  
    expect(screen.getByText(/Item 1/)).toBeInTheDocument();
  });

  it('should invoke callback on click dropdown item child element', () => {
    const setup = new Setup().render();

    setup.clickByText()
    fireEvent.click(screen.getByText(/Item 1/));
  
    expect(mockedCallback.onSelect).toHaveBeenCalledWith('Item 1');
  });

  it('should close options when click outside component', () => {
    const setup = new Setup().render();
    setup.clickByText()

    expect(screen.getByText(/Item 1/)).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText(/This is an outside dropdown element/))
    
    expect(screen.queryByText(/Item 1/)).not.toBeInTheDocument()
  });
})