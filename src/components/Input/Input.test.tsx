import { render, fireEvent, screen } from '@test-utils';
import { Input } from './Input';

describe('Input component', () => {
  it('should render the Input component with the correct placeholder and value', () => {
    const placeholderText = 'Enter text';
    const inputValue = 'Test input';
    const onChangeMock = jest.fn();

    render(<Input placeholder={placeholderText} value={inputValue} onChange={onChangeMock} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    expect(inputElement).toHaveAttribute('placeholder', placeholderText);
    expect(inputElement).toHaveValue(inputValue);
  });

  it('should call the onChange callback when the input value changes', () => {
    const onChangeMock = jest.fn();
    const initialValue = 'Initial value';

    render(<Input placeholder="Enter text" value={initialValue} onChange={onChangeMock} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New value' } });
    expect(onChangeMock).toHaveBeenCalledWith('New value');
  });

  it('should update the input value when the value prop changes', () => {
    const onChangeMock = jest.fn();
    const initialValue = 'Initial value';
    const updatedValue = 'Updated value';

    const { rerender } = render(<Input placeholder="Enter text" value={initialValue} onChange={onChangeMock} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(initialValue);

    rerender(<Input placeholder="Enter text" value={updatedValue} onChange={onChangeMock} />);

    expect(inputElement).toHaveValue(updatedValue);
  });
});
